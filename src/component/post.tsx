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

const cards = [
  {
    title: "ارتباط با من",
    desc: "از طریق ایمیل و شبکه‌های اجتماعی در دسترس هستم.",
    icon: PhoneIcon,
    url: "/conect-me",
    color: "bg-blue-600",
  },
  {
    title: "مهارت‌ها",
    desc: "تخصص من در React, Next.js, Tailwind و TypeScript.",
    icon: CodeBracketIcon,
    url: "/skills",
    color: "bg-green-600",
  },
  {
    title: "پروژه‌ها",
    desc: "نمونه‌کارهای واقعی و پروژه‌های انجام شده من.",
    icon: FolderIcon,
    url: "/project",
    color: "bg-purple-600",
  },
  {
    title: "مقالات",
    desc: "یادداشت‌ها و مقالاتی که نوشتم.",
    icon: DocumentTextIcon,
    url: "/article",
    color: "bg-red-600",
  },
  {
    title: "درباره من",
    desc: "آشنایی کوتاه با من و مسیر یادگیری‌ام.",
    icon: UserIcon,
    url: "/about-me",
    color: "bg-orange-600",
  },
];

export default function HomePage() {
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
    <div className="w-full min-h-screen bg-white text-gray-900 flex flex-col items-center overflow-hidden">
      
      {/* =============== HERO SECTION =============== */}
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        {/* متن معرفی */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            <span className="block">Omid Pourbagher</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-light min-h-[60px]">
            {text}
          </p>

          <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
            من عاشق خلق رابط‌های کاربری تمیز، سریع و مدرن هستم.  
            تمرکزم روی توسعه‌ی فرانت‌اند با React و Next.js و طراحی تجربه‌های کاربری خلاقانه‌ست.
          </p>

          {/* 🔥 دکمه شیشه‌ای با فلش متحرک */}
          <motion.button
            onClick={scrollToCards}
            className="mt-8 relative px-10 py-4 rounded-full borde backdrop-blur-md bg-black text-white hover:bg-teal-800  hover:shadow-2xs font-semibold shadow-md transition duration-300 flex items-center gap-2 mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            مشاهده ادامه
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDownIcon className="w-5 h-5 text-white hover:text-teal-950" />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* تصویر کناری */}
        <motion.div
          className="flex-1 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-purple-100">
            <img
              src="/picProfile.jpg"
              alt="Omid Pourbagher"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* =============== SKILLS SECTION =============== */}
      <section className="w-full py-16 px-6 md:px-16 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          مهارت‌ها و ابزارهایی که با عشق استفاده می‌کنم
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
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
              className={`px-6 py-3 rounded-full ${skill.color} text-white font-medium shadow-md hover:scale-105 transition-all`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* =============== CARDS SECTION =============== */}
      <section
        id="cards"
        className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-12 mb-20"
      >
        {cards.map((card, i) => (
          <Link href={card.url} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`${card.color} text-white hover:shadow-2xl hover:scale-[1.03] transition-all rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 cursor-pointer`}
            >
              <div className="p-3 bg-white/20 rounded-full">
                <card.icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-sm opacity-90">{card.desc}</p>
            </motion.div>
          </Link>
        ))}
      </section>
    </div>
  );
}
