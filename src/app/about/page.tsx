"use client";

import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto"
    >
      <motion.h1 
        variants={item}
        className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
      >
        自己紹介
      </motion.h1>

      <motion.div 
        variants={item}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">プロフィール</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          こんにちは、Gezzziです。ウェブ開発者として活動しています。Next.js、React、TypeScriptを使ったフロントエンド開発を専門としています。
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          ユーザー体験を最優先に考え、美しく機能的なウェブアプリケーションの開発に情熱を注いでいます。
        </p>
      </motion.div>

      <motion.div 
        variants={item}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">スキル</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'].map((skill) => (
            <motion.div 
              key={skill}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={item}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">趣味</h2>
        <p className="text-gray-700 dark:text-gray-300">
          プログラミング以外では、読書、旅行、写真撮影を楽しんでいます。新しい技術を学ぶことも大好きです。
        </p>
      </motion.div>
    </motion.div>
  );
} 