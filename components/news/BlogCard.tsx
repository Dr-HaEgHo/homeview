import { formatDate } from "@/constants/functions";
import Image, { StaticImageData } from "next/image";
import React, { FC, useContext } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import empty from "@/assets/icons/empty.svg";
import { client } from "@/utils/gqlClient";
import { GlobalContext } from "@/context/context";

interface props {
  title: string;
  date?: string;
  image: StaticImageData | null | string;
  link: string;
}

const BlogCard: FC<props> = ({ title, date, image, link }) => {
  const { setGlobalLoading } = useContext(GlobalContext);

  return (
    <div
      onClick={() =>
        window.open(`https://homeviewdubai.com/blogs${link}`, "_blank")
      }
      className="w-full flex flex-col items-start justify-start hoverActiveScale"
    >
      <div className="w-full aspect-[1.45] bg-accent flex items-center justify-center rounded-lg overflow-hidden">
        {image !== null ? (
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            width={1024}
            height={1024}
          />
        ) : (
          <Image
            src={empty}
            alt={title}
            className="w-[60%] h-auto object-cover"
            width={1024}
            height={1024}
          />
        )}
      </div>
      <div>
        {/* <h3 className="text-section-header text-base lg:text-lg font-bold mt-[18px] mb-[8px]">
          {title}
        </h3> */}
        <article className="font-semibold max-w-none">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{title}</ReactMarkdown>
        </article>
        <p className="text-section-header text-sm font-normal">
          {formatDate(date)}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
