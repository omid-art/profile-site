"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import articlesData from "@/database/db.json";
import { useTheme } from "@/context/ThemeContext"; 

interface Article {
  id: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  readTime: string;
}

interface ArticleCarouselProps {
  data: Article[];
  darkMode?: boolean;
}

function ArticleCarousel({ data, darkMode = false }: ArticleCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const prev = () => {
    setDirection("left");
    setIndex((i) => (i - 1 + data.length) % data.length);
  };
  const next = () => {
    setDirection("right");
    setIndex((i) => (i + 1) % data.length);
  };

  const visibleArticles = [
    data[index],
    data[(index + 1) % data.length],
    data[(index + 2) % data.length],
  ];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* دکمه‌های چپ و راست */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full shadow-lg hover:bg-black transition z-20 md:p-3 sm:p-2 sm:text-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full shadow-lg hover:bg-black transition z-20 md:p-3 sm:p-2 sm:text-sm"
      >
        <ChevronRight size={20} />
      </button>

      <div className="flex items-center justify-center gap-6 relative h-64 sm:h-56 md:h-64">
        {visibleArticles.map((article, i) => {
          const isCenter = i === 1;
          const xOffset = i === 0 ? -280 : i === 1 ? 0 : 280;

          return (
            <motion.div
              key={article.id}
              className={`rounded-2xl shadow-xl overflow-hidden w-64 sm:w-52 md:w-64 cursor-pointer absolute ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
              style={{ zIndex: isCenter ? 10 : 5 }}
              initial={{
                x: direction === "left" ? -100 : 100,
                opacity: 0.5,
                scale: 0.95,
              }}
              animate={{
                x: xOffset,
                scale: isCenter ? 1.15 : 0.95,
                opacity: isCenter ? 1 : 0.8,
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <Link href={`/article/${article.id}`}>
                <div className="relative w-full h-40 sm:h-32 md:h-40 rounded-t-2xl overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gray-100 transition-colors duration-500 shadow-2xl">
                  <h3 className="font-bold text-lg sm:text-base md:text-lg mb-2 text-gray-900">
                    {article.title}
                  </h3>
                  <p className="text-sm sm:text-xs md:text-sm line-clamp-2 text-gray-800">
                    {article.desc}
                  </p>
                  <div className="mt-3 text-xs sm:text-[10px] md:text-xs flex justify-between text-gray-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// صفحه‌ی اصلی مقالات
export default function ArticlesClient() {
  const { darkMode } = useTheme(); 
  const categories = articlesData.articles;

  type CategoryKey = keyof typeof categories; 
  const categoryKeys = Object.keys(categories) as CategoryKey[];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-700 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.h1
          className={`text-4xl md:text-5xl font-bold text-center mb-12 leading-snug break-words ${
            darkMode
              ? "text-white"
              : "bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent"
          }`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          مقالات و تجربه‌ های من
        </motion.h1>

        {categoryKeys.map((cat, idx) => (
          <div key={idx} className="mb-16">
            <h2
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {cat}
            </h2>
            <ArticleCarousel data={categories[cat]} darkMode={darkMode} />
          </div>
        ))}
      </div>
    </div>
  );
}
