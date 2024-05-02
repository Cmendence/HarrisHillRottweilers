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
         If you&apos;re here, you must have found your next furry family member! Drop us a line and we&apos;ll be in touch soon.

      </p>
      <div className=" flex justify-center lg-m-4">
        <form className="border-gray-800 bg-gray-800 border-4 lg:p-8 p-3 rounded-md m-10 lg-w-1/2 text-center font-semibold shadow-xl flex flex-col items-center">
          <input type="text" placeholder="First Name" name="firstName" className="m-2 lg:pr-14 pr-14 px-1 py-2 rounded-md focus:outline-rose-800" required/>
          <input type="text" placeholder="Last Name" name="lastName" className="m-2 lg:pr-14 pr-14 px-1 py-2 rounded-md focus:outline-rose-800" required/>
          <input type="email" placeholder="Email" name="email" className="m-2 lg:pr-14 pr-14 px-1 py-2 rounded-md focus:outline-rose-800" required />
          <PhoneInput className="number m-2" country={"us"} />
          <textarea type="text" placeholder="Anything to add?" name="comments" className="m-2 lg:pr-20 pr-20 px-1 py-2 rounded-md focus:outline-rose-800" />
       
          <button
            type="submit"
            className="bg-rose-800 rounded border-4 border-rose-800 text-slate-200 font-semibold shadow-md m-4 w-28 h-10"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="text-sm text-gray-600 text-center pb-10">
        <p> We will never sell your data. </p>
        <p>Your secrets are safe with us.</p>
      </div>
    </div>
  );
}
