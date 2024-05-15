import Logo from "../assets/logo.svg";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen mt-12">
      <div className="text-center">
        <img src={Logo} className="w-1/2 mx-auto" alt="Logo" />
        <h1 className="text-5xl text-gray-800 font-extrabold underline mt-12">
          HOME PAGE
        </h1>
        <div className="m-4 flex justify-center h-1/3">
        <iframe
        className="rounded-lg shadow-lg shadow-gray-800"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4753431226777!2d-71.66289602343963!3d41.38548229611259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e5c1fa54b62fb5%3A0xb7cac8bba0289eed!2s4969%20Post%20Rd!5e0!3m2!1sen!2sus!4v1715784066888!5m2!1sen!2sus"
          width="full"
          height="full"
          style={{border: "0"}}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        <p></p>
      </div>
    </div>
  );
}
