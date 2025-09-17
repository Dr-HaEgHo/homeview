import { newsItems } from "@/constants/data";
import Image from "next/image";
import React from "react";
import Button from "../shared/Button";

const FeaturedBlog = () => {
  const blog = newsItems[0];

  return (
    <div className="w-full my-10">
      <div className="container">
        <div className="w-full grid grid-cols-2 gap-[74px]">
          
          {/* CONTENT */}
          <div className="w-[90%] flex flex-col items-start justify-start">
            <h2 className="text-section-header text-[40px] font-semibold leading-[40px]">{blog.title}</h2>
            <span className="text-section-header text-sm font-normal mt-4">{blog.date}</span>
            <p className="text-section-header text-base font-normal my-[34px]">{blog.content}</p>
            <Button title="Continue Reading" variant="outline" theme="secondary" className="!text-section-header !text-base !font-semibold"/>
          </div>

          <div className="w-full aspect-[1.7] rounded-lg overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
