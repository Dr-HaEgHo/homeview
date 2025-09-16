'use client'
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Phone } from "lucide-react";
import logo from "@/assets/icons/logo.svg";
import { usePathname } from "next/navigation";
import { links } from "@/constants/data";

const Navbar = () => {

  const path = usePathname();
  const background = path === "/" || path === "about-us" || path === "contact-us"? "rgba(0, 0, 0, 0.02)" : "#162D3E";
  // const background = path === "/" || path === "about-us" || path === "contact-us" ? "#162D3E" : "#162D3E";


  return (
    <div style={{
      background
    }} className="w-full text-white !py-5 absolute top-0 left-0 z-50">
      <div className="container ">
        <div className="w-full flex items-center justify-between">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={50}
          />

          <div className="hidden md:flex items-center gap-9">
            <ul className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline hover:underline-offset-4 hover:decoration-2 text-sm">    
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
             <Button title="+971 4 529 2121" theme="white" icon={<Phone fontVariant={"bold"} size={18} />} variant="bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar