import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Application({dogs}) {

const [selectedDogObj, setSelectedDogObj] = useState(null)
const [selectedGender, setSelectedGender] = useState('');


// const availableDogs = dogs.filter((dog) => dog.tags.includes("Available"));

const filterDogs = (selectedGender) => {
   const filteredDogs = dogs.filter((dog) => {
       // Check if the dog is available and matches the selected gender
       return dog.tags.includes("Available") && (selectedGender === '' || dog.gender === selectedGender);
   });
   return filteredDogs;
};

const handleSelectChange = (e) => {
   const selectedDogName = e.target.value;
   const selectedDog = filteredDogs.find((dog) => dog.name === selectedDogName);
   setSelectedDogObj(selectedDog);
};

const handleGenderChange = (e) => {
   setSelectedGender(e.target.value);
};

const filteredDogs = filterDogs(selectedGender);

  return (
    <div className="lg:m-12 mt-4 m-4">
      <h1 className="text-4xl text-gray-800 capitalize font-bold text-center mb-4">
        {" "}
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
          <h2 className="font-semibold text-xl text-gray-300 text-center">Dog Information</h2>
          <div className=" flex justify-center ">
            <div className=" flex items-center  justify-between">
            <div className="flex flex-col">
               <label htmlFor="dogGender" className="text-gray-300 mx-0 my-2 font-semibold ">Gender <span className="text-rose-600">*</span></label>
               <select id="dogGender" value={selectedGender} onChange={handleGenderChange} className="rounded-md indent-1 px-1 py-2 focus:outline-rose-800">
                  <option value="" className="font-semibold checked:bg-rose-800 checked:text-gray-100">Select Gender...</option>
                  <option value="Male" className="font-semibold checked:bg-rose-800 checked:text-gray-100">Male</option>
                  <option value="Female" className="font-semibold checked:bg-rose-800 checked:text-gray-100">Female</option>

               </select>
            </div>
               <div className="flex flex-col w-1/2">
            <label htmlFor="dogSelect" className="text-gray-300 mx-0 my-2 ">Name <span className="text-rose-600">*</span></label>
            <select id="dogSelect"  value={selectedDogObj ? selectedDogObj.name : ''} className="rounded-md indent-1 px-1 py-2 focus:outline-rose-800" onChange={handleSelectChange}>
                <option value="" className="font-semibold">Select a companion...</option>
                {filteredDogs.map((dog) => (
                    <option key={dog.id} value={dog.name} className="font-semibold checked:bg-rose-800 checked:text-gray-100">
                        {dog.name}
                    </option>
                ))}
            </select>
            </div>
         
            </div>
        </div>
          <div className="flex items-center flex-col">
            {selectedDogObj &&       <img
                  src={selectedDogObj.image}
                  alt={selectedDogObj.name}
                  className="mt-4 rounded-lg lg:w-48 w-32 shadow-lg shadow-black"
                />}
            <button
              type="submit"
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
