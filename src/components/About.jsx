import React from "react";

export default function About() {
  return (
    <div className="m-8 flex justify-center">
      <div className="lg:w-1/2 ">
        <h2 className="text-3xl text-gray-800 font-semibold mb-8 text-center">
          Meet the Breeder
        </h2>
        <p className="font-semibold text-gray-600 mb-6">
          {" "}
          Hello! My name is Hunter. I&apos;ve been in love with this breed since
          I was a child. I purchased my first rottie when I was 12 and never
          looked back. I started breeding in 2010 and through the years put all
          my efforts into running a kennel that produce well rounded socialized
          family dogs. My goal is to help change the narrative of the "big mean
          rottie." That has never been the case with any of our dogs.
        </p>
        <p className="font-semibold text-gray-600 mb-6">
          What pushed me into breeding was the inability to locate a good
          quality rottweiler in my area. With the love I had for the breed, I
          decided to read, research, and learn all I could to put myself among
          the top breeders in the world. Our mission is to produce top quality
          dogs with top bloodlines and great socialization.
        </p>
        <p className="font-semibold text-gray-600 mb-6">
          What sets us apart from other breeders is the care and time we put into our pups. We whelp the pups
          in our home; they never see a garage or basement. They live in our
          living quarters from birth until they find their forever home. We also take the time
          at 3 weeks to start their potty training/kennel training. If we can
          build a solid base in our puppies early development, it is easier
          for the forever families to build a sturdy home atop that foundation.
        </p>
      </div>
    </div>
  );
}
