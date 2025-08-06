import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const AnimatesPresence = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={() => setShow(!show)}
        className="mb-6 px-5 py-2 bg-blue-600 text-white rounded"
      >
        {show ? "Hide Box" : "Show Box"}
      </button>

      <AnimatePresence>
        {show && (
          <Motion.div
            key="box"
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 bg-purple-500 rounded-lg shadow-lg"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatesPresence;
