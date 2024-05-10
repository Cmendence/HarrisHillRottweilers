import React from "react";
// import { dogs } from "../assets/dogs";
import DogCard from "./DogCard";

export default function Males({ handleDogClick, dogs}) {
  return (
    <div className="flex justify-center flex-wrap lg:m-8 my-8">
      {dogs.map((dog) => (
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
