"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  FolderIcon,
  UserIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext"; // 👈 اضافه شد

const cards = [
  {
    title: "ارتباط با من",
    desc: "از طریق ایمیل و شبکه‌های اجتماعی در دسترس هستم.",
    icon: PhoneIcon,
    url: "/conect-me",
    color: "bg-gradient-to-r from-blue-500 to-blue-700",
    darkColor: "bg-gradient-to-r from-gray-800 to-gray-700",
  },
  {
    title: "مهارت‌ها",
    desc: "تخصص من در React, Next.js, Tailwind و TypeScript.",
    icon: CodeBracketIcon,
    url: "/skills",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
    darkColor: "bg-gradient-to-r from-gray-700 to-gray-800",
  },
  {
    title: "پروژه‌ها",
    desc: "نمونه‌کارهای واقعی و پروژه‌های انجام شده من.",
    icon: FolderIcon,
    url: "/project",
    color: "bg-gradient-to-r from-purple-600 to-violet-700",
    darkColor: "bg-gradient-to-r from-gray-700 to-gray-800",
  },
  {
    title: "مقالات",
    desc: "یادداشت‌ها و مقالاتی که نوشتم.",
    icon: DocumentTextIcon,
    url: "/article",
    color: "bg-gradient-to-r from-red-500 to-pink-600",
    darkColor: "bg-gradient-to-r from-gray-700 to-gray-800",
  },
  {
    title: "درباره من",
    desc: "آشنایی کوتاه با من و مسیر یادگیری‌ام.",
    icon: UserIcon,
    url: "/about-me",
    color: "bg-gradient-to-r from-orange-500 to-amber-600",
    darkColor: "bg-gradient-to-r from-gray-700 to-gray-800",
  },
];

export default function HomePage() {
  const { darkMode } = useTheme(); // 👈 از Context گرفتیم

  const [text, setText] = useState("");
  const fullText =
    "سلام 👋 من امید پورباقر هستم، توسعه‌دهنده فرانت‌اند و عاشق خلق رابط‌های کاربری زیبا و تمیز.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const scrollToCards = () => {
    const cardsSection = document.getElementById("cards");
    cardsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center overflow-hidden transition-colors duration-700
        ${
          darkMode
            ? "bg-gradient-to-b from-gray-900 to-black text-white"
            : "bg-gradient-to-b from-white to-gray-100 text-gray-900"
        }`}
    >
      {/* HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-12 md:py-20 text-center md:text-left">
        <motion.div
          className="flex-1 space-y-4 sm:space-y-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="block bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Omid Pourbagher
            </span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl font-light min-h-[60px] ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {text}
          </p>

          <p
            className={`text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            من عاشق خلق رابط‌های کاربری تمیز، سریع و مدرن هستم.  
            تمرکزم روی توسعه‌ی فرانت‌اند با React و Next.js و طراحی تجربه‌های کاربری خلاقانه‌ست.
          </p>

          <motion.button
            onClick={scrollToCards}
            className={`mt-8 relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full backdrop-blur-md font-semibold shadow-md transition duration-300 flex items-center justify-center gap-2 mx-auto md:mx-0 ${
              darkMode
                ? "bg-purple-700 hover:bg-purple-600 text-white shadow-purple-900/40"
                : "bg-purple-500 hover:bg-purple-600 text-white shadow-purple-300/40"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            مشاهده ادامه
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDownIcon className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* تصویر کناری */}
        <motion.div
          className="flex-1 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div
            className={`relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 ${
              darkMode ? "border-purple-800" : "border-purple-200"
            }`}
          >
            <img
              src="/picProfile.jpg"
              alt="Omid Pourbagher"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section
        className={`w-full py-12 sm:py-16 px-4 sm:px-6 md:px-16 text-center transition-colors duration-700 ${
          darkMode ? "bg-gray-800/60" : "bg-gray-50"
        }`}
      >
        <h2
          className={`text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 leading-snug ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          مهارت‌ها و ابزارهایی که با عشق استفاده می‌کنم
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {[
            { name: "React.js", color: "bg-blue-600" },
            { name: "Next.js", color: "bg-gray-800" },
            { name: "TypeScript", color: "bg-sky-600" },
            { name: "Tailwind CSS", color: "bg-teal-600" },
            { name: "Redux Toolkit", color: "bg-purple-600" },
            { name: "Framer Motion", color: "bg-pink-600" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`px-3 sm:px-5 py-2 sm:py-3 rounded-full ${
                skill.color
              } text-white text-xs sm:text-sm md:text-base font-medium shadow-md hover:scale-105 transition-all`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CARDS SECTION */}
      <section
        id="cards"
        className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 p-4 sm:p-8 md:p-12 mb-16 sm:mb-20"
      >
        {cards.map((card, i) => (
          <Link href={card.url} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`hover:shadow-2xl hover:scale-[1.03] transition-all rounded-2xl p-5 sm:p-8 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 cursor-pointer ${
                darkMode ? card.darkColor : card.color
              }`}
            >
              <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                <card.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                {card.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          </Link>
        ))}
      </section>
    </div>
  );
}
