"use client";

import { motion, Variants } from "framer-motion";
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
import { useTheme } from "@/context/ThemeContext";

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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Skills() {
  const { darkMode } = useTheme();

  return (
    <div
      dir="rtl"
      className={`min-h-screen px-4 sm:px-6 py-12 sm:py-16 transition-colors duration-700 ease-in-out ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 leading-snug transition-colors duration-500"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        مهارت‌ های من 💪
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skills.map((skill, index) => {
          const Icon =
            iconsMap[skill.icon as keyof typeof iconsMap] || FaCode;

          return (
            <Link key={skill.id} href={`/skills/${skill.id}`}>
              <motion.div
                className="
                  rounded-2xl 
                  p-5 sm:p-6 
                  shadow-lg 
                  flex 
                  flex-col 
                  gap-4 
                  hover:scale-105 
                  transition-transform 
                  border 
                  border-gray-200
                "
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
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className="p-2 sm:p-3 rounded-xl shadow-md flex items-center justify-center min-w-[50px]"
                    style={{ backgroundColor: skill.primary }}
                  >
                    <Icon className="text-white text-2xl sm:text-3xl" />
                  </div>
                  <h3
                    className="font-bold text-lg sm:text-xl"
                    style={{ color: skill.primary }}
                  >
                    {skill.name}
                  </h3>
                </div>

                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  } text-sm sm:text-base`}
                >
                  {skill.description}
                </p>

                <div className="w-full bg-gray-300 h-3 sm:h-4 rounded-full overflow-hidden mt-2">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.primary }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  ></motion.div>
                </div>

                <p
                  className={`text-right font-semibold text-xs sm:text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
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
