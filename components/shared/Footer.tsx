import React from "react";
import logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import Subscribe from "./Subscribe";
import { Mail, MapPin, Phone } from "lucide-react";
import { links, socialLinks } from "@/constants/data";
// import 

const Footer = () => {
  return (
    <div className="w-full bg-primary !py-10">
      <div className="container">
        {/* LOGO */}
        <div className="w-[100px] sm:w-[120px] md:w-[150px] h-[50px]">
          <Image src={logo} alt="Logo" className="w-full" width={150} height={50} />
        </div>

        {/* LINKS */}
        <div className="!mt-4 flex flex-col md:flex-row md:gap-0 justify-between">
          <div className="w-full md:w-[32%]">
            <p className="text-white text-base font-medium">
              You can receive news and information directly to your inbox{" "}
            </p>
            <Subscribe />
            <p className="mt-9 text-white text-sm font-medium">
              First Call Real Estate specializes in off-plan properties and sales in the UAE. Our expert team is dedicated to providing personalized service and guiding you through every step of your investment journey. Discover exceptional properties and unlock your real estate potential with us!
            </p>
          </div>

          <div className="w-full md:w-[52%] max-md:mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
            <div className="w-full flex flex-col gap-5">
              <h3 className="text-white font-semibold text-base mb-[6px]">
                Quick Links
              </h3>

              {links?.map((link, idx: number) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-white text-sm hover:underline hover:underline-offset-4 hover:decoration-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="w-full flex flex-col gap-5">
              <h3 className="text-white font-semibold text-base mb-[6px]">
                Contact Us
              </h3>
              <div className="flex gap-4">
                <MapPin size={16} color="#fff" />
                <p className="text-white text-sm ">
                  Office 117, <br /> Al Attar business center, <br /> Al Barsha
                  1, Sheikh Zayed road, Dubai, <br /> United Arab Emirates
                </p>
              </div>
              <div className="flex gap-4">
                <Phone size={16} color="#fff" />
                <p className="text-white text-sm">+971 4 529 2121</p>
              </div>

              <div className="flex gap-4">
                <Mail size={16} color="#fff" />
                <p className="text-white text-sm">hello@homeviewdubai.com</p>
              </div>
            </div>{" "}
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="!mt-10 flex max-sm:flex-col items-center justify-between">
          <div className="w-full ">
            <p className="text-[#d2d2d2] text-sm">
              Copyright 2025, SmartHomes All Rights Reserved
            </p>
          </div>
          <div className="flex items-center">
            <p className="hidden md:flex text-white text-base whitespace-nowrap mr-5">
              Social Links:
            </p>
            <div className="flex items-center gap-[14px]">

              {
                socialLinks.map((link, idx: number) => (
                  <a key={idx} href="#" className="h-[30px] cursor-pointer hoverActiveScale2 w-[30px] border border-white rounded-full flex items-center justify-center">
                    <Image
                    src={link.image}
                      alt={link.name}
                    />
                  </a>
                ))
              }
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
