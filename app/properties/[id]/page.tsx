"use client";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import hamza from "@/assets/images/hamza.png";
import { Calendar, House, Info, Phone, Share2 } from "lucide-react";
import Button from "@/components/shared/Button";
import { Whatsapp } from "iconsax-reactjs";
import { GlobalContext } from "@/context/context";
import axios from "axios";

const ContactInfo = () => {
  return (
    <div className="w-full rounded-md border border-accent2 p-2 lg:p-[30]">
      <div className="w-full flex items-start justify-between mb-[30px]">
        {/* USER INFO */}
        <div className="flex items-center gap-[14px]">
          <div className="w-10 lg:w-20 h-10 lg:h-20 rounded-full bg-accent border border-white shadow">
            <Image
              alt="user"
              src={hamza}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col lg:gap-[10px] text-card-title">
            <h4 className="text-base lg:text-xl font-medium">Hamza Raheem</h4>
            <p className="text-sm lg:text-base font-normal">Speak with agent</p>
          </div>
        </div>

        <div className="flex items-center max-lg:p-2 gap-4 text-card-title">
          <Share2 size={18} color="#666666" />
          <p className="test-sm hidden lg:block">Share this listing</p>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex items-center gap-4">
        <Button
          title="Call"
          theme="secondary"
          icon={<Phone size={14} color="#fff" />}
          className="w-full justify-center max-lg:text-sm lg:!py-[15px]"
        />
        <Button
          title="Whatsapp"
          theme="secondary"
          icon={<Whatsapp size={18} color="#fff" />}
          className="w-full justify-center max-lg:text-sm lg:!py-[15px]"
        />
      </div>
      <div className="w-full mt-4">
        <Button
          title="Book a Viewing"
          theme="primary"
          icon={<Calendar size={18} color="#fff" />}
          className="w-full justify-center max-lg:text-sm lg:!py-[15px]"
        />
      </div>
    </div>
  );
};

const Page = () => {
  const { id } = useParams();

  const { setGlobalLoading } = useContext(GlobalContext);
  const [details, setDetails] = useState<any | null>(null);

  const fetchProperties = async () => {
    setGlobalLoading && setGlobalLoading(true);
    try {
      const res = await axios.get(`/api/props/${id}`);
      console.log("the details data :::::::",res.data.data);
      setDetails(res.data.data);
      setGlobalLoading && setGlobalLoading(false);

      if (!res.data || !res.data.length) return;
      // console.log("the data:::::::",res.data[0]);
    } catch (err: any) {
      setGlobalLoading && setGlobalLoading(false);
      console.error("Error fetching data:::::::::::", err.message);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="pt-1 lg:pt-10 pb-[70px] mt-[93px]">
      <div className="container">
        {details === null ? (
          <div className="w-full h-[600px] bg-accent flex flex-col items-center justify-center">
            <Info size={124} color="#78736e"/>
            <p className="text-lg text-accent3 text-center">The Property you have requested has either been removed <br /> or doesnt exist</p>
          </div>
        ) : (
          <div className="w-full flex max-lg:flex-col items-start gap-10">
            {/* /LEFT SIDE */}
            <div className="w-full lg:w-[43%] lg:sticky top-[133px]">
              {/* IMAGES */}
              <div className="w-full">
                <div className="w-full aspect-[1.2] bg-accent rounded-md overflow-hidden">
                  <Image
                    src={details?.images[0]}
                    alt={details?.images[0]}
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-card-title text-sm font-normal mt-5">
                  1 of 7
                </p>
              </div>

              <div className="hidden lg:flex mt-5">
                <ContactInfo />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[54%]">
              <div className="w-full">
                <h3 className="text-section-header text-3xl font-semibold mb-8">
                  AED {details.price.toLocaleString()} PA
                </h3>
                <p className="text-section-header leading-[16px] text-base font-semibold mb-2">
                  Vacant Now | Brand New | Bright and Spacious
                </p>
                <p className="text-section-header capitalize leading-[16px] text-base font-semibold">
                  {details?.title.toString().split("-").join(" ")}
                </p>

                {/* BASICS */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 mt-7">
                  <div className="w-full flex items-center gap-3 py-[10px] border-b border-[#f3f3f3] mb-[2px]">
                    <House size={16} color="#4A5C6A" />
                    <p className="text-section-header text-sm font-normal">
                      BUA:{" "}
                      <span className="pl-3 text-card-title font-semibold">
                        {details.bua} sq.ft
                      </span>
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-3 py-[10px] border-b border-[#f3f3f3] mb-[2px]">
                    <House size={16} color="#4A5C6A" />
                    <p className="text-section-header text-sm font-normal">
                      Plot:{" "}
                      <span className="pl-3 text-card-title font-semibold">
                        {details?.plot} sq.ft
                      </span>
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-3 py-[10px] border-b border-[#f3f3f3] mb-[2px]">
                    <House size={16} color="#4A5C6A" />
                    <p className="text-section-header text-sm font-normal">
                      Bedroom(s):{" "}
                      <span className="pl-3 text-card-title font-semibold">
                        {details?.bedrooms}
                      </span>
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-3 py-[10px] border-b border-[#f3f3f3] mb-[2px]">
                    <House size={16} color="#4A5C6A" />
                    <p className="text-section-header text-sm font-normal">
                      Bath(s):{" "}
                      <span className="pl-3 text-card-title font-semibold">
                        {details?.bathrooms}
                      </span>
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-3 py-[10px] border-b border-[#f3f3f3] mb-[2px]">
                    <House size={16} color="#4A5C6A" />
                    <p className="text-section-header text-sm font-normal">
                      Garage(s):{" "}
                      <span className="pl-3 text-card-title font-semibold">
                        {details?.garages}
                      </span>
                    </p>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full mt-[26px] text-card-title border-b border-[#f3f3f3] mb-7">
                  <h6 className="text-base font-semibold mb-4 leading-[22px]">
                    Description
                  </h6>
                  <p className="desc">
                    {details?.description}
                  </p>
                  <p className="desc">
                    Broker fee - {details?.brokerFee.toString()} <br /> Security deposit - {details?.securityDeposit}
                  </p>
                  <p className="desc"></p>
                  <p className="desc">
                    Please call for more information, to arrange a viewing, or
                    to make an offer.
                  </p>
                  <p className="desc !mb-[30px]">
                    For further details, please drop into our flagship office at
                    the Gold & Diamond Park – or browse the incredible selection
                    of properties we maintain at the haus & haus website. Our
                    agents will be happy to answer any industry-related query
                    you may have.
                  </p>
                </div>

                {/* FEATURES */}
                <div className="w-full text-card-title">
                  <h6 className="text-base font-semibold mb-4 leading-[22px]">
                    Features
                  </h6>
                  <ul className="w-full grid grid-cols-1 lg:grid-cols-2">
                    {details?.features.map((feature: string, idx: number) => (
                      <li key={idx} className="list-disc marker:text-[8px]">
                        <p className="desc !mb-0">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full bg-white flex lg:hidden sticky bottom-0 left-0 mt-5">
                <ContactInfo />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
