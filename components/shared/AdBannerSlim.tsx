import React from "react";
import Button from "./Button";

const AdBannerSlim = () => {
  return (
    <div className="w-full">
      <div className="container bg-primary md:rounded-lg !px-[34px] py-5">
        <div className="w-full flex flex-col md:flex-row items-center justify-between ">
          <div className="w-full flex flex-col items-center md:items-start max-md:text-center gap-[10px]">
            <h4 className="text-white text-xl font-semibold">
              Don’t miss a beat of Dubai’s Property Sector
            </h4>
            <p className="text-white text-sm font-normal">
              Sign up to our newsletter and receive monthly round-ups including market updates, news articles, and expert insights.
            </p>
          </div>

          <Button
            title="Subscribe now"
            theme="secondary"
            className="text-base !py-[10px] !px-9 !rounded-[6px] max-md:mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default AdBannerSlim;
