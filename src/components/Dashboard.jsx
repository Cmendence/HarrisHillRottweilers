
import { useState, useEffect } from "react";
import { db, storage } from "../firebase.js";
import { collection, addDoc, updateDoc, getDocs, doc, getDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { calculateAge } from "../components/utils/ageCalc.jsx";
import DashDogCard from "./DashDogCard.jsx";

const AdminDashboard = () => {
  const [dogs, setDogs] = useState([]);
  const [form, setForm] = useState({
    name: "",
    birthdate: "",
    mother: "",
    father: "",
    tags: [],
  });
  const [existingFiles, setExistingFiles] = useState({
    images: [],
    certs: [],
  });
  const [newFiles, setNewFiles] = useState({
    images: [],
    certs: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentDogId, setCurrentDogId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState({ show: false, dogId: null });
  const [dogBeingEdited, setDogBeingEdited] = useState(null);

  const tags = [
    { name: "Male" },
    { name: "Female" },
    { name: "Available" },
    { name: "Reserved" },
    { name: "Puppy" },
  ];

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "dogs"));
        const dogsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDogs(dogsList);
        console.log("Fetched dogs:", dogsList);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      }
    };

    fetchDogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTagCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setForm({ ...form, tags: [...form.tags, name] });
    } else {
      setForm({ ...form, tags: form.tags.filter(tag => tag !== name) });
    }
  };

  const handleFileChange = (e, key) => {
    const files = Array.from(e.target.files);
    const filesWithNames = files.map(file => ({ file, name: file.name }));
    setNewFiles({ ...newFiles, [key]: [...newFiles[key], ...filesWithNames] });
  };

  const handleFileDelete = (index, key, existing = true) => {
    if (existing) {
      const updatedFiles = existingFiles[key].filter((_, i) => i !== index);
      setExistingFiles({ ...existingFiles, [key]: updatedFiles });
    } else {
      const updatedFiles = newFiles[key].filter((_, i) => i !== index);
      setNewFiles({ ...newFiles, [key]: updatedFiles });
    }
  };

  const uploadFiles = async (files, path) => {
    const urls = await Promise.all(
      files.map(async ({ file }) => {
        const storageRef = ref(storage, `${path}/${file.name}`);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
      })
    );
    return urls;
  };

  const handleAddDog = async () => {
    const images = await uploadFiles(newFiles.images, `dogs/images`);
    const certs = await uploadFiles(newFiles.certs, `dogs/certs`);

    const newDog = {
      ...form,
      images: images.map((url, idx) => ({ name: newFiles.images[idx].name, url })),
      certs: certs.map((url, idx) => ({ name: newFiles.certs[idx].name, url })),
    };

    try {
      const docRef = await addDoc(collection(db, "dogs"), newDog);
      newDog.id = docRef.id; // Assign Firestore's autogenerated ID
      setDogs([...dogs, newDog]);
      resetForm();
      setSuccessMessage("Dog successfully added!");
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000); // Hide after 2 seconds
    } catch (error) {
      console.error("Error adding dog:", error);
    }
  };

  const handleEditDog = (id) => {
    const dogToEdit = dogs.find((dog) => dog.id === id);
    if (dogToEdit) {
      setForm(dogToEdit);
      setExistingFiles({
        images: dogToEdit.images || [],
        certs: dogToEdit.certs || [],
      });
      setNewFiles({
        images: [],
        certs: [],
      });
      setIsEditing(true);
      setCurrentDogId(id);
      setDogBeingEdited(dogToEdit.name);
      window.scrollTo(0, 0);
    } else {
      console.error("Dog to edit not found in local state.");
    }
  };

  const handleUpdateDog = async () => {
    if (!currentDogId) {
      console.error("No dog ID set for editing.");
      return;
    }

    const dogDocRef = doc(db, "dogs", currentDogId);
    const dogDocSnapshot = await getDoc(dogDocRef);

    console.log("Updating dog with ID:", currentDogId);

    if (!dogDocSnapshot.exists()) {
      console.error("No document found for the given dog ID:", currentDogId);
      return;
    }

    try {
      const newImages = await uploadFiles(newFiles.images, `dogs/${currentDogId}/images`);
      const newCerts = await uploadFiles(newFiles.certs, `dogs/${currentDogId}/certs`);

      const updatedDog = {
        ...form,
        images: [...existingFiles.images, ...newImages.map((url, idx) => ({ name: newFiles.images[idx].name, url }))],
        certs: [...existingFiles.certs, ...newCerts.map((url, idx) => ({ name: newFiles.certs[idx].name, url }))],
      };

      await updateDoc(dogDocRef, updatedDog);
      setDogs(dogs.map((dog) => (dog.id === currentDogId ? { ...dog, ...updatedDog } : dog)));
      console.log("Dog updated successfully:", updatedDog);
      setSuccessMessage("Dog successfully updated!");
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000); // Hide after 2 seconds
    } catch (error) {
      console.error("Error updating dog:", error);
    }

    setIsEditing(false);
    resetForm();
  };

  const confirmDeleteDog = (id) => {
    setDeleteConfirmation({ show: true, dogId: id });
  };

  const handleDeleteDog = async () => {
    const dogId = deleteConfirmation.dogId;
    const dogDocRef = doc(db, "dogs", dogId);

    console.log("Deleting dog with ID:", dogId);

    try {
      await deleteDoc(dogDocRef);
      setDogs(dogs.filter((dog) => dog.id !== dogId));
      console.log("Dog deleted successfully:", dogId);
    } catch (error) {
      console.error("Error deleting dog:", error);
    }

    setDeleteConfirmation({ show: false, dogId: null });
  };

  const cancelDelete = () => {
    setDeleteConfirmation({ show: false, dogId: null });
  };

  const resetForm = () => {
    setForm({
      name: "",
      birthdate: "",
      mother: "",
      father: "",
      tags: [],
    });

    setExistingFiles({
      images: [],
      certs: [],
    });

    setNewFiles({
      images: [],
      certs: [],
    });

    // Reset the file input fields
    document.querySelectorAll('input[type="file"]').forEach((input) => {
      input.value = "";
    });

    setIsEditing(false);
    setCurrentDogId(null);
  };

  return (
    <div className="lg:m-12 mt-4 m-4 font-semibold">
      <h1 className="text-4xl text-gray-800 capitalize font-semibold text-center mb-4">
        Admin Dashboard
      </h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-gray-600 mb-8">
        <h2 className="text-2xl text-gray-100 font-semibold mb-4">
          {isEditing ? `Editing ${dogBeingEdited}` : "Add Dog"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label className="ml-2 text-gray-100" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2 text-gray-100" htmlFor="birthdate">
              Birthdate
            </label>
            <input
              type="date"
              name="birthdate"
              value={form.birthdate}
              onChange={handleInputChange}
              className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
            />
          </div>

          <div className="flex flex-col">
            <label className="ml-2 text-gray-100" htmlFor="mother">
              Mother
            </label>
            <input
              type="text"
              name="mother"
              value={form.mother}
              onChange={handleInputChange}
              placeholder="Mother"
              className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
            />
          </div>
          <div className="flex flex-col">
            <label className="ml-2 text-gray-100" htmlFor="father">
              Father
            </label>
            <input
              type="text"
              name="father"
              value={form.father}
              onChange={handleInputChange}
              placeholder="Father"
              className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
            />
          </div>
        
          <div className="flex flex-col border border-yellow-500 rounded-md p-4">
            <label className="ml-3 text-gray-100" htmlFor="images">
              Images
            </label>
            {newFiles.images.length > 0 && (
               <div>
                 <h3 className="text-yellow-500">NEW Files</h3>
              <div className="mt-2 flex">
                {newFiles.images.map((image, index) => (
                  
                  <div key={index} className="relative mr-2">
                    <img src={URL.createObjectURL(image.file)} alt={image.name} className=" h-24 rounded" />
                    <p className="text-gray-100 text-sm mt-1">{image.name}</p>
                    <button
                      onClick={() => handleFileDelete(index, "images", false)}
                      className="absolute top-1 right-1 bg-rose-700 text-white p-1 text-sm rounded-full"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              </div>
            )}
            <input
              type="file"
              multiple
              onChange={(e) => handleFileChange(e, "images")}
              className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 text-gray-100 cursor-pointer"
            />
            {existingFiles.images.length > 0 && (
               <div>
                 <h3 className="text-gray-100">Existing files</h3>
               <div className="mt-2 flex ">
                {existingFiles.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img src={image.url} alt={image.name} className=" h-24 rounded mr-2" />
                    <p className="text-gray-100 text-sm mt-1">{image.name}</p>

                    <button
                      onClick={() => handleFileDelete(index, "images", true)}
                      className="absolute top-1 right-2 bg-rose-700 text-gray-100 text-sm p-1 rounded-full"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              </div>
            )}
           
          </div>
          <div className="flex flex-col border border-yellow-500 rounded-md p-4">
            <label className="ml-2 text-gray-100" htmlFor="certs">
              Certifications
            </label>
            <input
              type="file"
              multiple
              onChange={(e) => handleFileChange(e, "certs")}
              className=" py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 text-gray-100 cursor-pointer"
            />
                        {newFiles.certs.length > 0 && (
              <div className="mt-2">
                             <h3 className="text-yellow-500">NEW Files</h3>

                {newFiles.certs.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between mt-2">
                    <span className="text-gray-100">{cert.name}</span>
                    <button
                      onClick={() => handleFileDelete(index, "certs", false)}
                      className="bg-rose-700 text-white p-1 rounded ml-2"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
            {existingFiles.certs.length > 0 && (
              <div className="mt-2">
               <h3 className="text-gray-100">Existing files</h3>
                {existingFiles.certs.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between mt-2">
                    <span className="text-gray-100">{cert.name}</span>
                    <button
                      onClick={() => handleFileDelete(index, "certs", true)}
                      className="bg-rose-700 text-white p-1 rounded ml-2"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}

          </div>
          <div className="m-2 rounded-md focus:outline-rose-800 indent-1">
            <label className="text-gray-100 mr-2 " htmlFor="tags">Tags:</label>
            {tags.map((tag) => (
              <label className="text-gray-100 mr-2 flex" key={tag.name}>
                <input
                  type="checkbox"
                  name={tag.name}
                  checked={form.tags.includes(tag.name)}
                  onChange={handleTagCheckboxChange}
                  className="mr-2 accent-rose-800 cursor-pointer "
                />
                {tag.name}
              </label>
            ))}
          </div>
        </div>
        <div className="mt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdateDog}
                className="bg-yellow-400 text-gray-700 p-2 rounded hover:bg-yellow-500 active:bg-yellow-600 active:shadow-none shadow-md shadow-black"
              >
                Update Dog
              </button>
              <button
                onClick={resetForm}
                className="bg-rose-700 text-white p-2 rounded ml-2 hover:bg-rose-800 active:bg-rose-900 active:shadow-none shadow-md shadow-black"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleAddDog}
              className="bg-green-700 text-gray-100 shadow-md shadow-black p-2 rounded hover:bg-green-800 active:shadow-none active:bg-green-900"
            >
              Add Dog
            </button>
          )}
          {showSuccessMessage && (
            <span className="ml-4 text-green-400 font-semibold">{successMessage}</span>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-gray-800 font-semibold mb-4">Dogs List</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dogs.map((dog) => (
            <DashDogCard
              key={dog.id}
              dog={dog}
              calculateAge={calculateAge}
              handleEditDog={handleEditDog}
              deleteConfirmation={deleteConfirmation}
              handleDeleteDog={handleDeleteDog}
              cancelDelete={cancelDelete}
              confirmDeleteDog={confirmDeleteDog}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
