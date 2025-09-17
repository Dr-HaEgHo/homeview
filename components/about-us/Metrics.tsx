import { metrics } from "@/constants/data";
import React from "react";

const Metrics = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="w-[70%] mx-auto flex items-center justify-between mt-[110px] my-[50px]">
          {metrics.map((metric, idx: number) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2"
            >
              <h4 className="text-secondary text-2xl font-bold">
                {metric.title}{" "}
              </h4>
              <p className="text-section-header text-[13px] font-medium">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
