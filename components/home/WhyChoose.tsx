import Image from "next/image";
import React from "react";
import garden from "@/assets/images/garden.png";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";

const WhyChoose = () => {
  return (
    <div className="w-full aspect-[2.45] min-h-[500px] mt-[30px] relative">
      <div className="w-full h-full bg-primary absolute z-0">
        <Image src={garden} alt="why choose us" className="w-full h-full object-cover" />
      </div>

      <div className="container h-full py-4 top-0 flex flex-col gap-8 items-center justify-center z-10 relative">
        {/* <div className=" h-full "> */}
          <SectionHeader
            theme="dark"
            title="Why Choose Home View Real Estate"
            subtitle="Home-view Real Estate is your trusted partner in the UAE to buy high-quality property. We provide you with a smooth, clean and customer-first experience. We bring top-tier developers and best projects in well-known locations"
          />
          <Button title="EXPLORE HOME LISTINGS" theme="secondary" className="text-sm !py-5 !px-14 !rounded-[6px]"/>
        {/* </div> */}
      </div>
    </div>
  );
};

export default WhyChoose;
