import React from "react";
import { useData } from "../../components/useData.jsx"; // Import the DataContext
import DogCard from "../DogCard";

export default function Males({ handleDogClick }) {
  const { data: dogs, loading } = useData(); // Access the data and loading state from the context

  console.log("Puppies component data:", dogs); // Log the data to check if it's received

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  const puppies = dogs.filter((dog) => dog.tags.includes("Puppy"));

  return (
    <div>
      <h1 className=" text-center text-3xl font-semibold text-gray-800 my-4">
        Our Puppies
      </h1>
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
    </div>
  );
}
