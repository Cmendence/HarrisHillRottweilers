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
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
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
    <div className="font-semibold text-gray-700">
      <div className="tracking-wide text-center mx-4">
        <h1 className="text-4xl text-gray-800 mt-8 mb-6">
          {" "}
          We want to hear from you!
        </h1>
        <h2 className="lg:text-xl text-lg mb-4">
          You have questions; we have answers.
        </h2>
        <p className="mb-4">
          At Harris Hill Rottweilers, we take great pride in our work. If for
          any reason you need to get a hold of us, we want you to know we are
          here to help.
        </p>
      </div>
      <div className="mx-8 mb-6 lg:flex lg:justify-evenly">
        <div>
          <h2 className="flex items-center">
            <span className="rounded-full border border-gray-700 bg-yellow-400 p-2">
              {phoneIcon}
            </span>{" "}
            &nbsp; Call
          </h2>
          <p className="mb-2 ml-12"><a href="tel:401-256-1442">401-256-1442</a></p>
        </div>
        <hr className="border-1 border-rose-800 mb-2 lg:hidden" />
        <div>
          <h2 className="flex items-center">
            <span className="rounded-full border border-gray-700 bg-yellow-400 p-2">
              {emailIcon}
            </span>{" "}
            &nbsp; Email
          </h2>
          <p className="mb-2 ml-12"><a href="mailto:Harrishillrottweilers@yahoo.com" className="">Harrishillrottweilers@yahoo.com</a></p>
        </div>
        <hr className="border-1 border-rose-800 mb-2 lg:hidden" />

        <div>
          <h2 className="flex items-center">
            <span className="rounded-full border border-gray-700 bg-yellow-400 p-2">
              {locationPin}
            </span>{" "}
            &nbsp; <a href="geo:41.38564731303219, -71.66026745863803">Harris Hill Rottweilers LLC</a>
          </h2>
          <p className="ml-12"><a href="geo:41.38564731303219, -71.66026745863803">4969 Post Rd</a></p>
          <p className="ml-12"><a href="geo:41.38564731303219, -71.66026745863803">Charlestown, RI 02813</a></p>
        </div>
      </div>
    </div>
  );
}
