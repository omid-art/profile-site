"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import skillsData from "@/database/db.json";
import {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

const iconsMap: Record<string, React.ElementType> = {
  SiReact,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiTypescript,
  FaCode,
};

const skills = skillsData.skills;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16" dir="rtl">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent leading-snug"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        مهارت‌ های من 💪
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const Icon =
            iconsMap[skill.icon as keyof typeof iconsMap] || FaCode;

          return (
            <Link key={skill.id} href={`/skills/${skill.id}`}>
              <motion.div
                className="rounded-2xl p-6 shadow-lg flex flex-col gap-4 hover:scale-105 transition-transform border border-gray-200 dark:border-gray-800"
                style={{
                  backgroundColor: skill.light,
                  boxShadow: `0px 8px 20px ${skill.primary}33`,
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-xl shadow-md"
                    style={{ backgroundColor: skill.primary }}
                  >
                    <Icon className="text-white text-3xl" />
                  </div>
                  <h3
                    className="font-bold text-xl"
                    style={{ color: skill.primary }}
                  >
                    {skill.name}
                  </h3>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {skill.description}
                </p>

                <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden mt-2">
                  <motion.div
                    className="h-4 rounded-full"
                    style={{ backgroundColor: skill.primary }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  ></motion.div>
                </div>
                <p className="text-right font-semibold text-gray-600">
                  سطح مهارت: {skill.level}%
                </p>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
