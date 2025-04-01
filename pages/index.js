import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "OmniEye — AI Trading Platform";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#1f1f3a] text-white font-mono">
      {/* Hero Section */}
      <div className="text-center py-24 px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"
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

      {/* Features Section */}
      <div id="features" className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Новостной AI-канал",
            desc: "Автоматический парсинг новостей, перевод и определение сентимента."
          },
          {
            title: "Индикаторы и стратегии",
            desc: "AI-модели, обученные на твоих лучших сделках. Поддержка импульсов и фракталов."
          },
          {
            title: "Telegram Web App",
            desc: "Демо-депозиты, доход в токенах, авторизация через Telegram."
          }
        ].map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-[#23234a] border border-cyan-500 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">{card.title}</h3>
            <p className="text-gray-300">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* About Section */}
      <div className="bg-[#14142b] py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          О нас
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          Мы создаём инструменты нового поколения для трейдеров, используя искусственный интеллект, визуальную аналитику и автономные модели.
        </p>
        <div className="mt-10">
          <img
            src="/our-mission-pixel.png"
            alt="Pixel art about us"
            className="mx-auto rounded-xl border border-cyan-500 shadow-xl"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>© 2025 OmniEye. Все права защищены.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Telegram</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Discord</a>
        </div>
      </footer>
    </div>
  );
}
