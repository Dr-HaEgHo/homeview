import React from "react";
import Button from "../shared/Button";

const BePart = () => {
  return (
    <div className="w-full my-10">
      <div className="container">
        <div className="w-full grid grid-cols-2 items-center gap-[74px]">
          {/* CONTENT */}
          <div className="w-[90%] flex flex-col items-start justify-start">
            <h2 className="text-section-header text-[40px] font-semibold leading-[40px]">
              Be part of something bigger than yourself
            </h2>
            <span className="text-section-header text-sm font-normal mt-4">
              True success isn’t just about doing well in business, it also
              involves making a positive impact in our local communities. We
              believe in giving back to a city that has granted us incredible
              opportunities. Whether it’s a charity or sponsorship, we’re
              committed to making a difference and saying thank you in any way
              we can.
            </span>
            <p className="text-section-header text-base font-normal my-[34px]">
              The Home-view team is also an important community – so we make
              sure to support each member with activities focused on health and
              well-being, from motivational sessions with industry leading
              mentors to weekly physical training and special events that
              inspire teamwork.
            </p>
            {/* <Button
              title="Continue Reading"
              variant="outline"
              theme="secondary"
              className="!text-section-header !text-base !font-semibold"
            /> */}
          </div>

          {/* IMAGE */}
          <div className="w-full aspect-[1.6] rounded-lg bg-accent2 overflow-hidden">
            {/* <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BePart;
