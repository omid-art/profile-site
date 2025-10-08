"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Article {
  title: string;
  desc: string;
  image: string;
  date: string;
  readTime: string;
}

interface ArticleCarouselProps {
  data: Article[];
}

// کامپوننت Carousel
function ArticleCarousel({ data }: ArticleCarouselProps) {
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

  // گرفتن 3 مقاله جاری
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
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white p-3 rounded-full shadow-lg hover:bg-black transition z-20"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white p-3 rounded-full shadow-lg hover:bg-black transition z-20"
      >
        <ChevronRight size={20} />
      </button>

      <div className="flex items-center justify-center gap-6 relative h-64">
        {visibleArticles.map((article, i) => {
          const isCenter = i === 1;
          const xOffset = i === 0 ? -280 : i === 1 ? 0 : 280;

          return (
            <motion.div
              key={article.title}
              className="bg-white rounded-2xl shadow-xl overflow-hidden w-64 cursor-pointer absolute"
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
              <img
                src={article.image}
                alt={article.title}
                className="h-40 w-full object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {article.desc}
                </p>
                <div className="mt-3 text-xs text-gray-400 flex justify-between">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// داده‌های همه‌ی دسته‌بندی‌ها
const categories: Record<string, Article[]> = {
  JavaScript: [
    {
      title: "شروع جاوااسکریپت",
      desc: "نکات پایه‌ای برای شروع یادگیری جاوااسکریپت.",
      image: "/pic1.jpg",
      date: "1404/07/01",
      readTime: "5 دقیقه",
    },
    {
      title: "توابع در جاوااسکریپت",
      desc: "همه‌چیز درباره فانکشن‌ها.",
      image: "/pic2.jpg",
      date: "1404/07/02",
      readTime: "7 دقیقه",
    },
    {
      title: "DOM Manipulation",
      desc: "چطور با DOM کار کنیم؟",
      image: "/pic3.jpg",
      date: "1404/07/03",
      readTime: "6 دقیقه",
    },
    {
      title: "ES6 Features",
      desc: "ویژگی‌های مهم ES6.",
      image: "/pic4.jpg",
      date: "1404/07/04",
      readTime: "8 دقیقه",
    },
    {
      title: "Async Await",
      desc: "مدیریت کدهای async.",
      image: "/pic5.jpg",
      date: "1404/07/05",
      readTime: "10 دقیقه",
    },
  ],
  "HTML & CSS": [
    {
      title: "شروع HTML",
      desc: "توضیحات پایه‌ای برای HTML.",
      image: "/pic1.jpg",
      date: "1404/06/01",
      readTime: "5 دقیقه",
    },
    {
      title: "شروع CSS",
      desc: "استایل‌دهی اصولی.",
      image: "/pic2.jpg",
      date: "1404/06/02",
      readTime: "6 دقیقه",
    },
    {
      title: "Flexbox",
      desc: "راهنمای کامل Flexbox.",
      image: "/pic3.jpg",
      date: "1404/06/03",
      readTime: "8 دقیقه",
    },
    {
      title: "Grid",
      desc: "توضیحات Grid Layout.",
      image: "/pic4.jpg",
      date: "1404/06/04",
      readTime: "9 دقیقه",
    },
    {
      title: "Responsive Design",
      desc: "طراحی ریسپانسیو.",
      image: "/pic5.jpg",
      date: "1404/06/05",
      readTime: "7 دقیقه",
    },
  ],
  "React.js": [
    {
      title: "شروع React",
      desc: "اولین قدم‌ها در ری‌اکت.",
      image: "/pic1.jpg",
      date: "1404/05/01",
      readTime: "6 دقیقه",
    },
    {
      title: "کامپوننت‌ها",
      desc: "ساختاردهی با کامپوننت‌ها.",
      image: "/pic2.jpg",
      date: "1404/05/02",
      readTime: "7 دقیقه",
    },
    {
      title: "Props و State",
      desc: "چطور دیتا مدیریت کنیم؟",
      image: "/pic3.jpg",
      date: "1404/05/03",
      readTime: "9 دقیقه",
    },
    {
      title: "هوک‌ها",
      desc: "آشنایی با React Hooks.",
      image: "/pic4.jpg",
      date: "1404/05/04",
      readTime: "10 دقیقه",
    },
    {
      title: "ری‌اکت Router",
      desc: "مدیریت صفحات در ری‌اکت.",
      image: "/pic5.jpg",
      date: "1404/05/05",
      readTime: "12 دقیقه",
    },
  ],
  "Next.js": [
    {
      title: "شروع Next.js",
      desc: "قدم اول با Next.",
      image: "/pic1.jpg",
      date: "1404/04/01",
      readTime: "7 دقیقه",
    },
    {
      title: "File-based Routing",
      desc: "راوتینگ در Next.js.",
      image: "/pic2.jpg",
      date: "1404/04/02",
      readTime: "8 دقیقه",
    },
    {
      title: "SSR و SSG",
      desc: "تفاوت SSR و SSG.",
      image: "/pic3.jpg",
      date: "1404/04/03",
      readTime: "10 دقیقه",
    },
    {
      title: "API Routes",
      desc: "نوشتن API در Next.",
      image: "/pic4.jpg",
      date: "1404/04/04",
      readTime: "9 دقیقه",
    },
    {
      title: "Deployment",
      desc: "دیپلوی روی Vercel.",
      image: "/pic5.jpg",
      date: "1404/04/05",
      readTime: "11 دقیقه",
    },
  ],
  TypeScript: [
    {
      title: "شروع TypeScript",
      desc: "چرا TS مهمه؟",
      image: "/pic1.jpg",
      date: "1404/03/01",
      readTime: "6 دقیقه",
    },
    {
      title: "Types و Interfaces",
      desc: "مدیریت تایپ‌ها.",
      image: "/pic2.jpg",
      date: "1404/03/02",
      readTime: "7 دقیقه",
    },
    {
      title: "Generics",
      desc: "درک بهتر Generics.",
      image: "/pic3.jpg",
      date: "1404/03/03",
      readTime: "8 دقیقه",
    },
    {
      title: "Utility Types",
      desc: "انواع آماده TS.",
      image: "/pic4.jpg",
      date: "1404/03/04",
      readTime: "9 دقیقه",
    },
    {
      title: "TS در React",
      desc: "چطور TS رو با React استفاده کنیم.",
      image: "/pic5.jpg",
      date: "1404/03/05",
      readTime: "10 دقیقه",
    },
  ],
};

// صفحه اصلی مقالات
export default function ArticlesClient() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16" dir="rtl">
        <motion.h1
       className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent leading-snug break-words"
       initial={{ opacity: 0, y: 40 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
     >
      مقالات و تجربه‌های من
     </motion.h1>

      {Object.keys(categories).map((cat, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{cat}</h2>
          <ArticleCarousel data={categories[cat]} />
        </div>
      ))}
    </div>
  );
}
