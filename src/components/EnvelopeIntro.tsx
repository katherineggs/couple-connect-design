
import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";

export const EnvelopeIntro = () => {
  return (
    <section className="py-24 px-4 bg-wedding-cream relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        {/* Envelope Flap */}
        <motion.div
          initial={{ rotateX: 0 }}
          whileHover={{ rotateX: 50 }}
          transition={{ duration: 0.4 }}
          className="w-full h-32 bg-white shadow-lg origin-bottom"
          style={{
            clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        />
        
        {/* Envelope Body */}
        <div 
          className="bg-white p-12 shadow-xl relative"
          style={{
            backgroundImage: "linear-gradient(45deg, #F5E6D3 25%, transparent 25%), linear-gradient(-45deg, #F5E6D3 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #F5E6D3 75%), linear-gradient(-45deg, transparent 75%, #F5E6D3 75%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"
          }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Mail className="w-12 h-12 text-wedding-rose-gold" />
          </div>
          
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Heart className="w-8 h-8 mx-auto text-wedding-rose-gold mb-4" />
            <p className="text-2xl font-serif text-wedding-brown italic">
              With joy in our hearts,
            </p>
            <p className="text-xl text-wedding-brown">
              we invite you to share in our special day
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="py-6 border-t border-b border-wedding-rose-gold/30 my-8"
            >
              <p className="text-2xl font-serif text-wedding-brown">
                as we begin our new life together
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Envelope Bottom Flap */}
        <div 
          className="w-full h-16 bg-white shadow-md"
          style={{
            clipPath: "polygon(0 0, 50% 100%, 100% 0)"
          }}
        />
      </motion.div>
    </section>
  );
};
