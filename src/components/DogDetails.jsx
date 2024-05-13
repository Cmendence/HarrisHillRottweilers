import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReservedBanner from "./ReservedBanner";

export default function DogDetails() {
  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

  const navigate = useNavigate();

  const getDogFromLS = localStorage.getItem("selectedDog");
  const selectedDog = JSON.parse(getDogFromLS);

  const isReserved = selectedDog.tags.includes("Reserved");

  const toggleEnlargeImage = (index) => {
    setEnlargedImageIndex(enlargedImageIndex === index ? null : index);
  };

  return (
    <div className="">
      <button
        onClick={() => navigate(-1)}
        className="bg-rose-900 rounded border-4 border-rose-900 hover:bg-rose-950 hover:border-rose-950 active:shadow-sm text-slate-100 font-semibold shadow-md shadow-black lg:mx-12 my-4 mx-6 lg:w-28 h-10 w-20"
      >
        Back
      </button>
      <div className=" text-center">
        <h1 className="font-semibold text-gray-800 text-3xl mb-4">
          {selectedDog.name}
        </h1>
        <div className="flex justify-center mx-8 my-2 relative">
          <img
            src={selectedDog.image}
            alt={`image of ${selectedDog.name}`}
            className={`lg:w-1/3 rounded-lg shadow-lg shadow-gray-900 ${
              isReserved && "opacity-75"
            }`}
          />
          {isReserved && <ReservedBanner />}
        </div>
        <div className="flex justify-center font-semibold">
          <p className="m-2">Age: {selectedDog.age}</p>
          <p className="m-2 ">Gender: {selectedDog.gender}</p>
        </div>
        <div className=" relative flex">
          {selectedDog.certs.map((cert, index) => (
            <div
              key={index}
              className={`mx-6 flex items-center flex-col ${
                enlargedImageIndex === index
                  ? "absolute lg:inset-x-72 bottom-0 lg:w-1/2 object-contain z-50 text-yellow-400"
                  : "lg:w-1/5 w-1/4"
              }`}
            >
              <h2 className="font-semibold lg:text-xl">{cert.name}</h2>
              <img
                src={cert.image}
                className={` rounded-md m-4 `}
                alt={`certifications for ${selectedDog.name}`}
                onClick={() => toggleEnlargeImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
