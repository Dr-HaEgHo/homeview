"use client";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import hamza from "@/assets/images/hamza.png";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Info,
  Phone,
  Share2,
} from "lucide-react";
import Button from "@/components/shared/Button";
import { Whatsapp } from "iconsax-reactjs";
import { GlobalContext } from "@/context/context";
import axios from "axios";
// import { details } from "@/constants/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import floorPlan from "@/assets/icons/floor-plan.svg";
import check from "@/assets/icons/checkmark.svg";
import ImageSlider from "@/components/properties/ImageSlider";
import Modal from "@/components/shared/Modal";
// import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import empty from "@/assets/icons/empty.svg"
import shahriyar from "@/assets/images/shahriyar.png";

const ContactInfo = () => {
  return (
    <div className="w-full rounded-md border border-accent2 p-2 lg:p-[30]">
      <div className="w-full flex items-start justify-between mb-[30px]">
        {/* USER INFO */}
        <div className="flex items-center gap-[14px]">
          <div className="w-10 lg:w-20 h-10 lg:h-20 rounded-full overflow-hidden bg-accent border border-white shadow">
            <Image
              alt="user"
              src={shahriyar}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col lg:gap-[10px] text-card-title">
            <h4 className="text-base lg:text-xl font-medium">Shahriyar Ahmed</h4>
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
          onClick={() => window.location.href = "tel:+971557303207"}
        />
        <Button
          title="Whatsapp"
          theme="secondary"
          icon={<Whatsapp size={18} color="#fff" />}
          className="w-full justify-center max-lg:text-sm lg:!py-[15px]"
          onClick={() => window.open("https://wa.me/+971557303207", "_blank")}
        />
      </div>
      <div className="w-full mt-4">
        <Button
          title="Book a Viewing"
          theme="primary"
          icon={<Calendar size={18} color="#fff" />}
          className="w-full justify-center max-lg:text-sm lg:!py-[15px]"
          onClick={() => window.open("https://wa.me/+971557303207", "_blank")}
        />
      </div>
    </div>
  );
};

