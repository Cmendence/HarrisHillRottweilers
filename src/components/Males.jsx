import React from "react";
// import { dogs } from "../assets/dogs";
import DogCard from "./DogCard";

export default function Males({ handleDogClick, dogs}) {

   const maleDogs = dogs.filter((dog) => dog.tags.includes("Male"));

  return (
  <div>
   <h1 className="border-4 border-pink-500 text-center text-3xl font-semibold text-gray-800 my-4">Our Males</h1>
    <div className="flex justify-center flex-wrap lg:m-8 my-8">
      {maleDogs.map((dog) => (
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
