import { motion as Motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#ef4444",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: {
    scale: 0.95,
    backgroundColor: "#b91c1c",
  },
};

const iconVariants = {
  hover: {
    pathLength: 1,
    transition: { duration: 0.5 },
  },
  tap: {
    pathLength: 0.5,
  },
};

const TailwindAnimatedButton = () => {
  return (
    <div className="text-center p-4 flex flex-col items-center justify-center">
      <Motion.button
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        className="flex items-center gap-2 px-5 py-3 rounded-md text-white bg-gray-800"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Motion.path
            d="M5 13l4 4L19 7"
            variants={iconVariants}
            initial={{ pathLength: 0 }}
          />
        </svg>
        Click Me
      </Motion.button>

      {/* Pan */}
      <Motion.div
        className="w-40 h-40 bg-green-500 touch-none"
        onPan={(e, info) => {
          console.log("Pan detected!", info.point);
        }}
      />
    </div>
  );
};

export default TailwindAnimatedButton;
