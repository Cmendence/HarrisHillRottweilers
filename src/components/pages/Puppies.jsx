


import { useEffect } from "react";
import { useData } from "../../components/useData.jsx";
import DogCard from "../DogCard";

export default function Females({ handleDogClick }) {
  const { dogsData, setDogsData, loading, fetchData } = useData(); // Access the data, loading state, and fetch function from the context

  useEffect(() => {
    fetchData("dogs", setDogsData); // Ensure the correct collection and setter function are used
  }, []);

  if (loading) {
    return <div className="font-semibold text-2xl m-10">Loading...</div>;
  }

  const puppies = dogsData && dogsData.length > 0 ? dogsData.filter((dog) => dog.tags.includes("Puppy")) : [];

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
