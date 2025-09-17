import { metrics, whychoose } from "@/constants/data";
import Image from "next/image";
import React from "react";
import SectionHeader from "../shared/SectionHeader";

const WhyUs = () => {
  return (
    <div className="w-full bg-accent py-10">
      <div className="container">
        <div className='w-full grid grid-cols-4 mt-10 mb14 gap-6' >
          {
            whychoose.map((why, idx: number) => (
              <div key={idx} className='bg-white w-full aspect-[1.15] rounded-lg flex flex-col items-center justify-center py-[42px] px-[26px]'>
                 {/* Icon */}
                 <div className='w-14'>
                  <Image src={why.image} alt={why.title} className='w-full h-full object-cover'/>
                 </div>
                 <h4 className='text-section-header text-lg font-medium text-center mt-[30px] mb-4'>{why.title}</h4>
                 <p className='text-section-header text-sm font-normal text-center'>{why.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
