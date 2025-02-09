
import { motion } from "framer-motion";
import { Mail, Hearts } from "lucide-react";

export const EnvelopeIntro = () => {
  return (
    <section className="py-16 px-4 bg-wedding-cream relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg relative"
        style={{
          backgroundImage: "linear-gradient(45deg, #F5E6D3 25%, transparent 25%), linear-gradient(-45deg, #F5E6D3 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #F5E6D3 75%), linear-gradient(-45deg, transparent 75%, #F5E6D3 75%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"
        }}
      >
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <Mail className="w-12 h-12 text-wedding-rose-gold" />
        </div>
        
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Hearts className="w-8 h-8 mx-auto text-wedding-rose-gold mb-4" />
            <p className="text-lg text-wedding-brown italic">
              With joy in our hearts,
            </p>
            <p className="text-lg text-wedding-brown mb-4">
              we invite you to share in our special day
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="py-4 border-t border-b border-wedding-rose-gold/30"
          >
            <p className="text-xl text-wedding-brown">
              as we begin our new life together
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
