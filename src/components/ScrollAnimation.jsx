import React from "react";
import { useScroll, useSpring, motion as Motion } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();

  // Scroll progress ke smooth korar jonno spring use kora hoise
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Progress bar */}
      <Motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          backgroundColor: "red",
          transformOrigin: "left",
          scaleX: smoothProgress,
        }}
      />
    </>
  );
};

export default ScrollAnimation;
