import React from "react";
import { motion as Motion } from "framer-motion";

const SVGs = () => {
  return (
    <div className="bg-red-100 p-4 text-center">
      <Motion.svg className="bg-green-400" width="200" height="200" whileHover="hover">
        {/* Filter definition */}
        <defs>
          <filter id="blurFilter">
            <Motion.feGaussianBlur
              in="SourceGraphic"
              stdDeviation={0}
              variants={{ hover: { stdDeviation: 5 } }}
            />
          </filter>
        </defs>

        {/* Circle with blur filter applied */}
        <circle
          cx="100"
          cy="100"
          r="50"
          fill="blue"
          filter="url(#blurFilter)"
        />
      </Motion.svg>
    </div>
  );
};

export default SVGs;
