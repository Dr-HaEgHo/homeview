import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { partners } from "@/constants/data";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="mt-[30px] flex flex-col items-center justify-center">
          <SectionHeader gap={0} title="Partners with Leading Real Estate Developers in UAE" />
        </div>
        <div className="w-full flex flex-nowrap items-center justify-between gap-4 my-10 md:my-[70px] scrollX">
          {partners.map((item, idx: number) => (
            <div
              key={idx}
              className="min-w-[70px] min-h-[70px] md:w-[100px] md:h-[100px]"
            >
              <Image
                src={item.image}
                alt="partner logo"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
