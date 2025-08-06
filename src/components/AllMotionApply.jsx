import React from "react";
import { motion as Motion } from "motion/react";

const AllMotionApply = () => {
  return (
    <div className="text-center p-4">
      <h1>All Motion Apply</h1>

      {/* whileHover, whileTap */}
      <Motion.button
        className="btn btn-primary p-4 bg-blue-400 text-white rounded-lg"
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 1.2, rotate: -40, transition: { duration: 0.3 } }}
      >
        Click Me
      </Motion.button>
    </div>
  );
};

export default AllMotionApply;
