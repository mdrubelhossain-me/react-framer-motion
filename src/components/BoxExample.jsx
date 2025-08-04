import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

const BoxExample = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
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
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "skyblue",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          >
            <p style={{ textAlign: "center", paddingTop: "80px" }}>
              This is a box
            </p>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BoxExample;
