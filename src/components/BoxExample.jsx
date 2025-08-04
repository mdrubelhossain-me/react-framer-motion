import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";

const BoxExample = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="p-4 flex items-center justify-center">
      <div>
        <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {show ? "Hide Box" : "Show Box"}
      </button>

      <AnimatePresence>
        {show && (
          <Motion.div
            key="amarBox"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-52 h-52 bg-sky-400 mt-5 rounded-lg flex items-center justify-center"
          >
            <p className="text-center">This is a box</p>
          </Motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};

export default BoxExample;
