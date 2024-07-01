
export default function Home() {
  return (
    <div className="flex justify-center min-h-screen lg:mt-12 mt-6">
      <div className="">

        <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
          Welcome to Harris Hill Rottweilers
        </h1>
        <p className="font-semibold lg:m-10 m-4 lg:leading-10">
          Nestled in the charming landscape of Charlestown, Rhode Island, our
          kennel is more than just a breeding facility—it's a haven for
          Rottweiler enthusiasts and their beloved companions. Surrounded by the
          natural beauty of Charlestown, our facility is a testament to our
          passion for these magnificent animals. Here, amidst the tranquility of
          Rhode Island's countryside, we raise Rottweilers of exceptional
          quality, known for their loyalty, strength, and gentle disposition.
          </p>
          <p className="font-semibold lg:m-10 m-4 lg:leading-10">
          Whether you're a seasoned Rottweiler enthusiast or a newcomer to the
          breed, we offer an unparalleled experience, where every dog receives
          the love, care, and attention they deserve. Come visit us and discover
          the joy of Rottweiler companionship in the heart of Charlestown.
        </p>
        <div className="m-4 flex justify-center ">
          <iframe
            className="rounded-lg shadow-lg shadow-gray-800 mb-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4753431226777!2d-71.66289602343963!3d41.38548229611259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e5c1fa54b62fb5%3A0xb7cac8bba0289eed!2s4969%20Post%20Rd!5e0!3m2!1sen!2sus!4v1715784066888!5m2!1sen!2sus"
            width="300"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
