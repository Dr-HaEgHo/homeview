"use client";
import React, { useState } from "react";
import SectionHeader from "../shared/SectionHeader";
import { faqItems } from "@/constants/data";
import { Accordion } from "../shared/Accordion";

const FAQs = () => {
  return (
    <div className="w-full py-20 pb-24">
      <div className="container">
        <div className="w-full mb-10">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Explore our awesome plans and choose the one most suitable to you."
            gap={10}
          />
        </div>
        <div className="lg:px-14">
          <Accordion items={faqItems} />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
