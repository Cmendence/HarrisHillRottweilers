import React from "react";

export default function DashDogCard({
  dog,
  calculateAge,
  handleEditDog,
  deleteConfirmation,
  handleDeleteDog,
  cancelDelete,
  confirmDeleteDog
}) {
   return(
  <div
    key={dog.id}
    className="bg-gray-800 p-4 rounded-lg shadow-lg shadow-gray-700"
  >
    {dog.images.map((image, index) => (
      <img
        key={index}
        src={image.url}
        alt={dog.name}
        className=" h-36 rounded mb-3"
      />
    ))}
    <h3 className="text-lg font-bold text-gray-100">{dog.name}</h3>
    <p className="text-gray-300">Gender: {dog.gender}</p>
    <p className="text-gray-300">Age: {calculateAge(dog.birthdate)}</p>
    <p className="text-gray-300">Mother: {dog.mother}</p>
    <p className="text-gray-300">Father: {dog.father}</p>
    <p className="text-gray-300">Birthdate: {dog.birthdate}</p>
    <p className="text-gray-300">
      Tags:{" "}
      {dog.tags.map((tag) => (
        <p key={tag}>-{tag}</p>
      ))}
    </p>

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
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-500 text-white p-2 rounded"
              >
                No
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
   )
}
