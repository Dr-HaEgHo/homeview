import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface props {
  title: string;
  date?: string;
  image: StaticImageData;
}

const BlogCard: FC<props> = ({ title, date, image }) => {
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="w-full aspect-[1.45] rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="apartments"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-section-header text-lg font-bold mt-[18px] mb-[8px]">
          {title}
        </h3>
        <p className="text-section-header text-sm font-normal">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
