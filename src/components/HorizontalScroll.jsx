"use client";

import {
  animate,
  motion as Motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

export default function ScrollLinked() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  // Mask image for scroll edge fade
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div id="example">
      {/* Progress Circle */}
      <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <Motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      {/* Horizontal Scroll List */}
      <Motion.ul ref={ref} style={{ maskImage }}>
        {contentBoxes.map((item, index) => (
          <li key={index} style={{ background: item.color }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </Motion.ul>

      <StyleSheet />
    </div>
  );
}

// Box content list
const contentBoxes = [
  {
    title: "Welcome",
    description: "This is the first card in the scroll.",
    color: "#ff0088",
  },
  {
    title: "About",
    description: "Scroll to discover more about us.",
    color: "#dd00ee",
  },
  {
    title: "Services",
    description: "We offer creative design and development.",
    color: "#9911ff",
  },
  {
    title: "Projects",
    description: "Take a look at our recent works.",
    color: "#0d63f8",
  },
  {
    title: "Contact",
    description: "Feel free to get in touch anytime.",
    color: "#0cdcf7",
  },
  {
    title: "Thanks!",
    description: "Thanks for scrolling this far!",
    color: "#8df0cc",
  },
];

// Mask image change on scroll
function useScrollOverflowMask(scrollXProgress) {
  const opaque = "#000";
  const transparent = "#0000";
  const left = "0%";
  const right = "100%";
  const leftInset = "20%";
  const rightInset = "80%";

  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

// Styles
function StyleSheet() {
  return (
    <style>{`
      #example {
        width: 100vw;
        max-width: 500px;
        margin: 100px auto 0 auto;
        padding: 20px;
        position: relative;
      }

      #progress {
        position: absolute;
        top: -65px;
        left: -15px;
        transform: rotate(-90deg);
      }

      #progress .bg {
        stroke: #0b1011;
      }

      #progress circle {
        stroke-dashoffset: 0;
        stroke-width: 10%;
        fill: none;
      }

      #progress .indicator {
        stroke: var(--accent, #00f);
      }

      #example ul {
        display: flex;
        list-style: none;
        height: 220px;
        overflow-x: scroll;
        padding: 20px 0;
        flex: 0 0 600px;
        margin: 0 auto;
        gap: 20px;
      }

      #example li {
        flex: 0 0 200px;
        border-radius: 12px;
        color: white;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: sans-serif;
      }

      #example li h3 {
        margin: 0 0 8px;
        font-size: 1.1rem;
      }

      #example li p {
        margin: 0;
        font-size: 0.9rem;
        line-height: 1.3;
      }

      #example ::-webkit-scrollbar {
        height: 5px;
        background: #fff3;
      }

      #example ::-webkit-scrollbar-thumb {
        background: var(--accent, #00f);
        border-radius: 10px;
        cursor: pointer;
      }

      #example ::-webkit-scrollbar-corner {
        background: #fff3;
      }
    `}</style>
  );
}
