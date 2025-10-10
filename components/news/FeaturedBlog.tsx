import { newsItems } from "@/constants/data";
import Image from "next/image";
import React, { useContext } from "react";
import Button from "../shared/Button";
import { useRouter } from "next/navigation";
import { formatDate } from "@/constants/functions";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import empty from "@/assets/icons/empty.svg";
import { GlobalContext } from "@/context/context";
import { client } from "@/utils/gqlClient";

interface props {
  blog: any;
}

const FeaturedBlog = ({ blog }) => {
  // const blog = newsItems[0];
  const router = useRouter();
  const { setGlobalLoading } = useContext(GlobalContext);

  console.log("this is the featured blog :::::::", blog);

    // const handleFetch = async (id: string) => {
    //   const query = `
    //   query GetPost($slug: ID!) {
    //     post(id: $slug, idType: SLUG) {
    //       title
    //       content
    //       featuredImage {
    //         node {
    //           sourceUrl
    //         }
    //       }
    //     }
    //   }
    // `;
  
    //   setGlobalLoading && setGlobalLoading(true);
    //   try {
    //     const data = await client.request(query, { slug: id });
  
    //     console.log("this is the data from graphQl Wordpress", data);
    //     if (data && data) {
    //       // setNews(data?.posts.nodes);
    //     }
    //     setGlobalLoading && setGlobalLoading(false);
    //   } catch (err) {
    //     setGlobalLoading && setGlobalLoading(false);
    //   }
    // };

  return (
    <div className="w-full my-10">
      <div className="container">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 xl:gap-[74px]">
          {/* CONTENT */}
          <div className="w-full md:w-[90%] max-md:order-2 flex flex-col items-start justify-start">
            <h2 className="text-section-header text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[20px] md:leading-[40px]">
              {blog.title}
            </h2>

            <div className="w-full flex items-center justify-center md:hidden bg-accent aspect-[1.7] mt-4 rounded-lg overflow-hidden">
              {blog.featuredImage !== null ? (
              <Image
                src={blog.featuredImage.node.sourceUrl}
                alt={blog.title}
                className="w-full h-full object-cover"
                width={1024}
                height={1024}
              />
            ) : (
              <Image
                src={empty}
                alt={blog.title}
                className="w-[60%] h-auto object-cover"
                width={1024}
                height={1024}
              />
            )}
            </div>
            <span className="text-section-header text-sm font-normal mt-4">
              {formatDate(blog.date)}
            </span>
            <article className="prose prose-lg line-clamp-3 prose-invert max-w-none my-5 md:my-[34px]">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {blog.excerpt}
              </ReactMarkdown>
            </article>
            {/* <p className="text-section-header text-base font-normal my-5 md:my-[34px]">
              {blog.excerpt}
            </p> */}
            <Button
              onClick={() => window.open(`https://homeviewdubai.com/blogs${blog.uri}`, "_blank")}
              title="Continue Reading"
              variant="outline"
              theme="secondary"
              className="!text-section-header !text-base !font-semibold"
            />
          </div>

          <div className="w-full hidden md:block aspect-[1.7] bg-accent rounded-lg overflow-hidden">
            {blog.featuredImage !== null ? (
              <Image
                src={blog.featuredImage.node.sourceUrl}
                alt={blog.title}
                className="w-full h-full object-cover"
                width={1024}
                height={1024}
              />
            ) : (
              <Image
                src={empty}
                alt={blog.title}
                className="w-[60%] h-auto object-cover"
                width={1024}
                height={1024}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
