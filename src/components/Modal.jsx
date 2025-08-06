import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        // Overlay
        <Motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Content */}
          <Motion.div
            className="bg-white p-6 rounded-md shadow-lg w-full max-w-sm"
            initial={{ scale: 0.8, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-2">Modal Title</h2>
            <p className="text-gray-600 mb-4">
              This is a smooth modal with Framer Motion.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Open Modal
      </button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
