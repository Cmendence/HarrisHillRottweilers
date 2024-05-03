import { Typography } from "@material-tailwind/react";
import Logo from "../assets/logo.svg";
import iconX from "../assets/icons/icons8-twitterx-50.png";
import iconFB from "../assets/icons/icons8-facebook-50.png";
import iconIG from "../assets/icons/icons8-insta-50.png";
import iconTT from "../assets/icons/icons8-tiktok-50.png";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 p-4 font-semibold">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center text-gray-300 md:justify-between">
        <img src={Logo} alt="logo-ct" className="w-14" />
        <div className="flex text-center lg:ml-56">
          {/* <a href="">
            <img
              src={iconX}
              className="bg-rose-900 rounded-md w-8 mr-4 hover:cursor-pointer"
            />
          </a> */}
          <a
            href="https://www.facebook.com/people/Harris-Hill-Rottweilers/100063702905844/"
            target="_blank"
            rel="noopener noreferrer"
            className=" mr-4"
          >
            <img src={iconFB} className="bg-rose-900 rounded-md w-8 " />
          </a>
          <a
            href="https://www.instagram.com/harris_hill_rottweilers/"
            target="_blank"
            rel="noopener noreferrer"
            className=" mr-4"
          >
            <img src={iconIG} className="bg-rose-900 rounded-md w-8" />
          </a>
          <a
            href="https://www.tiktok.com/@harris_hill_rottweilers"
            target="_blank"
            rel="noopener noreferrer"
            className=" mr-4"
          >
            <img src={iconTT} className="bg-rose-900 rounded-md w-8" />
          </a>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className=" transition-colors hover:text-yellow-400 active:text-yellow-600"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className=" transition-colors hover:text-yellow-400 active:text-yellow-600"
            >
              License
            </Typography>
          </li>

          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="transition-colors hover:text-yellow-400 active:text-yellow-600"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-2 border-gray-500" />
      <Typography className="text-center text-gray-500 text-xs">
        &copy; 2024 Cmendence Design
      </Typography>
    </footer>
  );
}
