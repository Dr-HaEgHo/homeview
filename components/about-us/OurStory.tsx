import Image from "next/image";
import React from "react";
import Button from "../shared/Button";

const OurStory = () => {
  return (
    <div className="w-full my-10">
      <div className="container">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-[74px]">
          
          {/* IMAGE DESKTOP*/}
          <div className="hidden md:block w-full aspect-[1.6] rounded md:rounded-lg bg-accent2 overflow-hidden">
            {/* <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            /> */}
          </div>


          {/* CONTENT */}
          <div className="w-full md:w-[90%] flex flex-col items-start justify-start">
            <h2 className="text-section-header text-[30px] md:text-[40px] font-semibold leading-[40px]">
              Our Story
            </h2>

            {/* IMAGE MOBILE*/}
          <div className="block md:hidden w-full aspect-[1.6] rounded mt-2 md:rounded-lg bg-accent2 overflow-hidden">
            {/* <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            /> */}
          </div>
            <span className="text-section-header text-sm font-normal mt-4">
              Home View Dubai Real Estate specializes in off-plan properties and
              sales in the UAE. Our expert team is dedicated to providing
              personalized service and guiding you through every step of your
              investment journey.
            </span>
            <p className="text-section-header text-base font-normal my-[34px]">
              Discover exceptional properties and unlock your real estate
              potential with us!
            </p>
            {/* <Button
              title="Continue Reading"
              variant="outline"
              theme="secondary"
              className="!text-section-header !text-base !font-semibold"
            /> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurStory;
