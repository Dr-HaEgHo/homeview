import React from "react";
import Slider from "../home/Slider";

const ContactHero = () => {
  return (
    <div className="w-full aspect-[2.9] bg-primary flex items-stretch relative overflow-hidden">
      <div className="w-full h-full z-0 flex items-center justify-center">
        <Slider />
      </div>
      <div className="w-full aspect-[2.9] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-4 md:px-0">
        <div className="container h-full flex flex-col justify-center items-center gap-4">
          <h2 className="text-base text-center font-bold ls25 text-white">
            CONTACT HOMEVIEW REAL ESTATE
          </h2>
          <p className="text-2xl text-white text-center font-semibold">
            Need expert advice? Our team of property consultants, marketing specialists, and customer service experts is here to help and guide you to the right support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
