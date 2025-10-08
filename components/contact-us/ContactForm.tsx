"use client";
import { Section } from "lucide-react";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import SectionHeader from "../shared/SectionHeader";
import Input, { MessageBox } from "../home/Input";
import Button from "../shared/Button";
import Dropdown, { LabelledDropdown } from "../properties/Dropdown";
import { Message, Whatsapp } from "iconsax-reactjs";
import { priceOptions, propertyTypeOptions, timeline } from "@/constants/data";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    type: "",
    range: "",
    timeline: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);

  let timeoutId: ReturnType<typeof setTimeout>;

  const mySetTimeout = () => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setStatus(null); // Hide the toast
      setShow(false);
    }, 3000);
  };

  useEffect(() => {
    if (status) {
      setShow(true); // Show the toast
      mySetTimeout(); // Set the timeout to hide it after duration
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [status]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) { 
        setLoading(false)
        setStatus("Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          type: "",
          range: "",
          timeline: "",
        })
      } else {
        setStatus("Error sending email");
        setLoading(false)
      }
    } catch (error) {
      setStatus("Error sending email");
      setLoading(false)
    }
  };

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   console.log("This is the form data::::::::", formData);
  // };

  useEffect(() => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.message === "" ||
      formData.type === "" ||
      formData.range === "" ||
      formData.timeline === "" ||
      loading === true
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    console.log("This is the form data::::::::", formData);
  }, [formData, loading]);
  
  // console.log(
  //   "This is the disabled data::::::::",
  //   isDisabled ? "true" : "false"
  // );
  return (
    <div className="w-full py-10 md:py-[60px]">
       {show && (
        <div className="w-[70%] lg:w-[400px] p-3 bg-accent rounded-full fixed top-36 right-10 !z-[999999999999999] shadow-lg">
          <p className="text-black font-normal text-base">{status && status}</p>
        </div>
      )}
      <div className="container">
        <div className="w-full ">
          {/* FORM DIV */}
          <div className="w-full md:w-[65%] mx-auto py-10 md:py-[70px] px-4 md:px-[50px] border rounded-lg border-[#888] bg-white">
            <SectionHeader
              title="Contact Us"
              gap={10}
              subtitle="Discover the best properties in each location, tailored to your lifestyle and preferences."
            />
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
              {/* NAME AND EMAIL */}
              <div className="w-full flex max-md:flex-col gap-6">
                <Input
                  label="First Name"
                  value={formData.firstName}
                  className="w-full text-sm"
                  onChange={handleChange}
                  name="firstName"
                />
                <Input
                  label="Last Name"
                  value={formData.lastName}
                  className="w-full text-sm"
                  onChange={handleChange}
                  name="lastName"
                />
              </div>
              <div className="w-full flex max-md:flex-col gap-6">
                <Input
                  label="Email Address"
                  value={formData.email}
                  className="w-full text-sm"
                  onChange={handleChange}
                  name="email"
                />
                <Input
                  label="Phone Number"
                  value={formData.phone}
                  className="w-full text-sm"
                  onChange={handleChange}
                  name="phone"
                />
              </div>

              <LabelledDropdown
                onSelect={(val) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    type: val.toString(),
                  }))
                }
                label="Property Type"
                options={propertyTypeOptions}
              />
              <div className="w-full flex gap-6">
                <LabelledDropdown
                  onSelect={(val) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      range: val.toString(),
                    }))
                  }
                  label="Budget Range"
                  options={priceOptions}
                />
                <LabelledDropdown
                  onSelect={(val) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      timeline: val.toString(),
                    }))
                  }
                  label="Purchase Timeline"
                  options={timeline}
                />
              </div>

              <MessageBox
                label="Message"
                value={formData.message}
                className="w-full text-sm !p-0"
                onChange={handleChangeMessage}
                placeholder="Type your message here..."
                name="message"
                required
              />

              <Button
                title={loading ? "Sending..." : "Submit"}
                theme="secondary"
                disabled={isDisabled}
                className="text-sm !py-5 !px-14 !rounded-[6px] !text-center !justify-center disabled:bg-accent2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
