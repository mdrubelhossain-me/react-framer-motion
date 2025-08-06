import React from "react";
import { motion as Motion } from "framer-motion";


const Focus = () => {
  return (
    <div className="text-center p-4">
      <Motion.a
        href="#"
        whileFocus={{ scale: 1.9, backgroundColor: "#4f46e5" }}
        className="inline-block px-4 py-2 text-white bg-blue-500 rounded-md outline-none"
      >
        Focus Me
      </Motion.a>
    </div>
  );
};

export default Focus;
