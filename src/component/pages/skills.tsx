"use client";
import { motion } from "framer-motion";
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiNextdotjs, SiBootstrap, SiTypescript } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const skills = [
  { name: "React.js", level: 100, icon: SiReact, color: "bg-blue-600" },
  { name: "HTML & CSS", level: 100, icon: SiHtml5, color: "bg-orange-500" },
  { name: "JavaScript", level: 80, icon: SiJavascript, color: "bg-yellow-400" },
  { name: "Tailwind CSS", level: 100, icon: SiTailwindcss, color: "bg-teal-500" },
  { name: "shadcn/ui", level: 85, icon: FaCode, color: "bg-purple-600" },
  { name: "Next.js", level: 85, icon: SiNextdotjs, color: "bg-gray-800" },
  { name: "Bootstrap", level: 100, icon: SiBootstrap, color: "bg-purple-500" },
  { name: "TypeScript", level: 100, icon: SiTypescript, color: "bg-blue-900" },
];

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
      {/* هدر */}
   <motion.h1
  className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent leading-snug break-words"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
 مهارت های من
</motion.h1>

      {/* کارت مهارت‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-2xl p-6 shadow-lg flex flex-col gap-4 hover:scale-105 transition-transform"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <div className="flex items-center gap-4">
                <Icon className="text-3xl" />
                <h3 className="font-bold text-xl">{skill.name}</h3>
              </div>

              {/* نوار مهارت */}
              <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden">
                <motion.div
                  className={`${skill.color} h-4 rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                ></motion.div>
              </div>
              <p className="text-right font-semibold">{skill.level}%</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
