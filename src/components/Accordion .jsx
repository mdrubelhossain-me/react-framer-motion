import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Motion.div layout className="border rounded-md bg-white shadow mb-4">
      {/* Accordion Header */}
      <Motion.header
        layout
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800">{title}</span>
        <Motion.span
          className="text-xl font-bold text-gray-600"
          initial={false}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? "➖" : "➕"}
        </Motion.span>
      </Motion.header>

      {/* Accordion Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <Motion.section
            key="content"
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-gray-600 text-sm overflow-hidden"
          >
            {children}
          </Motion.section>
        )}
      </AnimatePresence>
    </Motion.div>
  );
};

const AccordionGroup = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <Accordion title="What is Framer Motion?">
        Framer Motion is a powerful animation library for React that makes it
        easy to create smooth, interactive animations.
      </Accordion>
      <Accordion title="Why use AnimatePresence?">
        AnimatePresence lets you animate components when they enter and exit the
        DOM.
      </Accordion>
      <Accordion title="Does it work with Tailwind CSS?">
        Yes! Framer Motion works perfectly with Tailwind, allowing design +
        animation together.
      </Accordion>
    </div>
  );
};

export default AccordionGroup;
