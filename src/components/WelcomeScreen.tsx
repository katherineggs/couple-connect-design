
import { motion } from "framer-motion";

export const WelcomeScreen = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-wedding-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
      <div className="z-10 text-center space-y-8 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
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
      </div>
    </section>
  );
};
