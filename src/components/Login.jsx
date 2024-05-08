import React from "react";

export default function Login({ isLoggedIn, setIsLoggedIn, toggleLogin }) {
  return (
    <>
      {/*
         This example requires updating your template:
 
         ```
         <html class="h-full bg-white">
         <body class="h-full">
         ```
       */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">
            Welcome Back
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm min-h-screen">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-800"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="indent-4 pr-4 w-full py-2 rounded-md focus:outline-rose-800 font-semibold text-gray-800"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-800"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-rose-900 hover:text-rose-950"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" indent-4 pr-4 w-full py-2 rounded-md focus:outline-rose-800 "
                />
              </div>
            </div>

            <div>
              <button
                onClick={(e) => toggleLogin(e)}
                type="submit"
                className=" text-center w-full py-1.5 bg-rose-900 rounded border-4 border-rose-900 hover:bg-rose-950 hover:border-rose-950 text-slate-100 font-semibold shadow-md shadow-black"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
