import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useData } from "../components/utils/useData.jsx";

export default function Application() {
  const [selectedDogObj, setSelectedDogObj] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const { dogsData, setDogsData, fetchData } = useData(); // Access the data, loading state, and fetch function from the context

  useEffect(() => {
    fetchData("dogs", setDogsData); // Fetch the data when the component mounts
  }, []);

  const isMaleOrFemale = (dog) => {
    return dog.tags.includes("Male") ? "M" : "F";
  };

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const filterDogs = () => {
    return dogsData
      ? dogsData.filter((dog) => dog.tags.includes("Available"))
      : [];
  };

  const handleSelectChange = (e) => {
    const selectedDogName = e.target.value;
    const selectedDog = filteredDogs.find(
      (dog) => dog.name === selectedDogName
    );
    setSelectedDogObj(selectedDog);
  };

  const filteredDogs = filterDogs();

  return (
    <div className="lg:m-12 mt-4 m-4">
      {showPopover && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-stone-300 lg:p-8 p-6 rounded-lg text-center m-6 shadow-lg shadow-black">
            <p className="lg:text-xl text-lg font-semibold mb-2 text-clip">
              Thank you for your interest.
            </p>
            <p className="lg:text-xl text-lg font-semibold mb-2 text-clip">
              We&apos;ll be in touch soon!
            </p>
            <button
              className="bg-rose-900 rounded border-2 border-rose-900 hover:bg-rose-950 hover:border-rose-950 active:shadow-sm text-slate-100 font-semibold shadow-md shadow-black m-4 lg:w-28 lg:h-10 w-20 h-10"
              type="button"
              onClick={togglePopover}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <h1 className="text-4xl text-gray-800 capitalize font-bold text-center mb-4">
        Application for companionship
      </h1>
      <p className="text-lg font-semibold text-center">
        If you&apos;re here, you must have found your next furry family member!
        Drop us a line and we&apos;ll be in touch soon.
      </p>
      <div className=" flex justify-center lg-m-4">
        <form className=" bg-gray-800 lg:p-8 py-4 px-2 rounded-md m-10 lg:w-1/2 font-semibold shadow-lg shadow-gray-600">
          <div className="lg:flex justify-center">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-gray-300 ml-2">
                First Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Tom"
                name="firstName"
                className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 capitalize"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-gray-300 ml-2">
                Last Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Brady"
                name="lastName"
                className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 capitalize"
                required
              />
            </div>
          </div>
          <div className="lg:flex justify-center">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-300 ml-2">
                Email <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                placeholder="BradyGaga@gmail.com"
                name="email"
                className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
                required
              />
            </div>
            <div>
              <label htmlFor="Phone" className="text-gray-300 ml-2">
                Phone <span className="text-rose-600">*</span>
              </label>
              <PhoneInput className="number m-2" country={"us"} />
            </div>
          </div>
          <div className="lg:mx-10 flex justify-center flex-col">
            <div className=" flex flex-col">
              <label htmlFor="Address" className="text-gray-300 ml-2">
                Street Address <span className="text-rose-600">*</span>
              </label>
              <input
                type="address"
                placeholder="123 Fake St."
                name="address"
                className="m-2 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
                required
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="Address" className="text-gray-300 ml-2">
                Street Address Line 2
              </label>
              <input
                type="address"
                placeholder="Studio 54"
                name="address"
                className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
              />
            </div>
          </div>
          <div className="lg:flex justify-center">
            <div className="flex flex-col lg:w-1/3">
              <label htmlFor="city" className="text-gray-300 ml-2">
                City <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Albuquerque"
                name="city"
                className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 capitalize"
                required
              />
            </div>
            <div className="flex flex-col lg:w-1/5">
              <label htmlFor="state" className="text-gray-300 ml-2">
                State <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="NM"
                name="state"
                maxLength={2}
                className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 uppercase"
                required
              />
            </div>
            <div className="flex flex-col lg:w-1/3">
              <label htmlFor="zipcode" className="text-gray-300 ml-2">
                Postal / Zip Code <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="90210"
                name="zip"
                className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
                maxLength={5}
                required
              />
            </div>
          </div>
          <hr className="border-yellow-400 m-4" />
          <h2 className="font-semibold text-xl text-gray-300 text-center">
            I&apos;m interested in...
          </h2>
          <div className=" flex justify-center ">
            <div className=" flex items-center justify-between">
              <div className="flex w-1/2 mt-4">
                <select
                  id="dogSelect"
                  value={selectedDogObj ? selectedDogObj.name : ""}
                  className="rounded-md indent-1 px-1 py-2 focus:outline-rose-800"
                  onChange={handleSelectChange}
                >
                  <option value="" className="font-semibold">
                    Select a companion...
                  </option>
                  {filteredDogs.map((dog) => (
                    <option
                      key={dog.id}
                      value={dog.name}
                      className="font-semibold checked:bg-rose-800 checked:text-gray-100"
                    >
                      {dog.name} ({isMaleOrFemale(dog)})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            {selectedDogObj &&
              selectedDogObj.images &&
              selectedDogObj.images.length > 0 && (
                <img
                  src={selectedDogObj.images[0].url}
                  alt={selectedDogObj.name}
                  className="mt-4 rounded-lg lg:w-48 w-32 shadow-lg shadow-black"
                />
              )}
            <button
              onClick={togglePopover}
              className="bg-rose-900 rounded border-4 border-rose-900 hover:bg-rose-950 hover:border-rose-950 active:shadow-sm text-slate-100 font-semibold shadow-md shadow-black m-4 w-28 h-10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="text-sm text-gray-600 text-center pb-10">
        <p> We will never sell your data. </p>
        <p>Your secrets are safe with us.</p>
      </div>
    </div>
  );
}
