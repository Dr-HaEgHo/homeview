import React from "react";
import SectionHeader from "../shared/SectionHeader";
import Image from "next/image";
import { HeartHandshake, Medal, UserStar } from "lucide-react";

const WhyChooseUs = () => {
  const whychoose2 = [
    {
      title: "Award Winning",
      description: "Recognized for excellence in real estate services",
      filter: "apartment",
      image: <Medal size={54} color="#E98A10"/>,
    },
    {
      title: "Expert Guidance",
      description: "Professional advice from industry experts",
      filter: "villa",
      image: <UserStar size={54} color="#E98A10"/>,
    },
    {
      title: "Trusted Partners",
      description: "Strong relationships with top developers",
      filter: "townhouse",
      image: <HeartHandshake size={54} color="#E98A10"/>,
    },
  ];

  return (
    <div className="w-full bg-accent pt-[30px] pb-20">
      <div className="container">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Your trusted partner in finding the perfect property, with unmatched expertise and personalized service."
          gap={10}
        />
        <div className="w-full grid grid-cols-3 mt-10 mb14 gap-6">
          {whychoose2.map((why, idx: number) => (
            <div
              key={idx}
              className="bg-white w-full aspect-[1.8] rounded-lg flex flex-col items-center justify-center py-[42px] px-[26px]"
            >
              {/* Icon */}
              <div className="w-14">
                {why.image}
              </div>
              <h4 className="text-section-header text-lg font-medium text-center mt-[20px] mb-4">
                {why.title}
              </h4>
              <p className="text-section-header text-sm font-normal text-center">
                {why.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
