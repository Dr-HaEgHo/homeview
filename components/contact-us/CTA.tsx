'use client'
import React from "react";
import Button from "../shared/Button";
import { Whatsapp } from "iconsax-reactjs";

const CTA = () => {
  return (
    <div className="w-full py-20">
      <div className="container">
        <div className="w-full text-center flex flex-col items-center" >
          <h6 className="text-section-header text-2xl md:text-3xl font-semibold mb-5">
            Home view Real Estate - Your Trusted Dubai Realtor
          </h6>
          <p className="text-section-header text-sm font-normal mb-7">
            Send us a message on Whatsapp to discuss, make enquiries and tailor
            our services to your needs
          </p>
          <Button
            title="Send us a message"
            theme="secondary"
            className="text-sm !py-5 !px-14 !rounded-[6px]"
            onClick={() => window.open("https://wa.me/+971557303207", "_blank")}
            icon={<Whatsapp size="16" color="white"/>}
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
