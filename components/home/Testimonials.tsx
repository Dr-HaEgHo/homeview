import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { testimonials } from "@/constants/data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="w-full py-[70px] bg-accent">
      <div className="container">
        <div className="w-full ">
          <SectionHeader
            title="Our Testimonials"
            subtitle="Hear from our satisfied clients and their success stories with First Call Real Estate."
            gap={10}
          />
          <div className="w-full grid grid-cols-4 mt-10 mb14 gap-6">
            {testimonials.map((item, idx: number) => (
              <div
                key={idx}
                className="bg-white w-full aspect-[1.43] rounded-lg flex flex-col items-center justify-center py-[42px] px-[26px]"
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    width={1024}
                    height={1024}
                  />
                </div>
                <p className="text-section-header text-sm font-normal text-center">
                  {item.text}
                </p>
                <p className="text-section-header text-sm font-semibold text-center mt-4 mb-2">
                  {item.name}
                </p>
                <p className="text-section-header text-sm font-medium text-center">
                  {item.location}
                </p>
            
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
