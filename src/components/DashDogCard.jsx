import React from "react";

export default function DashDogCard({
  dog,
  calculateAge,
  handleEditDog,
  deleteConfirmation,
  handleDeleteDog,
  cancelDelete,
  confirmDeleteDog,
}) {
  const findGender = dog.tags.includes("Male") ? "Male" : "Female";

  return (
    <div
      key={dog.id}
      className="bg-gray-800 p-4 rounded-lg shadow-lg shadow-gray-700"
    >
      <h3 className="text-lg font-bold text-gray-100 mb-1">{dog.name}</h3>

      <div className="grid grid-cols-2 gap-3">
        {dog.images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={dog.name}
            className=" h-36 rounded"
          />
        ))}
      </div>
      <div>
        <div>
          <div className="text-gray-300">
            <p>Gender: {findGender}</p>
            <p>Age: {calculateAge(dog.birthdate)}</p>
            <p>Mother: {dog.mother}</p>
            <p>Father: {dog.father}</p>
            <p>Birthdate: {dog.birthdate}</p>
            <p className="text-yellow-500">
              Tags:{" "}
              {dog.tags.map((tag) => (
                <p key={tag} className="text-gray-300">
                  -{tag}
                </p>
              ))}
            </p>
          </div>
        </div>
        <p className="text-yellow-500">Certs:</p>
        <div>
          {dog.certs.map((cert, index) => (
            <p key={index} className="text-gray-300">
              {cert.name}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between items-start">
        <button
          onClick={() => handleEditDog(dog.id)}
          className="bg-yellow-400 text-gray-700 shadow-md shadow-black hover:bg-yellow-500 active:bg-yellow-600 active:shadow-none p-2 rounded"
        >
          Edit
        </button>
        <div className="flex items-center">
          {deleteConfirmation.show && deleteConfirmation.dogId === dog.id ? (
            <div className="flex flex-col items-center">
              <p className="text-rose-500 mb-2">Delete {dog.name}?</p>
              <div>
                <button
                  onClick={handleDeleteDog}
                  className="bg-rose-700 text-white p-2 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={cancelDelete}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => confirmDeleteDog(dog.id)}
              className="bg-rose-700 shadow-md shadow-black hover:bg-rose-800 active:shadow-none active:bg-rose-900 text-gray-100 p-2 rounded"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
