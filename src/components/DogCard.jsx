import React from "react";
import { Link } from "react-router-dom";
import ReservedBanner from "./ReservedBanner";

export default function DogCard({ dog, handleDogClick }) {
  const isReserved = dog.tags.includes("Reserved");

  return (
    <div>
      <div className="lg:w-48 w-36 rounded-lg text-center lg:m-4 m-4">
        <Link to={`/details/${dog.id}`} rel="noopener noreferrer">
          <div className="relative">
            <img
              src={dog.image}
              className={`rounded-lg shadow-lg shadow-gray-600 ${
                isReserved && "opacity-75"
              }`}
              alt={`Image of ${dog.name}`}
              onClick={() => handleDogClick(dog)}
            />
            {isReserved && <ReservedBanner />}
          </div>
        </Link>
        <h2 className="font-semibold lg:text-xl text-md mt-1 text-gray-800">
          {dog.name}
        </h2>
      </div>
    </div>
  );
}
