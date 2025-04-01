// pages/index.js
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    document.title = "OmniEye — Vision Intelligence for Traders";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050516] to-[#0f0f2d] text-white font-mono">
      {/* Хедер с навигацией */}
      <header className="bg-[#050516] p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-cyan-400">Omni<span className="text-cyan-300">Eye</span></a>
          </Link>
          <nav>
            <Link href="/">
              <a className="text-gray-300 mr-4 hover:text-white">Главная</a>
            </Link>
            <Link href="/dashboard">
              <a className="text-gray-300 hover:text-white">Дашборд</a>
            </Link>
          </nav>
        </div>
      </header>

      {/* Герой-секция */}
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
          Молниеносная аналитика для трейдеров: сигналы, новости, биржи — всё в реальном времени с Edge Computing.
        </p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/dashboard">
            <a className="inline-block mt-10 px-6 py-3 bg-cyan-500 text-white rounded-xl shadow hover:bg-cyan-600 transition font-semibold">
              Попробовать Дашборд
            </a>
          </Link>
        </motion.div>
      </div>

{/* About Section */}
<div className="py-24 px-6 text-center bg-[#0b0b25]">
  <img
    src="/assets/about-us-pixel.png"
    alt="О нас — OmniEye"
    className="mx-auto rounded-xl border border-cyan-600 shadow-xl"
  />
</div>


      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: "📈",
            title: "Сигналы в реальном времени",
            desc: "Рекомендации 'покупай/продавай' для BTC, ETH и других активов за 20-50 мс.",
          },
          {
            icon: "📰",
            title: "Анализ новостей и X",
            desc: "Sentiment-анализ новостей и активности в X для понимания настроения рынка.",
          },
          {
            icon: "💱",
            title: "Интеграция с биржами",
            desc: "Подключай Binance, Kraken, Coinbase и следи за своими активами.",
          },
          {
            icon: "💸",
            title: "Баланс кошельков",
            desc: "Проверяй баланс своих криптокошельков в одном месте.",
          },
          {
            icon: "📝",
            title: "Торговые планы",
            desc: "Персонализированные рекомендации на основе твоего стиля торговли.",
          },
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

      {/* Why OmniEye Section */}
      <div className="py-20 px-6 bg-[#0b0b25] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Почему OmniEye?</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Скорость</h3>
            <p className="text-gray-400">
              Edge Computing сокращает задержку в 5 раз: 20-50 мс вместо 200-300 мс.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Точность</h3>
            <p className="text-gray-400">
              Анализ данных с бирж, новостей и X для точных торговых сигналов.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Простота</h3>
            <p className="text-gray-400">
              Все инструменты в одном месте — от сигналов до управления активами.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Готовы начать?
        </motion.h2>
        <p className="text-xl text-gray-300 mb-8">
          Попробуйте OmniEye и получите преимущество на рынке уже сегодня.
        </p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/dashboard">
            <a className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-xl shadow hover:bg-cyan-600 transition font-semibold">
              Перейти к Дашборду
            </a>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 text-sm border-t border-cyan-900">
        <p>© 2025 OmniEye. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Telegram</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Discord</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </footer>
    </div>
  );
}