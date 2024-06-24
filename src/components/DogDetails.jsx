import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReservedBanner from "./ReservedBanner";
import { calculateAge } from "./utils/ageCalc";

export default function DogDetails() {
  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

  const navigate = useNavigate();

  const getDogFromLS = localStorage.getItem("selectedDog");
  const selectedDog = JSON.parse(getDogFromLS);

  const isReserved = selectedDog.tags.includes("Reserved");


  const scrollToTop = () => {
   window.scrollTo(0,0);
  }
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
        <h1 className="font-semibold text-gray-800 lg:text-3xl text-2xl mb-4 mx-4">
          {selectedDog.name}
        </h1>
        <div className="flex justify-center mx-8 my-2 relative">
          <img
            src={selectedDog.images}
            alt={`image of ${selectedDog.name}`}
            className={`lg:w-1/3 rounded-lg shadow-lg shadow-gray-900 ${
              isReserved && "opacity-75"
            }`}
          />
          {isReserved && <ReservedBanner />}
        </div>
        {selectedDog.tags.includes("Available") && (
        <div className=" text-center my-4">
         <Link to="/application">
          <button 
          className="bg-rose-900 rounded border-4 px-4 py-1.5 border-rose-900 hover:bg-rose-950 
          hover:border-rose-950 active:shadow-sm text-slate-100 font-semibold shadow-md shadow-black text-xl tracking-wide"
          onClick={scrollToTop}
          >
            Apply to take {selectedDog.name} home
          </button>
          </Link>
        </div>
      )}
        <div className="flex justify-center font-semibold ">
          <p className="m-2">Age: {calculateAge(selectedDog.birthdate)}</p>
          <p className="m-2 ">Gender: {selectedDog.gender}</p>
        </div>
        <hr className="border-1 border-rose-900 mx-8 my-4" />
        <h2 className="lg:text-2xl text-xl font-semibold text-gray-800 tracking-wide">
          {" "}
          Certifications
        </h2>
        <p className="text-xs text-gray-700 mb-2 tracking-tighter">
          Click an image to enlarge
        </p>
        <div className=" relative flex">
          {selectedDog.certs.map((cert, index) => (
            <div
              key={index}
              className={`mx-4 flex items-center flex-col ${
                enlargedImageIndex === index
                  ? "absolute lg:inset-x-72 bottom-0 lg:w-2/5 object-contain z-50 text-yellow-400"
                  : "lg:w-1/5 w-1/4"
              }`}
            >
              {/* <h2 className="font-semibold lg:text-base text-xs">
                {cert.name}
              </h2> */}
              <img
                src={cert.url}
                className={` rounded-md lg:my-4 my-2 `}
                alt={`Certifications for ${selectedDog.name}`}
                onClick={() => toggleEnlargeImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
}
