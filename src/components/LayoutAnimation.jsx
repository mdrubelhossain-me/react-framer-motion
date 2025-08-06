import { useState } from "react";
import { motion as Motion } from "framer-motion";

const LayoutAnimation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10 text-center">
      <Motion.div
        layout
        className="bg-blue-500 text-white p-4 rounded-md cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        Click to {open ? "collapse" : "expand"}
        {open && (
          <Motion.p layout className="mt-4 text-sm text-blue-100">
            This is some additional content that appears smoothly!
          </Motion.p>
        )}
      </Motion.div>
    </div>
  );
};

export default LayoutAnimation;
