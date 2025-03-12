"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ポートフォリオサイト",
      description: "Next.js、Tailwind CSS、Framer Motionを使用して作成したポートフォリオサイト。",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=ポートフォリオサイト"
    },
    {
      id: 2,
      title: "ECサイト",
      description: "オンラインショッピングのためのECサイト。商品一覧、詳細ページ、カート機能を実装。",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=ECサイト"
    },
    {
      id: 3,
      title: "SNSアプリ",
      description: "リアルタイムメッセージング機能を持つSNSアプリケーション。",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=SNSアプリ"
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
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
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
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h2>
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
              <motion.button
                className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                詳細を見る
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 