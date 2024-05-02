import { Typography } from "@material-tailwind/react";
import Logo from '../assets/logo.svg'
 
export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 p-4 font-semibold">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center text-gray-300 md:justify-between">
        <img src={Logo} alt="logo-ct" className="w-14" />
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