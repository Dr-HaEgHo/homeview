import Image from 'next/image';
import React from 'react'
import SectionHeader from '../shared/SectionHeader';
import Button from '../shared/Button';
import garden from "@/assets/images/garden.png";

const HomeAd = () => {
   return (
    <div className="w-full aspect-[3.29] min-h-[400px] relative">
      <div className="w-full h-full bg-primary absolute z-0">
        <Image src={garden} alt="why choose us" className="w-full h-full object-cover" />
      </div>

      <div className="container h-full py-4 top-0 flex flex-col gap-8 items-center justify-center z-10 relative">
        {/* <div className=" h-full "> */}
          <SectionHeader
            theme="dark"
            // title="Why Choose Home View Real Estate"
            subtitle="Want to secure a GOLDEN VISA by investing in the UAE?"
            para="Invest in UAE properties with our expert guidance and register your interest today to learn how you can obtain your Golden Visa!"
          />
          <Button title="REGISTER YOUR INTEREST" theme="secondary" className="text-sm !py-5 !px-14 !rounded-[6px]"/>
        {/* </div> */}
      </div>
    </div>
  );
}

export default HomeAd