import { Calendar, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import b0 from "@/assets/images/b0.png";

const Page = () => {
  return (
    <div className="w-full mt-[93px] py-10">
      <div className="container">
        <div className="w-[80%] mx-auto">
          {/* AUTHOR AND DATE */}
          <div className="flex items-center gap-6 mb-3">
            {/* AUTHOR */}
            <div className="flex items-center gap-[10px] text-card-title">
              <User size={16} color="#4A5C6A" />
              <p className="text-xs font-normal">Home-view Real Estate</p>
            </div>

            {/* DATE */}
            <div className="flex items-center gap-[10px] text-card-title">
              <Calendar size={16} color="#4A5C6A" />
              <p className="text-xs font-normal">August 5, 2025 </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full aspect-[1.9] rounded overflow-hidden mb-8">
            <Image src={b0} alt="b0" className="w-full h-full object-cover" />
          </div>

          {/* CONTENT */}
          <div className="w-full">
            <p className="desc !mb-0">
              Home-view Real Estate Property Show 2025 created a strong buzz
              when it was hosted at the Avari Hotel in Karachi on August 30th.
              This high-profile event brought together investors, developers,
              and property enthusiasts under one roof to explore the diverse
              opportunities in Dubai’s thriving real estate market. With growing
              interest from Pakistanis in investing abroad, this show proved to
              be a valuable platform for connecting people with world-class real
              estate projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
