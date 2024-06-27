import { useState, useEffect } from "react";
import { db, storage } from "../../firebase.js";
import { collection, addDoc, updateDoc, getDocs, doc, deleteDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AdminTabs from "../AdminTabs.jsx";

const EditGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [form, setForm] = useState({
    description: "",
  });
  const [newFiles, setNewFiles] = useState([]);
  const [existingFiles, setExistingFiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPhotoId, setCurrentPhotoId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    show: false,
    photoId: null,
  });

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gallery"));
        const photosList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPhotos(photosList);
        console.log("Fetched photos:", photosList);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const filesWithNames = files.map((file) => ({ file, name: file.name }));
    setNewFiles(filesWithNames);
  };

  const handleFileDelete = (index, existing = true) => {
    if (existing) {
      const updatedFiles = existingFiles.filter((_, i) => i !== index);
      setExistingFiles(updatedFiles);
    } else {
      const updatedFiles = newFiles.filter((_, i) => i !== index);
      setNewFiles(updatedFiles);
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

  const handleAddPhoto = async () => {
    const urls = await uploadFiles(newFiles, `gallery`);

    const newPhoto = {
      description: form.description,
      images: urls.map((url, idx) => ({
        name: newFiles[idx].name,
        url,
      })),
    };

    try {
      const docRef = await addDoc(collection(db, "gallery"), newPhoto);
      newPhoto.id = docRef.id; // Assign Firestore's autogenerated ID
      setPhotos([...photos, newPhoto]);
      resetForm();
      setSuccessMessage("Photo successfully added!");
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000); // Hide after 2 seconds
    } catch (error) {
      console.error("Error adding photo:", error);
    }
  };

  const handleEditPhoto = (id) => {
    const photoToEdit = photos.find((photo) => photo.id === id);
    if (photoToEdit) {
      setForm({ description: photoToEdit.description });
      setExistingFiles(photoToEdit.images || []);
      setNewFiles([]);
      setIsEditing(true);
      setCurrentPhotoId(id);
      window.scrollTo(0, 0);
    } else {
      console.error("Photo to edit not found in local state.");
    }
  };

  const handleUpdatePhoto = async () => {
    if (!currentPhotoId) {
      console.error("No photo ID set for editing.");
      return;
    }

    const photoDocRef = doc(db, "gallery", currentPhotoId);
    const photoDocSnapshot = await getDoc(photoDocRef);

    if (!photoDocSnapshot.exists()) {
      console.error("No document found for the given photo ID:", currentPhotoId);
      return;
    }

    try {
      const newImages = await uploadFiles(newFiles, `gallery`);

      const updatedPhoto = {
        description: form.description,
        images: [
          ...existingFiles,
          ...newImages.map((url, idx) => ({
            name: newFiles[idx].name,
            url,
          })),
        ],
      };

      await updateDoc(photoDocRef, updatedPhoto);
      setPhotos(
        photos.map((photo) =>
          photo.id === currentPhotoId ? { ...photo, ...updatedPhoto } : photo
        )
      );
      setSuccessMessage("Photo successfully updated!");
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000); // Hide after 2 seconds
    } catch (error) {
      console.error("Error updating photo:", error);
    }

    setIsEditing(false);
    resetForm();
  };

  const confirmDeletePhoto = (id) => {
    setDeleteConfirmation({ show: true, photoId: id });
  };

  const handleDeletePhoto = async () => {
    const photoId = deleteConfirmation.photoId;
    const photoDocRef = doc(db, "gallery", photoId);

    try {
      await deleteDoc(photoDocRef);
      setPhotos(photos.filter((photo) => photo.id !== photoId));
      console.log("Photo deleted successfully:", photoId);
    } catch (error) {
      console.error("Error deleting photo:", error);
    }

    setDeleteConfirmation({ show: false, photoId: null });
  };

  const cancelDelete = () => {
    setDeleteConfirmation({ show: false, photoId: null });
  };

  const resetForm = () => {
    setForm({ description: "" });
    setExistingFiles([]);
    setNewFiles([]);
    setIsEditing(false);
    setCurrentPhotoId(null);

    // Reset the file input fields
    document.querySelectorAll('input[type="file"]').forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div className="lg:m-12 mt-4 m-4 font-semibold">
      <h1 className="text-4xl text-gray-800 capitalize font-semibold text-center mb-4">
        Edit Gallery
      </h1>
      <AdminTabs />
      <div className="bg-gray-800 p-6 rounded-tl-none rounded-lg shadow-lg shadow-gray-600 mb-8">
        <h2 className="text-2xl text-gray-100 font-semibold mb-4">
          {isEditing ? "Edit Photo" : "Add Photo"}
        </h2>

        <div className="flex flex-col border border-yellow-500 rounded-md p-4">
          <label className="ml-2 text-gray-100" htmlFor="images">
            Images
          </label>
          {newFiles.length > 0 && (
            <div>
              <h3 className="text-yellow-500">NEW Files</h3>
              <div className="mt-2 flex">
                {newFiles.map((image, index) => (
                  <div key={index} className="relative mr-2">
                    <img
                      src={URL.createObjectURL(image.file)}
                      alt={image.name}
                      className="h-24 rounded"
                    />
                    <p className="text-gray-100 text-sm mt-1">{image.name}</p>
                    <button
                      onClick={() => handleFileDelete(index, false)}
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
            onChange={handleFileChange}
            className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 text-gray-100 cursor-pointer"
          />
          {existingFiles.length > 0 && (
            <div>
              <h3 className="text-gray-100">-Existing files-</h3>
              <div className="mt-2 flex">
                {existingFiles.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.url}
                      alt={image.name}
                      className="lg:h-24 h-12 rounded mr-2"
                    />
                    <p className="text-gray-100 lg:text-sm text-xs mt-1">
                      {image.name}
                    </p>
                    <button
                      onClick={() => handleFileDelete(index, true)}
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
        <div className="flex flex-col">
          <label className="ml-2 text-gray-100" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleInputChange}
            placeholder="Enter description"
            className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
          />
        </div>
        <div className="mt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdatePhoto}
                className="bg-yellow-400 text-gray-700 p-2 rounded hover:bg-yellow-500 active:bg-yellow-600 active:shadow-none shadow-md shadow-black"
              >
                Update Photo
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
              onClick={handleAddPhoto}
              className="bg-green-700 text-gray-100 shadow-md shadow-black p-2 rounded hover:bg-green-800 active:shadow-none active:bg-green-900"
            >
              Add Photo
            </button>
          )}
          {showSuccessMessage && (
            <span className="ml-4 text-green-400 font-semibold">
              {successMessage}
            </span>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-gray-800 font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative bg-gray-800 px-4 pt-9 pb-4 rounded-lg">
              <div className=" flex">
                {photo.images.map((image, idx) => (
                   <div key={idx} className="relative mr-2">
                      <p className="text-gray-100 text-xs mt-1 mb-2">{image.name}</p>
                    <img
                      src={image.url}
                      alt={image.name}
                      className="h-24 rounded"
                    />
                     <div className="text-gray-100 font-normal text-xs">{photo.description}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleEditPhoto(photo.id)}
                className="absolute top-2 left-2 bg-yellow-500 text-gray-800 p-1 text-sm rounded"
              >
                Edit
              </button>
              <button
                onClick={() => confirmDeletePhoto(photo.id)}
                className="absolute top-2 right-2 bg-rose-700 text-white p-1 text-sm rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {deleteConfirmation.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-gray-300 mb-4 text-center">
              Delete photo?
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleDeletePhoto}
                className="bg-rose-700 text-white p-2 rounded mr-2"
              >
                Confirm
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 text-gray-800 p-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditGallery;