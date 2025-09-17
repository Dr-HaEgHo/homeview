import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { partners } from "@/constants/data";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="mt-[30px] flex flex-col items-center justify-center">
          <SectionHeader title="Partners with Leading Real Estate Developers in UAE" />
          <div className="w-full flex items-center justify-between my-[70px]">
            {partners.map((item, idx: number) => (
              <div key={idx} className="w-[100px] h-[100px]">
                <Image src={item.image} alt="partner logo"  className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
