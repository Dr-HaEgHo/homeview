"use client";

import { useState } from "react";

// Reusable Accordion component

export const Accordion = ({ items }: { items: any }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full  mx-auto ">
      {items.map((item: any, idx: number) => (
        <div key={idx} className="border-b mb-[6px] border-accent2">
          <button
            style={{
              backgroundColor:
                openIndex === idx ? "var(--color-accent)" : "transparent",
            }}
            className="w-full cursor-pointer flex justify-between items-center py-2 px-[10px] mb-4 rounded-md text-left focus:outline-none"
            onClick={() => handleToggle(idx)}
          >
            <span className="font-medium text-base text-section-header">
              {item.question}
            </span>
            <span className="text-3xl text-section-header font-semibold">
              {openIndex === idx ? "-" : "+"}
            </span>
          </button>
          {openIndex === idx && (
            <div className="px-2 pb-4 text-gray-600 text-sm animate-fadeIn">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
