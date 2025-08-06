import { useState } from "react";
import { motion as Motion } from "framer-motion";

const LayoutToggleCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Motion.div
        layout
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-6 rounded-lg shadow-xl w-full max-w-md cursor-pointer"
      >
        <h2 className="text-xl font-semibold mb-1">
          {open ? "Click to Collapse" : "Click to Expand"}
        </h2>

        <p className="text-sm text-blue-100">
          This section uses <code>layout</code> animation.
        </p>

        {open && (
          <Motion.div
            layout
            className="mt-4 text-sm bg-blue-500 p-4 rounded-md"
          >
            <p>
              This extra content appears and disappears **smoothly** thanks to
              Framer Motion's `layout` prop. You don’t have to handle any
              height, transition, or animation manually.
            </p>
          </Motion.div>
        )}
      </Motion.div>
    </div>
  );
};

export default LayoutToggleCard;