const Page = () => {
  const { id } = useParams();
  const swiperRef = useRef<any>(null);

  const { setGlobalLoading } = useContext(GlobalContext);
  const [details, setDetails] = useState<any | null>(null);
  const [plansIdx, setPlansIdx] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [imageIdx, setImageIdx] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchProperties = async () => {
    setGlobalLoading && setGlobalLoading(true);
    try {
      const res = await axios.get(`/api/props/${id}`);
      console.log("the details data :::::::", res.data.data);
      setDetails(res.data.data);
      setGlobalLoading && setGlobalLoading(false);

      // if (!res.data || !res.data.length) return;
      // console.log("the data:::::::",res.data[0]);
    } catch (err: any) {
      setGlobalLoading && setGlobalLoading(false);
      setError(err.response.data.message);
      console.log("Error fetching data:::::::::::", err.response.data.message);
    }
  };

  // Custom next function
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Custom prev function
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="pt-1 lg:pt-10 pb-[70px] mt-[93px]">
      <Modal isOpen={open} setIsOpen={setOpen}>
        {imageIdx !== null && details !== null && (
          <div className="w-full h-full flex items-center gap-4 justify-between p-5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center hoverActiveBlack">
              <ChevronLeft
                style={{
                  display: imageIdx === 0 ? "none" : "flex",
                }}
                onClick={handlePrev}
                size={60}
                color="#fff"
              />
            </div>
            <div className="w-[80%] h-full rounded-lg overflow-hidden">
              <Image
                src={details.images[imageIdx !== null ? imageIdx : 0]}
                alt="property"
                className="w-full h-auto"
                width={1024}
                height={1024}
              />
            </div>
            <div className="w-14 h-14 rounded-full flex items-center justify-center hoverActiveBlack">
              <ChevronRight
                onClick={handleNext}
                style={{
                  display:
                    imageIdx === details.images.length - 1 ? "none" : "flex",
                }}
                size={60}
                color="#fff"
              />
            </div>
          </div>
        )}
      </Modal>
      <div className="container">
        {error !== null ? (
          <div className="w-full h-[600px] bg-accent flex flex-col items-center justify-center">
            <Image src={empty} alt="empty state" className="w-[100px] md:w-[200px]" />
            <p className="text-lg text-accent3 font-semibold text-center">
              Oops Something went wrong!
            </p>
            {error !== null && (
              <p className="text-base text-accent3 text-center">{error}</p>
            )}
          </div>
        ) : details === null ? null : (
          <div className="w-full flex max-lg:flex-col items-start gap-10">
            {/* /LEFT SIDE */}
            <div className="w-full lg:w-[43%] lg:sticky top-[133px]">
              {/* IMAGES */}
              <div className="w-full">
                <div className="w-full max-h-[500px] max-lg:mt-6 aspect-[1.2] bg-accent rounded-md overflow-hidden">
                  <ImageSlider
                    setImage={setImageIdx}
                    images={details.images}
                    setIsOpen={setOpen}
                    prev={handleNext}
                    next={handleNext}
                    refObj={swiperRef}
                  />
                </div>
                <p className="text-card-title text-sm font-normal mt-5">
                  {imageIdx + 1} of {details.images.length}
                </p>
              </div>

              <div className="hidden lg:flex mt-5">
                <ContactInfo />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-[54%]">
              <div className="w-full">
                {/* HEADER */}
                <div className="w-full border-b border-[#f3f3f3] pb-2 mb-3 md:pb-4 md:mb-6">
                  <h3 className="text-section-header text-3xl font-semibold mb-7">
                    {details.project}
                  </h3>
                  <p className="text-section-header leading-[16px] text-xl font-semibold mb-4">
                    Launch Price {details.launch_price}
                  </p>
                  <p className="text-section-header capitalize leading-[16px] text-xs font-normal">
                    Prices, availability, and purchase conditions may change
                    frequently. Contact a representative for the latest
                    availability and pricing.
                  </p>
                </div>

                {/* KEY INFORMATION */}
                <div className="w-full border-b border-[#f3f3f3] pb-2 mb-3 md:pb-4 md:mb-6">
                  {/* TITLE */}
                  <h6 className="text-section-header text-lg font-medium mb-5">
                    Key Information
                  </h6>
                  <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-8">
                    {Object.entries(details.key_information).map(
                      ([key, value], idx: number) => (
                        <div
                          key={idx}
                          className="w-full flex flex-col items-start gap-3 py-[10px]"
                        >
                          <p className="text-section-header text-xs font-normal capitalize">
                            {key.split("_").join(" ")}
                          </p>
                          {value && (
                            <p className="text-section-header text-sm font-medium capitalize">
                              {value as unknown as string}
                            </p>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Payment Plans */}
                {details.payment_plans !== null &&
                details.payment_plans.length ? (
                  <div className="w-full border-b border-[#f3f3f3] pb-7 mb-6">
                    {/* TITLE */}
                    <h6 className="text-section-header text-xl font-medium mb-5">
                      Payment Plans
                    </h6>

                    {/* TABS */}
                    {details.payment_plans.length > 1 && (
                      <div className="w-full flex items-center mb-5">
                        {details.payment_plans.map((item: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setPlansIdx(idx)}
                            style={{
                              borderColor:
                                plansIdx === idx ? "#e98120" : "#f1f1f1",
                            }}
                            className="p-3 border-b-2 border-secondary hoverActiveGrey"
                          >
                            {item.option}
                          </button>
                        ))}
                        {/* <button style={{borderColor: "#f1f1f1"}} className="p-3 border-b-2 border-secondary hoverActiveGrey">Option 2</button> */}
                      </div>
                    )}

                    <div className="w-full flex items-stretch flex-col md:flex-row">
                      {details.payment_plans[plansIdx].plan.map(
                        (item: any, idx: number) => (
                          <div
                            key={idx}
                            className="w-full flex items-center flex-col md:flex-row"
                          >
                            <div className="w-full h-full border text-center border-accent4 rounded-lg flex flex-col items-center px-[10px] py-[10px]">
                              <p className="text-card-title text-lg font-semibold capitalize">
                                {item.percentage}
                              </p>
                              <p className="text-card-title text-sm font-semibold mt-[14px] mb-[10px] capitalize">
                                {item.stage}
                              </p>
                              {item.note && (
                                <p className="text-card-title  text-sm font-normal capitalize">
                                  {item.note}
                                </p>
                              )}
                            </div>
                            {idx !==
                              details.payment_plans[plansIdx].plan.length -
                                1 && (
                              <ChevronRight className="hidden md:block mx-4" />
                            )}
                            {idx !==
                              details.payment_plans[plansIdx].plan.length -
                                1 && (
                              <ChevronDown className="block md:hidden mx-4" />
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ) : null}

                {/* PROJECT TIMELINE */}
                {details.project_timeline !== null && (
                  <div className="w-full mt-[26px] text-card-title border-b border-[#f3f3f3] pb-7">
                    <h6 className="text-xl font-semibold mb-4 leading-[22px]">
                      Project Timeline
                    </h6>
                    <div className="w-full bg-accent rounded-[10px] py-5 px-[14px]">
                      <VerticalTimeline
                        lineColor="#e98120"
                        layout="1-column-left"
                      >
                        {Object.entries(details.project_timeline).map(
                          ([keys, value], idx: number) => (
                            <VerticalTimelineElement
                              key={idx}
                              className="vertical-timeline-element--work"
                              contentStyle={{
                                background: "transparent",
                                color: "#4A5C6A",
                                marginTop: 0,
                                shadow: "none",
                              }}
                              contentArrowStyle={{
                                borderRight: "7px solid  transparent",
                              }}
                              date={value}
                              iconStyle={{
                                background: "white",
                                borderColor: "#e98a10",
                                borderWidth: 2,
                                color: "#000",
                                width: 16,
                                height: 16,
                              }}
                            >
                              <h3 className="text-card-title text-base font-semibold">
                                {keys.split("_").join("")}
                              </h3>
                            </VerticalTimelineElement>
                          )
                        )}
                      </VerticalTimeline>
                    </div>
                  </div>
                )}

                {/* UNITS */}
                {details.units !== null && (
                  <div className="w-full mt-[26px] text-card-title border-b border-[#f3f3f3] mb-7">
                    <h6 className="text-xl font-semibold mb-4 leading-[22px]">
                      Units
                    </h6>
                    <p className="text-base font-semibold mb-4">
                      from Developer
                    </p>

                    <div className="w-full flex flex-col">
                      {Object.entries(details.units).map(
                        ([key, value]: [string, any[]], idx: number) => (
                          <div
                            key={idx}
                            style={{
                              display: value.length ? "flex" : "none",
                            }}
                            className="w-full flex flex-col mb-4 uppercase"
                          >
                            <h6 className="text-sm font-semibold">{key}</h6>
                            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2 mb-4">
                              {value.map((item: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="w-full flex items-center"
                                >
                                  <div className="w-full h-full border text-center border-accent4 rounded-lg flex flex-col items-center px-[10px] py-[10px]">
                                    <p className="text-card-title text-lg font-semibold capitalize">
                                      {item.bedrooms} Bed
                                    </p>
                                    <p className="text-card-title text-sm font-semibold my-2 capitalize">
                                      From {item.price_from}
                                    </p>
                                    <div className="w-full flex items-center gap-3 pt-1">
                                      <Image
                                        src={floorPlan}
                                        alt={"floor plan"}
                                        width={20}
                                        height={20}
                                        className=""
                                      />
                                      <p className="text-card-title  text-sm font-normal capitalize">
                                        {item.size_range}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* DESCRIPTION */}
                {details.about_project !== null && (
                  <div className="w-full mt-[26px] text-card-title border-b border-[#f3f3f3] pb-7 mb-7">
                    <h6 className="text-xl font-semibold mb-4 leading-[22px]">
                      About the project
                    </h6>
                    {/* <p className="desc !mb-[30px]">{details.about_project}</p> */}
                    <article className="prose prose-lg prose-invert max-w-none">
                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {details.about_project}
                      </ReactMarkdown>
                    </article>
                  </div>
                )}

                {/* LOCATION & NEARBY ATTRACTIONS */}
                {details.location_nearby_attractions !== null && (
                  <div className="w-full text-card-title border-[#f3f3f3] pb-7 mb-6">
                    <h6 className="text-base font-semibold mb-4 leading-[22px]">
                      Location & Nearby Attractions
                    </h6>
                    <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-2">
                      {details.location_nearby_attractions.map(
                        (item: string, idx: number) => (
                          <li key={idx} className="list-disc marker:text-[8px]">
                            <p className="desc !mb-0">{item}</p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* AMENITIES FEATURES */}
                {details.features !== null && (
                  <div className="w-full text-card-title border-b border-[#f3f3f3] max-md:px-4 pb-7 mb-6">
                    <h6 className="text-base font-semibold mb-4 leading-[22px]">
                      Amenities
                    </h6>
                    <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-2">
                      {details.features.map((item: string, idx: number) => (
                        <li key={idx} className="list-disc marker:text-[8px]">
                          <p className="desc !mb-0">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* AMENITIES FEATURES */}
                {details.amenities !== null && (
                  <div className="w-full text-card-title border-b border-[#f3f3f3] pb-7 mb-6">
                    <h6 className="text-xl font-semibold mb-4 leading-[22px]">
                      Other Amenities
                    </h6>
                    <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-2">
                      {details.amenities.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Image
                            src={check}
                            alt={"checkmark"}
                            width={20}
                            height={20}
                            className=""
                          />
                          <p className="desc !mb-0">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
