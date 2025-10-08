"use client";

import PriceDropdown from "@/components/properties/PriceDropdown";
import Dropdown from "@/components/properties/Dropdown";
import SearchInput from "@/components/properties/SearchInput";
import React, { useContext, useEffect, useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import SubsectionHeader from "@/components/shared/SubsectionHeader";
import PropertyCard from "@/components/properties/PropertyCard";
// import { properties, propertyTypes } from "@/constants/data";
import { propertyTypes } from "@/constants/data";
import PropertyTypeCard from "@/components/shared/PropertyTypeCard";
import AdBannerSlim from "@/components/shared/AdBannerSlim";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/shared/Button";
import { ArrowRight } from "lucide-react";
import { GlobalContext } from "@/context/context";
import { withSuspense } from "@/components/hoc/WIthSuspense";
import useAxios from "@/hooks/useFetch";

const priceOptions = [50000, 100000, 250000, 500000, 1000000, 2000000, 5000000];
const bedOptions = [1, 2, 3, 4, 5];
const propertyTypeOptions = [
  "Apartments",
  "Villas",
  "Town Houses",
  "Commercial",
];
const garageOptions = [0, 1, 2, 3];
const statusOptions = ["For Sale", "For Rent", "Sold", "Off Plan"];

const Page = () => {
  const router = useRouter();
  const search = useSearchParams();

  const { globalLoading, setGlobalLoading } = useContext(GlobalContext);
  // const { error, loading, data, refetch } = useAxios('/api/prop'); //useAxios("/api/props");

  const [properties, setProperties] = useState<any | null>(null);
  const [types, setTypes] = useState<any | null>(null);

  const handleSelect = (name: string, val: string) => {
    const params = new URLSearchParams(search.toString());
    params.set(name, val);
    router.push(`?${params.toString()}`);
  };

  const fetchProperties = async (filters?: string) => {
    setGlobalLoading && setGlobalLoading(true);
    try {
      const res = filters
        ? await axios.get(`/api/props?${filters}`)
        : await axios.get("/api/props");
      console.log(res.data.data);
      setProperties(res.data.data);
      setGlobalLoading && setGlobalLoading(false);

      if (!res.data || !res.data.length) return;
    } catch (err: any) {
      setGlobalLoading && setGlobalLoading(false);
      console.error("Error fetching data:::::::::::", err.message);
    }
  };

  const fetchTypes = async () => {
    try {
      const res = await axios.get("/api/types");
      console.log(res.data.data);
      setTypes(res.data.data);

      if (!res.data || !res.data.length) return;
      // console.log("the data:::::::",res.data[0]);
    } catch (err: any) {
      console.error("Error fetching data:::::::::::", err.message);
    }
  };

  const fetchOnClick = () => {
    fetchProperties(search.toString());
  };

  useEffect(() => {
    fetchProperties(search.toString());
    // fetchTypes();
  }, []);

  return (
    <div className="w-full mt-[93px]">
      {/* FILTERS */}
      <div className="w-full bg-accent py-3 mb-16">
        <div className="container">
          <div className="w-full flex items-center gap-3 flex-nowrap">
            <SearchInput
              onSearch={(val) => {
                handleSelect(
                  "city",
                  val ? val.toString().toLowerCase().split(" ").join("-") : ""
                );
              }}
            />
            <PriceDropdown
              options={priceOptions}
              onSelect={(val) => {
                handleSelect("minPrice", val ? val.toString() : "");
              }}
              placeholder="Min Price"
            />
            <PriceDropdown
              options={priceOptions}
              onSelect={(val) => {
                handleSelect("maxPrice", val ? val.toString() : "");
              }}
              placeholder="Max Price"
            />
            <Dropdown
              options={bedOptions}
              onSelect={(val) => {
                handleSelect("bedrooms", val ? val.toString() : "");
              }}
              placeholder="Beds"
            />
            <Dropdown
              options={propertyTypeOptions}
              placeholder="Property Type"
              onSelect={(val) => {
                handleSelect(
                  "type",
                  val ? val.toString().toLowerCase().split(" ").join("_") : ""
                );
              }}
            />
            <Dropdown
              options={garageOptions}
              onSelect={(val) => {
                handleSelect("garages", val ? val.toString() : "");
              }}
              placeholder="Garages"
            />
            <Dropdown
              options={statusOptions}
              onSelect={(val) => {
                handleSelect(
                  "listing",
                  val ? val.toString().toLowerCase().split(" ").join("-") : ""
                );
              }}
              placeholder="Status"
            />
            <button
              onClick={fetchOnClick}
              className="min-w-12 h-12 cursor-pointer rounded-full flex items-center bg-secondary justify-center !py-0 hover:opacity-80 active:opacity-100 transition duration-200"
            >
              <ArrowRight color="#fff" />
            </button>
          </div>
        </div>
      </div>

      {/* PROPERTIES LIST */}
      <div className="w-full mb-6">
        <div className="container">
          <div className="w-full">
            {/* HEADERS */}
            <div className="flex flex-col gap-[60px]">
              <SectionHeader
                title="Start your Off Plan property search"
                subtitle="From waterfront projects and luxury towers to family communities, Dubai offers an exciting array of off plan properties. Let's find yours."
                gap={14}
                position="left"
                maxWidth={2000}
              />
              <SubsectionHeader
                title="Find Your Dream Property"
                subtitle="Discover exceptional properties that match your lifestyle and investment goals"
                gap={8}
              />
            </div>

            {/* CARD LISTINGS */}
            {properties === null ? (
              <p>Oops nothing here</p>
            ) : !properties.length ? (
              <div className="w-full h-[600px] flex items-center justify-center bg-secondary">
                No properties found
              </div>
            ) : (
              <div className="w-fit md:w-full max-md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6 mt-[30px]">
                {properties.slice(0, 8).map((item: any) => (
                  <PropertyCard
                    id={item.id}
                    key={item.id}
                    image={item.images[0]}
                    featured={item.featured}
                    tags={item.tags}
                    title={item.project}
                    subtitle={item.about_project}
                    beds={item.beds}
                    baths={item.baths}
                    garages={item.garages}
                    price={item.launch_price}
                    currency={item.currency}
                  />
                ))}
              </div>
            )}

            {/* <div className="w-full my-[50px] ">
              <div className="w-full flex flex-col gap-[50px]">
                <SubsectionHeader
                  title="Property types available"
                  gap={8}
                  subtitle="From apartments and villas to penthouses, here are some of the most popular property types for Off Plan Investment."
                />
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-4 mt-5 md:mt-10 gap-3 md:gap-6">
                {types !== null &&
                  propertyTypes.map((type, idx: number) => (
                    <PropertyTypeCard
                      key={idx}
                      title={type.name}
                      filter={type.filter}
                      image={type.image}
                      count={types[type.filter] || 0}
                    />
                  ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="contatiner">
        <AdBannerSlim />
      </div>

      <div className="w-full ">
        <div className="container">
          <div className="w-full pb-10">
            {/* CARD LISTINGS */}
            {properties === null ? (
              <p>Oops nothing here</p>
            ) : !properties.length ? (
              <div className="w-full h-[600px] flex items-center justify-center bg-secondary">
                No properties found
              </div>
            ) : (
              <div className="w-fit md:w-full max-md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6 mt-[30px]">
                {properties.slice(8).map((item: any) => (
                  <PropertyCard
                    id={item.id}
                    key={item.id}
                    image={item.images[0]}
                    featured={item.featured}
                    tags={item.tags}
                    title={item.project}
                    subtitle={item.about_project}
                    beds={item.beds}
                    baths={item.baths}
                    garages={item.garages}
                    price={item.launch_price}
                    currency={item.currency}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withSuspense(Page, <div>Loading properties...</div>);
