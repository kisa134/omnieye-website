import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "OmniEye — Vision Intelligence for Traders";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050516] to-[#0f0f2d] text-white font-mono">
      {/* Hero Section */}
      <div className="text-center py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0ff4_1px,transparent_1px)] [background-size:20px_20px] opacity-5 pointer-events-none" />
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.8)]"
        >
          Omni<span className="text-cyan-300">Eye</span>
        </motion.h1>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Vision intelligence & real-time analytics for traders. Powered by AI. Built for clarity.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#features"
          className="inline-block mt-10 px-6 py-3 bg-cyan-500 text-white rounded-xl shadow hover:bg-cyan-600 transition font-semibold"
        >
          Try the Demo
        </motion.a>
      </div>

      {/* About Section */}
      <div className="py-24 px-6 text-center bg-[#0b0b25]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          About Us
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
          OmniEye helps traders understand markets better through automated insights, live indicators and intelligent summaries. Our AI is your edge.
        </p>
        <div className="mt-12">
          <img
            src="/our-mission-pixel.png"
            alt="Pixel art about us"
            className="mx-auto rounded-xl border border-cyan-600 shadow-xl"
          />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: "📰",
            title: "News AI Channel",
            desc: "Real-time parsing, sentiment detection and translation of news events."
          },
          {
            icon: "📊",
            title: "Indicators & Strategies",
            desc: "AI models trained on top trades. Impulse/fractal-based logic."
          },
          {
            icon: "📱",
            title: "Telegram Web App",
            desc: "Staking, tokens, demo-deposits. Connect and earn in one tap."
          }
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-[#1a1a40] border border-cyan-600 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-cyan-500/20 transition"
          >
            <div className="text-4xl mb-3">{card.icon}</div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">{card.title}</h3>
            <p className="text-gray-300 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-cyan-900">
        <p>© 2025 OmniEye. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Telegram</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Discord</a>
        </div>
      </footer>
    </div>
  );
}
