import React from "react";
import { motion as Motion } from "motion/react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      {/* Home Page */}
      <Home />
      {/* ----------- */}

      <Motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8 text-gray-800"
      >
        Lorem ipsum dolor sit amet.
      </Motion.h1>
      <Motion.h1
        className="text-4xl font-bold mb-8 text-gray-800"
        whileHover={{ scale: 0.9, opacity: 0.5 }}
      >
        Lorem ipsum dolor sit amet.
      </Motion.h1>
      <div className="flex items-center min-h-screen bg-gray-100">
        <Motion.div
          initial={{ x: -220 }}
          animate={{ x: [0, 900, 0] }}
          transition={{ duration: 2 }}
          className="bg-white rounded-lg shadow-lg p-8 w-80"
        >
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Hello</h1>
          <div className="border border-dashed border-gray-300 rounded-md h-32 flex items-center justify-center">
            {/* Content goes here */}
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default App;
