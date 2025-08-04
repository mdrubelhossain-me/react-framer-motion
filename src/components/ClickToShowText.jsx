import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const ClickToExpandBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white rounded-lg p-10 cursor-pointer overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Motion.h2 layout className="text-lg font-semibold">
          Click me
        </Motion.h2>

        <AnimatePresence>
          {isOpen && (
            <Motion.p
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-2 text-sm"
            >
              এই বাক্যটি শুধুমাত্র ক্লিক করার পরই দেখা যাবে। বক্সের আকারও বড় হচ্ছে।
            </Motion.p>
          )}
        </AnimatePresence>
      </Motion.div>
    </div>
  );
};

export default ClickToExpandBox;
