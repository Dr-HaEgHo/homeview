import BlogCard from "@/components/news/BlogCard";
import FeaturedBlog from "@/components/news/FeaturedBlog";
import Nav from "@/components/news/Nav";
import AdBannerSlim from "@/components/shared/AdBannerSlim";
import { newsItems } from "@/constants/data";
import React from "react";

const Page = () => {
  const blogs = newsItems.slice(1, 5);
  const newBlogs = newsItems.slice(5, 13);

  return (
    <div className="mt-[93px]">
      <Nav />
      <FeaturedBlog />
      <div className="container">

        <div className="w-full grid grid-cols-4 gap-6 mb-[50px]">
          {blogs.map((blog, idx: number) => (
            <BlogCard
              key={idx}
              image={blog.image}
              title={blog.title}
              date={blog.date}
            />
          ))}
        </div>

        <AdBannerSlim/>

        <div className="w-full grid grid-cols-4 gap-6 my-[50px]">
          {newBlogs.map((blog, idx: number) => (
            <BlogCard
              key={idx}
              image={blog.image}
              title={blog.title}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
