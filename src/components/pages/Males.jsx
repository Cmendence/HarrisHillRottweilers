// import React from "react";
// // import { dogs } from "../assets/dogs";
// import DogCard from "../DogCard";

// export default function Males({ handleDogClick, dogs }) {
//   const maleDogs = dogs.filter((dog) => dog.tags.includes("Male"));

//   return (
//     <div>
//       <h1 className=" text-center text-3xl font-semibold text-gray-800 my-4">
//         Our Males
//       </h1>
//       <div className="flex justify-center flex-wrap lg:m-8 my-8">
//         {maleDogs.map((dog) => (
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


import React from "react";
import { useData } from "../../components/useData.jsx"; // Import the DataContext
import DogCard from "../DogCard";

export default function Males({ handleDogClick }) {
  const { data: dogs, loading } = useData(); // Access the data and loading state from the context

  console.log("Males component data:", dogs); // Log the data to check if it's received

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  const maleDogs = dogs.filter((dog) => dog.tags.includes("Male"));

  return (
    <div>
      <h1 className=" text-center text-3xl font-semibold text-gray-800 my-4">
        Our Males
      </h1>
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
