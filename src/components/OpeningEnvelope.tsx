
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const OpeningEnvelope = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpened) {
      setIsOpened(true);
      setTimeout(() => {
        setIsComplete(true);
      }, 1500);
    }
  };

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-wedding-cream flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-[90vw] max-w-2xl cursor-pointer"
        onClick={handleEnvelopeClick}
      >
        {/* Envelope Flap */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpened ? 180 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            transformOrigin: "top",
            zIndex: 2,
            perspective: "1000px",
          }}
          className="absolute top-0 left-0 right-0 h-40 bg-white shadow-lg"
        >
          <div 
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
              background: "linear-gradient(45deg, #F5E6D3 25%, transparent 25%), linear-gradient(-45deg, #F5E6D3 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #F5E6D3 75%), linear-gradient(-45deg, transparent 75%, #F5E6D3 75%)",
              backgroundSize: "20px 20px",
            }}
          />
        </motion.div>

        {/* Letter Content */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isOpened ? -100 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 bg-white p-12 shadow-xl min-h-[400px] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpened ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-wedding-brown mb-6">
              You're Invited
            </h1>
            <p className="text-xl text-wedding-brown italic">
              Click to open our wedding invitation
            </p>
          </motion.div>
        </motion.div>

        {/* Envelope Body */}
        <div className="absolute inset-0 bg-white shadow-xl -z-10">
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(45deg, #F5E6D3 25%, transparent 25%), linear-gradient(-45deg, #F5E6D3 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #F5E6D3 75%), linear-gradient(-45deg, transparent 75%, #F5E6D3 75%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Envelope Bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 bg-white shadow-md -z-20"
          style={{
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
          }}
        />
      </motion.div>
    </div>
  );
};
