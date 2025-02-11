
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const OpeningEnvelope = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpened) {
      setIsOpened(true);
      setTimeout(() => {
        setIsComplete(true);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div 
          className="fixed inset-0 z-50 bg-wedding-cream flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-screen h-screen cursor-pointer"
            onClick={handleEnvelopeClick}
          >
            {/* Envelope Flap with Shadow */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotateX: isOpened ? 180 : 0 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2
              }}
              style={{
                transformOrigin: "top",
                perspective: "1000px",
                zIndex: 2,
              }}
              className="absolute top-0 left-0 right-0 h-[40%]"
            >
              <div className="absolute inset-0 bg-white">
                {/* Triangle Shadow */}
                <div 
                  className="absolute inset-0 z-10"
                  style={{
                    clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                    background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)",
                  }}
                />
                {/* Flap Background */}
                <div 
                  className="absolute inset-0"
                  style={{
                    clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                    background: "linear-gradient(45deg, #F5E6D3 25%, transparent 25%), linear-gradient(-45deg, #F5E6D3 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #F5E6D3 75%), linear-gradient(-45deg, transparent 75%, #F5E6D3 75%)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
            </motion.div>

            {/* Letter Content */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ 
                y: isOpened ? -120 : 0,
                scale: isOpened ? 1.05 : 1
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.4, 0, 0.2, 1],
                delay: 0.4
              }}
              className="absolute inset-0 m-auto h-[80%] z-10 bg-white p-12 shadow-xl flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isOpened ? 1 : 0,
                  y: isOpened ? 0 : 20
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  ease: "easeOut"
                }}
                className="text-center space-y-4"
              >
                <h3 className="text-wedding-rose-gold text-xl font-light tracking-widest">
                  WE ARE GETTING MARRIED
                </h3>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-wedding-brown">
                  Rony & Delmy
                </h1>
                <p className="text-2xl text-wedding-brown font-light tracking-wide">
                  December 27th, 2024
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
              className="absolute bottom-0 left-0 right-0 h-[20%] bg-white shadow-md -z-20"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
