"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { FC, useRef } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface props {
  images: string[];
  setIsOpen: Function;
  image?: number;
  setImage: Function;
  next: Function;
  prev: Function;
  refObj: React.RefObject<any>;
}

const ImageSlider: FC<props> = ({
  images,
  setIsOpen,
  setImage,
  prev,
  next,
  refObj,
}) => {
  return (
    <div className="w-full h-full bg-yellow-500">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => (refObj.current = swiper)}
        onSlideChange={(swiper) => {
          console.log("Current index:", swiper);
          setImage(swiper.activeIndex);
        }}
        // autoplay={{ delay: 3000 }}
        modules={[ Pagination, Navigation, EffectFade]}
        pagination
        navigation
        effect="fade"
        loop={false}
        shortSwipes
        style={{
          height: "100%",
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          color: "white",
          backgroundColor: "transparent",
          gap: 20,
        }}
      >
        {images.map((item, idx: number) => (
          <SwiperSlide key={idx}>
            <div
              onClick={() => {
                setIsOpen(true);
                setImage(idx);
              }}
              className="cursor-pointer w-full h-full relative z-0"
            >
              <Image
                src={item}
                alt={"slide image"}
                className="h-full aspect-[1.9] w-full object-cover"
                width={1024}
                height={1024}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
