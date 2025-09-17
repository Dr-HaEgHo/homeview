import ContactForm from "@/components/contact-us/ContactForm";
import ContactHero from "@/components/contact-us/ContactHero";
import CTA from "@/components/contact-us/CTA";
import Map from "@/components/contact-us/Map";
import WhyUs from "@/components/contact-us/WhyUs";
import SectionHeader from "@/components/shared/SectionHeader";
import { Contact } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      <ContactHero/>
      <div className="mt-[50px] mb-[25px]">
        <SectionHeader title="We're are just a Tap Away !" gap={10} subtitle="Reach out to us for any inquiries or assistance, Your real estate journey starts here!"/>
      </div>
      <WhyUs/>
      <ContactForm/>
      <Map/>
      <CTA/>
    </div>
  );
};

export default Page;
