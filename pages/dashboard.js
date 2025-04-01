// pages/dashboard.js
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dashboard() {
  const [data, setData] = useState({
    price: null,
    signal: "hold",
    newsSentiment: "neutral",
    xBuzz: "low",
    news: [],
    exchangeData: null,
    walletBalance: null,
    tradingPlan: "Держать",
  });

  // Получение данных с Cloudflare Workers
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Основные данные (сигналы)
        const response = await fetch(
          "https://market-analytics.omnieye.workers.dev"
        ).then((res) => res.json());
        if (response.error) throw new Error(response.error);
        setData((prev) => ({ ...prev, ...response }));

        // Новости
        const newsResponse = await fetch(
          "https://market-analytics.omnieye.workers.dev/news"
        ).then((res) => res.json());
        if (newsResponse.error) throw new Error(newsResponse.error);
        setData((prev) => ({ ...prev, news: newsResponse }));

        // Данные с биржи
        const exchangeResponse = await fetch(
          "https://market-analytics.omnieye.workers.dev/exchange"
        ).then((res) => res.json());
        if (exchangeResponse.error) throw new Error(exchangeResponse.error);
        setData((prev) => ({ ...prev, exchangeData: exchangeResponse }));

        // Баланс кошелька
        const walletResponse = await fetch(
          "https://market-analytics.omnieye.workers.dev/wallet?address=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
        ).then((res) => res.json());
        if (walletResponse.error) throw new Error(walletResponse.error);
        setData((prev) => ({ ...prev, walletBalance: walletResponse.balance }));
      } catch (error) {
        console.error("Ошибка загрузки данных:", error.message);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Обновление каждые 30 секунд
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050516] to-[#0f0f2d] text-white font-mono">
      {/* Навигация */}
      <header className="bg-[#050516] p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-cyan-400">
              Omni<span className="text-cyan-300">Eye</span>
            </a>
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

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12"
        >
          Твой Трейдинг Дашборд
        </motion.h1>

        {/* Модуль сигналов */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 p-6 bg-[#1a1a40] border border-cyan-600 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Сигналы (BTC/USD)</h2>
          <p className="text-lg">
            Цена: <span className="font-bold">{data.price || "Загрузка..."} USD</span>
          </p>
          <p className="text-lg">
            Сигнал:{" "}
            <span
              className={`font-bold ${
                data.signal === "buy"
                  ? "text-green-400"
                  : data.signal === "sell"
                  ? "text-red-400"
                  : "text-gray-400"
              }`}
            >
              {data.signal.toUpperCase()}
            </span>
          </p>
          <p className="text-gray-300">Sentiment новостей: {data.newsSentiment}</p>
          <p className="text-gray-300">Социальная активность: {data.xBuzz}</p>
        </motion.section>

        {/* Модуль новостей */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 p-6 bg-[#1a1a40] border border-cyan-600 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Последние новости</h2>
          <ul className="space-y-3">
            {data.news.length > 0 ? (
              data.news.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {article.title}
                  </a>{" "}
                  <span className="text-gray-400">({article.sentiment})</span>
                </li>
              ))
            ) : (
              <p className="text-gray-400">Загрузка новостей...</p>
            )}
          </ul>
        </motion.section>

        {/* Модуль бирж */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 p-6 bg-[#1a1a40] border border-cyan-600 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Данные с биржи</h2>
          {data.exchangeData ? (
            <p className="text-gray-300">
              Баланс: {data.exchangeData[0]?.free || "0"} BTC (заглушка, нужен API-ключ)
            </p>
          ) : (
            <p className="text-gray-400">Данные недоступны без API-ключа</p>
          )}
        </motion.section>

        {/* Модуль кошельков */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-10 p-6 bg-[#1a1a40] border border-cyan-600 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Баланс кошелька</h2>
          {data.walletBalance !== null ? (
            <p className="text-gray-300">Баланс: {data.walletBalance} BTC</p>
          ) : (
            <p className="text-gray-400">Загрузка...</p>
          )}
        </motion.section>

        {/* Модуль торговых рекомендаций */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-10 p-6 bg-[#1a1a40] border border-cyan-600 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Торговый план</h2>
          <p className="text-gray-300">{data.tradingPlan}</p>
        </motion.section>
      </div>

      {/* Футер */}
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