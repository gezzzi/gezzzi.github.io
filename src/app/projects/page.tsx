"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ブログサイト",
      description: "副業の始め方、稼ぎ方などを解説するブログサイト。仮想通貨やAI活用など最新の副業情報も提供しています。",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      image: "/blog-project.jpg",
      url: "https://blog.techstepsite.com/"
    },
    {
      id: 2,
      title: "画像圧縮アプリ",
      description: "オンラインで簡単に画像を圧縮できるツール。品質を保ちながらファイルサイズを最適化します。",
      tech: ["Next.js", "Shadcn UI", "Vercel", "browser-image-compression"],
      image: "/image-compression-project.webp",
      url: "https://image-compression.techstepsite.com/"
    },
    {
      id: 3,
      title: "性格診断アプリ",
      description: "質問に答えることで性格タイプを診断できるインタラクティブなウェブアプリケーション。",
      tech: ["Next.js", "Shadcn UI", "Framer Motion", "Vercel", "anthropic-sdk"],
      image: "/personality-test-project.webp",
      url: "https://personality-analysis.techstepsite.com/"
    },
  ];

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
    <div className="max-w-6xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
      >
        プロジェクト
      </motion.h1>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
            whileHover={{ y: -5 }}
          >
            <div className="relative w-full h-48">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 text-center">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.div className="text-center mt-auto">
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  サイトを見る
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 