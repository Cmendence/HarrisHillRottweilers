import React from "react";
import DogCard from "../DogCard";

export default function Females({ handleDogClick, dogs }) {
  const femaleDogs = dogs.filter((dog) => dog.tags.includes("Female"));

  return (
    <div>
      <h1 className=" text-center text-3xl font-semibold text-gray-800 my-4">
        Our Females
      </h1>

      <div className="flex justify-center flex-wrap lg:m-8 my-8">
        {femaleDogs.map((dog) => (
          <DogCard
            id={dog.id}
            key={dog.id}
            dog={dog}
            handleDogClick={handleDogClick}
          />
        ))}
      </div>
    </div>
  );
}
