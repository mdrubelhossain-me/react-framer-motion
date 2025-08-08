import React from "react";
import { motion as Motion } from "framer-motion";

const TransitionAll = () => {
  const transition = {
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <div>
      {/* Section 1 */}
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Motion.div
          className="w-20 h-20 bg-indigo-500 rounded"
          whileInView={{ x: [0, 100, 0] }}
          transition={{
            times: [0, 0.3, 1],
            duration: 2,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>

      {/* Section 2 */}
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <Motion.div
          className="w-24 h-24 bg-purple-500 rounded"
          whileInView={{ x: [0, 100, 0] }}
          transition={{
            ease: ["easeIn", "easeOut"],
            duration: 2,
          }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>

      {/* Section 3 */}
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <Motion.li
          className="bg-blue-500 text-white p-4 mb-2 rounded list-none"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring" },
            opacity: { ease: "linear", duration: 1 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Animated List Item
        </Motion.li>
      </div>

      {/* Section 4 */}
      <div className="flex justify-center items-center h-screen bg-gray-400">
        <Motion.div
          className="w-32 h-32 bg-blue-500 rounded-md"
          whileInView={{ x: 100 }}
          transition={transition}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>
    </div>
  );
};

export default TransitionAll;
