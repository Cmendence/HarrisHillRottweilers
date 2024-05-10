import React from "react";
import { Link } from "react-router-dom";

export default function DogCard({ dog, handleDogClick}) {
  return (
    <div>
      <div className="lg:w-48 w-36 rounded-lg text-center lg:m-4 m-4">
         
        <Link to={`/details/${dog.id}`} 
              rel="noopener noreferrer">
          <img
            src={dog.image}
            className="rounded-lg shadow-lg shadow-gray-600"
            alt={`Image of ${dog.name}`}
            onClick={()=> handleDogClick(dog)}
          />
        </Link>

        {/* <Link
          to={{
            pathname: `/details/${dog.id}`,
            state: { dog: dog },
          }}
          onClick={() => handleDogClick(selectedDog)}
        >
          <img
            src={dog.image}
            className="rounded-lg shadow-lg shadow-gray-600 lg:h-72 h-52"
            alt={`Image of ${dog.name}`}
          />
        </Link> */}
        <h2 className="font-semibold lg:text-xl text-md mt-1 text-gray-800">
          {dog.name}
        </h2>
      </div>
    </div>
  );
}
