import { Bath, BedDouble, CarFront } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "../shared/Button";

interface PropertyCardProps {
  image: StaticImageData;
  featured?: boolean;
  tags?: string[];
  title: string;
  subtitle: string;
  beds: number | string;
  baths: number | string;
  price: number;
  garages: number;
  currency?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  featured = false,
  tags = [],
  title,
  subtitle,
  beds,
  baths,
  price,
  garages,
  currency = "AED",
}) => {
  return (
    <div className="bg-white rounded-md border border-[#E5E5E5] overflow-hidden w-full max-w-[340px]">
      <div className="relative w-full h-[180px]">
        <Image src={image} alt={title} className="object-cover w-full h-full" />
        <div className="absolute top-3 left-3 flex gap-2">
          {featured && (
            <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 rounded">
              FEATURED
            </span>
          )}
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-primary text-white text-xs font-medium px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="">
        {/* TITLE AND SUBTITILE */}
        <div className="px-4 pt-4">
          <h3 className="text-base font-bold text-card-title leading-[22px] mb-1">
            {title}
          </h3>
          <p className="text-sm font-medium text-gray-500 mb-4">{subtitle}</p>
        </div>

        {/* BED BATHS AND GARAGES */}
        <div className="flex items-center justify-between gap-6 px-4 pb-4 border-b border-accent2">
          {/* BEDS */}
          <div className="flex flex-col items-center gap-2 text-gray-700">
            <BedDouble size={18} color="#4A5C6A" />
            <span className="text-sm text-card-title">{beds} Beds</span>
          </div>

          {/* BATHS */}
          <div className="flex flex-col items-center gap-2 text-gray-700">
            <Bath size={18} color="#4A5C6A" />
            <span className="text-sm text-card-title">{baths} Baths</span>
          </div>

          {/* GARAGES */}
          <div className="flex flex-col items-center gap-2 text-gray-700">
            <CarFront size={18} color="#4A5C6A" />
            <span className="text-sm text-card-title">{garages} Garages</span>
          </div>
        </div>

        {/* PRICE */}
        <div className="p-4 flex items-center justify-between">
          {/* STARTING FROM */}
          <div className="flex flex-col">
            <p className="text-base font-semibold text-card-title">Starting From {currency}</p>
            <p className="text-base font-medium text-card-title">{price.toLocaleString()}</p>
          </div>


          {/* BUTTON */}
          <Button title="view" theme="accent" className="!shadow-none !rounded" />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
