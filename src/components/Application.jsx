import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Application() {
  return (
    <div className="lg:m-12 mt-4">
      <h1 className="text-4xl text-gray-800 capitalize font-bold text-center mb-4">
        {" "}
        Application for companionship
      </h1>
      <p className="text-lg font-semibold text-center">
        If you&apos;re here, you must have found your next furry family member!
        Drop us a line and we&apos;ll be in touch soon.
      </p>
      <div className=" flex justify-center lg-m-4">
        <form className="border-gray-800 bg-gray-800 border-4 lg:p-8 p-4 rounded-md m-10 lg:w-1/2 font-semibold shadow-lg shadow-gray-600">
          <div className="lg:flex justify-center">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-gray-300 ml-2">
                First Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Tom"
                name="firstName"
                className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
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
                className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4"
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
                className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 "
                required
              />
            </div>
            <div>
              <label htmlFor="Phone" className="text-gray-300 ml-2">
                Phone <span className="text-rose-600">*</span>
              </label>

              <PhoneInput className="number m-2" country={"us"} />
              {/* <textarea type="text" placeholder="Anything to add?" name="comments" className="m-2 lg:pr-20 pr-20 px-1 py-2 rounded-md focus:outline-rose-800" /> */}
            </div>
          </div>
          <div>
          <div className=" flex flex-col">
          
          <label htmlFor="Address" className="text-gray-300 ml-2">
           Street Address <span className="text-rose-600">*</span>
          </label>

          <input
            type="address"
            placeholder="123 Fake St."
            name="address"
            className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 "
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
            className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 "
            
          />
          </div>
          </div>
          {/* <label htmlFor="Address" className="text-gray-300 ml-2">
            Address <span className="text-rose-600">*</span>
          </label>

          <input
            type="address"
            placeholder="123 Fake St."
            name="address"
            className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 "
            required
          /> */}
          {/* <label htmlFor="Address" className="text-gray-300 ml-2">
            Address <span className="text-rose-600">*</span>
          </label>

          <input
            type="address"
            placeholder="123 Fake St."
            name="address"
            className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 "
            required
          />
          <label htmlFor="Address" className="text-gray-300 ml-2">
            Address <span className="text-rose-600">*</span>
          </label>

          <input
            type="address"
            placeholder="123 Fake St."
            name="address"
            className="m-2 px-1 py-2 rounded-md focus:outline-rose-800 indent-2 pr-4 "
            required
          /> */}
<div className="flex justify-center">
          <button
            type="submit"
            className="bg-rose-900 rounded border-4 border-rose-900 hover:bg-rose-950 hover:border-rose-950 text-slate-100 font-semibold shadow-md shadow-black m-4 w-28 h-10"
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
