"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/icons/logo.svg";
import { usePathname } from "next/navigation";
import { links } from "@/constants/data";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Link from "next/link";

const Navbar = () => {
  const scrollY = useScrollPosition();
  const [navOpen, setNavOpen] = useState(false);

  const path = usePathname();
  const background =
    scrollY >= 300
      ? "#162D3E"
      : path === "/" || path === "/about-us" || path === "/contact-us"
      ? "rgba(0, 0, 0, 0.02)"
      : "#162D3E";

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div
      style={{
        background,
      }}
      className="w-full text-white transition duration-300 !py-5 fixed top-0 left-0 z-50"
    >

      {/* NAV DRAWER */}
      <div
        style={{
          left: navOpen ? "0%" : "-100%",
        }}
        className="w-full h-screen min-h-[600px] bg-white fixed top-0 z-50 transition-all duration-300 md:hidden"
      >
        <div className="w-full flex items-center bg-primary p-4 justify-between">
          <Link href="/" >
            <Image src={logo} alt="Logo" className="!mr" width={100} height={50} />
          </Link>
          <button
            onClick={toggleNav}
            className="transition duration-200 p-2 md:hidden rounded hover:bg-[rgb(225,225,225,0.2)] active:bg-[rgb(225,225,225,0.3)]"
          >
            <X size={24} color="white" />
          </button>
        </div>

        {/* MOBILE NAV MENU */}
        <div className="w-full flex pt-14 mb-10 flex-co justify-center items-center gap-10">
          <div className="flex flex-col md:hidden items-center gap-9">
            <ul className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={toggleNav}
                    className="hover:underline text-center hover:underline-offset-4 hover:decoration-2 text-sm text-section-header"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              title="Call Homeview"
              theme="white"
              icon={<Phone fontVariant={"bold"} size={18} />}
              variant="bold"
              onClick={() => window.location.href = "tel:+971557303207"}
            />
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="hidden md:flex">
            <Image src={logo} alt="Logo" width={150} height={50} />
          </Link>
          <Link href="/" className="flex md:hidden">
            <Image src={logo} alt="Logo" width={100} height={50} />
          </Link>

          <button
            onClick={toggleNav}
            className="transition duration-200 p-2 md:hidden rounded hover:bg-[rgb(255,255,255,0.2)] active:bg-[rgb(255,255,255,0.3)]"
          >
            <Menu color="white" />
          </button>

          <div className="hidden md:flex items-center gap-9">
            <ul className="hidden md:flex items-center gap-3 lg:gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:underline hover:underline-offset-4 hover:decoration-2 text-sm"
                  >
                    <p className="text-center">{link.name}</p>
                  </a>
                </li>
              ))}
            </ul>
            <Button
              title="Call Homeview"
              theme="white"
              icon={<Phone fontVariant={"bold"} size={18} />}
              variant="bold"
              onClick={() => window.location.href = "tel:+971557303207"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
