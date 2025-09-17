"use client";
import { Section } from "lucide-react";
import React from "react";
import SectionHeader from "../shared/SectionHeader";
import Input, { MessageBox } from "../home/Input";
import Button from "../shared/Button";
import Dropdown, { LabelledDropdown } from "../properties/Dropdown";
import { Message } from "iconsax-reactjs";

const ContactForm = () => {
  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <div className="w-full py-[60px]">
      <div className="container">
        <div className="w-full ">
          {/* FORM DIV */}
          <div className="w-[65%] mx-auto py-[70px] px-[50px] border rounded-lg border-[#888] bg-white">
            <SectionHeader
              title="Contact Us"
              gap={10}
              subtitle="Discover the best properties in each location, tailored to your lifestyle and preferences."
            />
            <form action="" className="mt-10 flex flex-col gap-6">
              {/* NAME AND EMAIL */}
              <div className="w-full flex gap-6">
                <Input
                  label="First Name"
                  value={firstName}
                  className="w-full text-sm"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFirstName(e.target.value);
                  }}
                />
                <Input
                  label="Last Name"
                  value={firstName}
                  className="w-full text-sm"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="w-full flex gap-6">
                <Input
                  label="Email Address"
                  value={firstName}
                  className="w-full text-sm"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFirstName(e.target.value);
                  }}
                />
                <Input
                  label="Phone Number"
                  value={firstName}
                  className="w-full text-sm"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              
                <LabelledDropdown label="Property Type"  options={[1, 2, 3, 4, 5]}/>
              <div className="w-full flex gap-6">
                <LabelledDropdown label="Budget Range"  options={[1, 2, 3, 4, 5]}/>
                <LabelledDropdown label="Purchase Timeline"  options={[1, 2, 3, 4, 5]}/>
              </div>

              <MessageBox
                  label="Message"
                  value={message}
                  className="w-full text-sm"
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Type your message here..."
                  name="message"
                  required
                />

              <Button
                title="Send us a message"
                theme="secondary"
                className="text-sm !py-5 !px-14 !rounded-[6px] !text-center !justify-center"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
