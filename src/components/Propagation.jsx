import React from "react";
import { motion as Motion } from "framer-motion";

const Propagation = () => {
  return (
    <div className="text-center p-4">
      <Motion.div className="bg-red-400 p-3" whileTap={{ scale: 2 }}>
        <button
          className="btn btn-primary p-4 bg-blue-400 text-white rounded-lg"
          //   onPointerDownCapture={(e) => e.stopPropagation()}
        >
          Click Me
        </button>
      </Motion.div>

      {/* Parent এর whileTap কাজ করবে শুধু তখনই, যখন button ছাড়িয়ে 
         div-এ tap করা হবে।
        Button এ click করলে parent animate হবে না। */}

      <Motion.div whileTap={{ scale: 1.2 }} className="p-10 bg-gray-200">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          Inside Button
        </button>
      </Motion.div>
    </div>
  );
};

export default Propagation;
