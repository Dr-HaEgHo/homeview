"use client";
import { withSuspense } from "@/components/hoc/WIthSuspense";
import BlogCard from "@/components/news/BlogCard";
import FeaturedBlog from "@/components/news/FeaturedBlog";
import Nav from "@/components/news/Nav";
import AdBannerSlim from "@/components/shared/AdBannerSlim";
import { newsItems } from "@/constants/data";
import { GlobalContext } from "@/context/context";
import axios from "axios";
import { Info } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  const blogs = newsItems.slice(1, 5);
  const newBlogs = newsItems.slice(5, 13);

  const router = useRouter();
  const search = useSearchParams();

  const { setGlobalLoading } = useContext(GlobalContext);
  const [news, setNews] = useState<any | null>(null);

  const fetchProperties = async (filters?: string) => {
    setGlobalLoading && setGlobalLoading(true);
    try {
      const res = filters
        ? await axios.get(`/api/blogs?${filters}`)
        : await axios.get("/api/blogs");
      console.log(res.data.data);
      setNews(res.data.data);
      setGlobalLoading && setGlobalLoading(false);

      if (!res.data || !res.data.length) return;
    } catch (err: any) {
      setGlobalLoading && setGlobalLoading(false);
      console.error("Error fetching data:::::::::::", err.message);
    }
  };

  const fetchOnClick = (filter: string) => {
    // fetchProperties(search.toString());
    fetchProperties(filter);
  };

  useEffect(() => {
    fetchProperties(search.toString());
  }, []);

  return (
    <div className="mt-[93px]">
      {news !== null && news.length ? <Nav cta={fetchOnClick} /> : null}
      {news !== null && news.length ? <FeaturedBlog blog={news[0]} /> : null}
      {news === null ? (
        <div></div>
      ) : !news.length ? (
        <div className="w-full ">
          <div className="container py-10">
            <div className="w-full h-[600px]  flex items-center justify-center bg-accent rounded-xl">
              <div className="w-full h-[600px] bg-accent flex flex-col items-center justify-center">
                <Info size={124} color="#78736e" />
                <p className="text-lg text-accent3 text-center">
                  The type of news you are looking for <br /> is not available at the
                  moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-[50px]">
            {news.slice(1, 5).map((blog, idx: number) => (
              <BlogCard
                key={idx}
                image={blog.image}
                title={blog.title}
                date={blog.date}
                link={blog.link}

              />
            ))}
          </div>

          <AdBannerSlim />

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-[50px]">
            {news.slice(5).map((blog, idx: number) => (
              <BlogCard
                key={idx}
                image={blog.image}
                title={blog.title}
                date={blog.date}
                link={blog.link}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default withSuspense(Page, <div>Loading properties...</div>);
