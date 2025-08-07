"use client";

import { motion as Motion, useScroll } from "framer-motion";
import { useRef } from "react";

function Item({ title, description }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section style={itemContainer}>
      <div ref={ref} style={item}>
        <figure style={progressIconContainer}>
          <svg
            style={progressIcon}
            width="75"
            height="75"
            viewBox="0 0 100 100"
          >
            <circle
              style={progressIconBg}
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
            />
            <Motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              style={{
                ...progressIconIndicator,
                pathLength: scrollYProgress,
              }}
            />
          </svg>
        </figure>

        {/* Box content */}
        <div style={contentBox}>
          <h3 style={titleStyle}>{title}</h3>
          <p style={descStyle}>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default function TrackElementWithinViewport() {
  return (
    <>
      <Item
        title="Scroll Tracker 1"
        description="এই বক্সটি স্ক্রল ট্র্যাক করছে।"
      />
      <Item
        title="Scroll Tracker 2"
        description="এই অংশটি আপনার স্ক্রল অনুযায়ী অ্যানিমেট হচ্ছে।"
      />
      <Item
        title="Scroll Tracker 3"
        description="Framer Motion এর scrollYProgress ইউজ করা হয়েছে।"
      />
      <Item
        title="Scroll Tracker 4"
        description="প্রতিটি আইটেম ভিউপোর্টে প্রবেশ করলে progress দেখায়।"
      />
      <Item
        title="Scroll Tracker 5"
        description="এইভাবে আপনি অনেক section ট্র্যাক করতে পারবেন।"
      />
      <Item
        title="Scroll Tracker 6"
        description="এখানে SVG shape ইউজ করা হয়েছে scroll bar হিসেবে।"
      />
    </>
  );
}

/**
 * ==============   Styles   ================
 */

const itemContainer = {
  height: "100vh",
  maxHeight: "450px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const item = {
  width: 300,
  height: 300,
  border: "2px dashed #ff0088",
  position: "relative",
  borderRadius: 12,
  padding: 20,
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  background: "#fff",
};

const progressIconContainer = {
  position: "absolute",
  top: 20,
  left: 20,
  width: 80,
  height: 80,
};

const processCircle = {
  strokeDashoffset: 0,
  strokeWidth: 5,
  fill: "none",
};

const progressIcon = {
  ...processCircle,
  transform: "rotate(-90deg)",
  stroke: "#ff0088",
};

const progressIconIndicator = {
  ...processCircle,
  stroke: "#00f",
};

const progressIconBg = {
  opacity: 0.2,
  stroke: "#ccc",
};

const contentBox = {
  marginTop: 110,
  textAlign: "center",
};

const titleStyle = {
  fontSize: 20,
  fontWeight: 600,
  color: "#222",
  marginBottom: 10,
};

const descStyle = {
  fontSize: 16,
  color: "#666",
};
