// app/components/ParallaxScroll.tsx
"use client";

import { motion as Motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ParallaxImage({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen flex items-center justify-center relative snap-start">
      <div ref={ref} className="w-[300px] h-[400px] overflow-hidden bg-gray-100 shadow-md">
        <img
          src={`/photos/cityscape/${id}.jpg`}
          alt={`Image ${id}`}
          className="w-full h-full object-cover"
        />
      </div>
      <Motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="absolute left-[calc(50%+120px)] top-1/2 -translate-y-1/2 text-[50px] text-[#8df0cc] font-mono font-bold tracking-tight"
      >
        #{`00${id}`}
      </Motion.h2>
    </section>
  );
}

export default function ParallaxScroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      {[1, 2, 3, 4, 5].map((id) => (
        <ParallaxImage key={id} id={id} />
      ))}

      <Motion.div
        className="fixed bottom-[50px] left-0 right-0 h-[5px] bg-[#8df0cc] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
