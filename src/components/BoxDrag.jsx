import React from "react";
import { motion as Motion } from "motion/react";

const BoxDrag = () => {
  return (
    <div className="flex gap-2 items-center justify-center min-h-screen bg-gray-100">
      <Motion.div
        drag
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "green",
        }}
      />
      <Motion.div
        drag
        style={{
          width: 100,
          height: 100,
          backgroundColor: "blue",
          borderRadius: 10,
        }}
      />
      <Motion.div
        drag="y"
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          borderRadius: 10,
        }}
      />
    </div>
  );
};

export default BoxDrag;
