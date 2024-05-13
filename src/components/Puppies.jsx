import React from "react";
import DogCard from "./DogCard";

export default function Females({ handleDogClick, dogs}) {

   const puppies = dogs.filter((dog) => dog.tags.includes("Puppy"));

  return (
    <div className="flex justify-center flex-wrap lg:m-8 my-8">
      {puppies.map((dog) => (
        <DogCard
          id={dog.id}
          key={dog.id}
          dog={dog}
          handleDogClick={handleDogClick}
        
        />
      ))}
    </div>
  );
}
