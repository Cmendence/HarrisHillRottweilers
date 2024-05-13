import React from "react";

export default function Contact() {
  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );

  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  );

  const locationPin = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );

  return (
    <div className="font-semibold text-gray-700 lg:tracking-wide mx-4">
      <div className="text-center">
        <h1 className="text-4xl text-gray-800 mt-10 mb-6">
          {" "}
          We want to hear from you!
        </h1>
        <h2 className="text-xl mb-4">You have questions; we have answers.</h2>
        <p className="mb-4">
          At Harris Hill Rottweilers, we take great pride in our work. If for
          any reason you need to get a hold of us, we want you to know we are
          here to help.
        </p>
        <div className="flex justify-evenly m-4">
          <div className="">
            <p className="flex items-center">
              Call us &nbsp;
              <span className="bg-yellow-400 rounded-full p-1.5 border border-gray-700">
                {phoneIcon}
              </span>
            </p>
            <p>401-256-1442</p>
          </div>
          <div>
            <p className="flex items-center">
              Email &nbsp;
              <span className="bg-yellow-400 rounded-full p-1.5 border border-gray-700">
                {emailIcon}
              </span>
            </p>
            <p>Harrishillrottweilers@yahoo.com</p>
          </div>
          <div>
            <p className="flex items-center">
            Harris Hill Rottweilers LLC &nbsp;
              <span className="bg-yellow-400 rounded-full p-1.5 border border-gray-700">
                {locationPin}
              </span>
            </p>
            <p>4969 Post Rd</p> 
               <p>Charlestown, RI 02813</p>
          </div>
        </div>
      </div>
    </div>
  );
}
