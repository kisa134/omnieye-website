import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "OmniEye — AI Trading Platform";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d26] to-[#1a1a33] text-white font-mono">
      <div className="text-center py-24">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]"
        >
          OmniEye
        </motion.h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Pixel-perfect трейдинг и аналитика на базе AI. Добро пожаловать в будущее.
        </p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#features"
          className="inline-block mt-8 px-6 py-3 bg-cyan-600 text-white rounded-xl shadow hover:bg-cyan-700 transition"
        >
          Попробовать демо
        </motion.a>
      </div>
    </div>
  );
}
