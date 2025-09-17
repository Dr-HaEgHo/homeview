import PriceDropdown from "@/components/properties/PriceDropdown";
import Dropdown from "@/components/properties/Dropdown";
import SearchInput from "@/components/properties/SearchInput";
import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import SubsectionHeader from "@/components/shared/SubsectionHeader";
import PropertyCard from "@/components/properties/PropertyCard";
import { properties, propertyTypes } from "@/constants/data";
import PropertyTypeCard from "@/components/shared/PropertyTypeCard";
import AdBannerSlim from "@/components/shared/AdBannerSlim";

const priceOptions = [50000, 100000, 250000, 500000, 1000000, 2000000, 5000000];
const bedOptions = ["Studio", "1 Bed", "2 Beds", "3 Beds", "4 Beds", "5+ Beds"];
const propertyTypeOptions = ["Apartment", "Villa", "Townhouse", "Commercial"];
const garageOptions = ["None", "1", "2", "3+"];
const statusOptions = ["For Sale", "For Rent", "Sold", "Off Plan"];

const Page = () => {
  return (
    <div className="w-full mt-[93px]">
      {/* FILTERS */}
      <div className="w-full bg-accent py-3 mb-16">
        <div className="container">
          <div className="w-full flex items-center gap-3 flex-nowrap">
            <SearchInput />
            <PriceDropdown options={priceOptions} placeholder="Min Price" />
            <PriceDropdown options={priceOptions} placeholder="Max Price" />
            <Dropdown options={bedOptions} placeholder="Beds" />
            <Dropdown
              options={propertyTypeOptions}
              placeholder="Property Type"
            />
            <Dropdown options={garageOptions} placeholder="Garages" />
            <Dropdown options={statusOptions} placeholder="Status" />
          </div>
        </div>
      </div>

      {/* PROPERTIES LIST */}
      <div className="w-full">
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
                title="Start your Off Plan property search"
                subtitle="From waterfront projects and luxury towers to family communities, Dubai offers an exciting array of off plan properties. Let's find yours."
                gap={8}
              />
            </div>

            {/* CARD LISTINGS */}
            <div className="w-full grid grid-cols-4 gap-6 mt-[30px]">
              {properties.map((item) => (
                <PropertyCard
                  key={item.id}
                  image={item.image}
                  featured={item.featured}
                  tags={item.tags}
                  title={item.title}
                  subtitle={item.subtitle}
                  beds={item.beds}
                  baths={item.baths}
                  garages={item.garages}
                  price={item.price}
                  currency={item.currency}
                />
              ))}
            </div>

            <div className="w-full my-[50px] ">
              <div className="w-full flex flex-col gap-[50px]">
                <SubsectionHeader
                  title="Property types available"
                  gap={8}
                  subtitle="From apartments and villas to penthouses, here are some of the most popular property types for Off Plan Investment."
                />
              </div>
              <div className="w-full grid grid-cols-4 mt-10 gap-6 mb-10">
                {propertyTypes.map((type, idx: number) => (
                  <PropertyTypeCard
                    key={idx}
                    title={type.name}
                    filter={type.filter}
                    image={type.image}
                    count={type.count}
                  />
                ))}
              </div>

              <AdBannerSlim />
            </div>

            {/* CARD LISTINGS */}
            <div className="w-full grid grid-cols-4 gap-6 mt-[30px] mb-14">
              {properties.map((item) => (
                <PropertyCard
                  key={item.id}
                  image={item.image}
                  featured={item.featured}
                  tags={item.tags}
                  title={item.title}
                  subtitle={item.subtitle}
                  beds={item.beds}
                  baths={item.baths}
                  garages={item.garages}
                  price={item.price}
                  currency={item.currency}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
