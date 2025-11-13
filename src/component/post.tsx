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
import Image from "next/image";
import DarkVeil from "@/component/react-bits/DarkVeil";

const cards = [
  {
    title: "درباره من",
    desc: "آشنایی کوتاه با من و مسیر یادگیری‌ ام.",
    icon: UserIcon,
    url: "/about-me",
    color: "bg-gradient-to-r from-orange-500 to-amber-600",
  },
  {
    title: "ارتباط با من",
    desc: "از طریق ایمیل و شبکه‌های اجتماعی در دسترس هستم.",
    icon: PhoneIcon,
    url: "/conect-me",
    color: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "مهارت‌ ها",
    desc: "تخصص من در React, Next.js, Tailwind و TypeScript.",
    icon: CodeBracketIcon,
    url: "/skills",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
  },
  {
    title: "پروژه‌ ها",
    desc: "نمونه‌ کار های واقعی و پروژه‌های انجام شده من. با react , next",
    icon: FolderIcon,
    url: "/project",
    color: "bg-gradient-to-r from-purple-600 to-violet-700",
  },
  {
    title: "مقالات",
    desc: "یادداشت‌ ها و مقالاتی که نوشتم.",
    icon: DocumentTextIcon,
    url: "/article",
    color: "bg-gradient-to-r from-red-500 to-pink-600",
  }
];

export default function HomePage() {
  const [text, setText] = useState("");
  const fullText =
    "سلام 👋 من امید پورباقر هستم، توسعه‌  دهنده فرانت‌ اند و عاشق خلق رابط‌ های کاربری زیبا و تمیز.";

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
    <div className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-gray-900 text-white transition-colors duration-700">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <DarkVeil
          hueShift={30}
          noiseIntensity={0.05}
          scanlineIntensity={0.1}
          speed={0.6}
          scanlineFrequency={5}
          warpAmount={0.1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Header Section */}
        <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-12 md:py-20 text-center md:text-left">
          <motion.div
            className="flex-1 space-y-4 sm:space-y-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              <motion.span
                className="block"
                animate={{
                  color: [
                    "#60A5FA","#3B82F6","#6366F1","#8B5CF6","#A855F7",
                    "#EC4899","#F43F5E","#F97316","#FACC15","#4ADE80",
                    "#06B6D4","#60A5FA",
                  ],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Omid Pourbagher
              </motion.span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-light min-h-[60px] text-gray-300">
              {text}
            </p>

            <p className="text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed text-gray-300">
              من عاشق خلق رابط‌ های کاربری تمیز، سریع و مدرن هستم. تمرکزم روی
              توسعه‌ی فرانت‌اند با React و Next.js و طراحی تجربه‌ های کاربری
              خلاقانه‌ ست.
            </p>

            <motion.button
              onClick={scrollToCards}
              className="mt-8 relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold shadow-md transition duration-300 flex items-center justify-center gap-2 mx-auto md:mx-0 bg-purple-700 hover:bg-purple-600 text-white shadow-purple-900/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              مشاهده ادامه
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDownIcon className="w-5 h-5" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* تصویر پروفایل */}
          <motion.div
            className="flex-1 flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-purple-800">
              <Image
                src="/picProfile.jpg"
                alt="Omid Pourbagher"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-16 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 leading-snug text-white">
            مهارت‌ ها و ابزار هایی که با عشق استفاده می‌ کنم
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {[
              { name: "React.js", color: "bg-blue-600" },
              { name: "Next.js", color: "bg-gray-700" },
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
                className={`px-3 sm:px-5 py-2 sm:py-3 rounded-full ${skill.color} text-white text-xs sm:text-sm md:text-base font-medium shadow-md hover:scale-105 transition-all`}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cards Section */}
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
                className={`hover:shadow-2xl hover:scale-[1.03] transition-all rounded-2xl p-5 sm:p-8 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 cursor-pointer ${card.color}`}
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
    </div>
  );
}
