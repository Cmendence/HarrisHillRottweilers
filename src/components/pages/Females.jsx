// import React from "react";
// import { useData } from "../../components/useData.jsx"; // Import the DataContext
// import DogCard from "../DogCard";

// export default function Females({ handleDogClick }) {
//   const { data: dogs, loading } = useData(); // Access the data and loading state from the context

//   console.log("Females component data:", dogs); // Log the data to check if it's received

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading state while data is being fetched
//   }

//   const femaleDogs = dogs.filter((dog) => dog.tags.includes("Female"));

//   return (
//     <div>
//       <h1 className=" text-center text-3xl font-semibold text-gray-800 my-4">
//         Our Females
//       </h1>
//       <div className="flex justify-center flex-wrap lg:m-8 my-8">
//         {femaleDogs.map((dog) => (
//           <DogCard
//             id={dog.id}
//             key={dog.id}
//             dog={dog}
//             handleDogClick={handleDogClick}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { useData } from "../../components/useData.jsx"; // Import the DataContext
import DogCard from "../DogCard";

export default function Females({ handleDogClick }) {
  const { data: dogs, loading, fetchData } = useData(); // Access the data, loading state, and fetch function from the context

  useEffect(() => {
    fetchData(); // Fetch the data when the component mounts
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  console.log("Females component data:", dogs); // Log the data to check if it's received

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

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
