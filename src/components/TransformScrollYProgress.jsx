import React from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

const TransformScrollYProgress = () => {
  // স্ক্রল progress track করার জন্য
  const { scrollYProgress } = useScroll();

  // স্ক্রল progress অনুযায়ী background color পরিবর্তন
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#f00", "#0f0", "#00f"]
  );

  return (
    <div style={{ height: "40vh" }}>
      <Motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "40vh",
          backgroundColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Scroll Me!
      </Motion.div>
    </div>
  );
};

export default TransformScrollYProgress;
