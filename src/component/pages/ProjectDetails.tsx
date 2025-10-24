"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Gitlab } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  image: string;
  duration: string;
  price: string;
  difficulty: number;
  github: string;
  linkedin: string;
  gitlab: string;
}

interface ProjectDetailsProps {
  projectId: string;
}

export default function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme(); // 💡 تم سراسری

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:5000/projects/${projectId}`);
        if (!res.ok) throw new Error("پروژه پیدا نشد");
        const data: Project = await res.json();
        setProject(data);
      } catch (error) {
        console.error("❌ خطا در دریافت پروژه:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  if (loading)
    return (
      <motion.div
        className="text-center text-gray-600 dark:text-gray-300 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        در حال بارگذاری...
      </motion.div>
    );

  if (!project)
    return (
      <motion.div
        className="text-center text-gray-600 dark:text-gray-300 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        پروژه‌ای پیدا نشد 😕
      </motion.div>
    );

  // ✨ رنگ پس‌زمینه صفحه با transition نرم
  const bgPage = darkMode ? "bg-gray-950" : "bg-gray-50";
  const transitionStyle = "transition-all duration-700 ease-in-out";

  // 🎨 کارت اصلی پروژه
  const cardBg = darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900";

  // 🎨 دکمه بازگشت
  const buttonStyle = darkMode
    ? "bg-violet-600 hover:bg-violet-700 text-white"
    : "bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-900 hover:to-gray-600 text-white";

  return (
    <motion.div
      className={`relative min-h-screen w-full py-12 sm:py-16 px-4 sm:px-6 flex flex-col lg:flex-row-reverse gap-10 lg:gap-8 ${bgPage} ${transitionStyle}`}
      dir="rtl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ---------- ستون باکس‌های اطلاعات ---------- */}
      <div className="flex flex-row lg:flex-col justify-between gap-4 w-full lg:w-44">
        <div className="bg-sky-200 rounded-2xl p-4 text-center shadow-lg flex-1 flex flex-col justify-center transition-all duration-500">
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-1">⏱ مدت زمان</p>
          <p className="text-base font-semibold">{project.duration}</p>
        </div>

        <div className="bg-amber-200 rounded-2xl p-4 text-center shadow-lg flex-1 flex flex-col justify-center transition-all duration-500">
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-1">💰 مبلغ</p>
          <p className="text-base font-semibold">{project.price}</p>
        </div>

        <div className="bg-violet-200 rounded-2xl p-4 text-center shadow-lg flex-1 flex flex-col justify-center transition-all duration-500">
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">💪 سختی پروژه</p>
          <div className="w-full bg-violet-300 h-2 rounded-full overflow-hidden">
            <div
              className="bg-violet-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${project.difficulty}%` }}
            ></div>
          </div>
          <p className="text-sm mt-1 text-gray-700 dark:text-gray-200">{project.difficulty}%</p>
        </div>
      </div>

      {/* ---------- محتوای اصلی پروژه ---------- */}
      <motion.div
        className={`flex-1 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 ${cardBg} ${transitionStyle}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ---------- هدر ---------- */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{project.title}</h1>
          <Link
            href="/project"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm sm:text-base transition ${buttonStyle} ${transitionStyle}`}
          >
            ← بازگشت
          </Link>
        </div>

        {/* ---------- محتوا ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* تصویر پروژه */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl group transition-all duration-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[240px] sm:h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg sm:text-xl font-semibold">
              {project.title}
            </div>
          </motion.div>

          {/* توضیحات */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className={`text-sm sm:text-base leading-relaxed mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              } ${transitionStyle}`}
            >
              {project.desc}
            </p>

            {/* تکنولوژی‌ها */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {project.tech?.map((t: string, i: number) => (
                <span
                  key={i}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm ${
                    darkMode
                      ? "bg-gray-800 text-white"
                      : "bg-black text-white shadow-md"
                  } ${transitionStyle}`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* لینک‌ها */}
            <div className="flex gap-4 sm:gap-6">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                <Github size={26} className="sm:size-[30px]" />
              </Link>
              <Link
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Linkedin size={26} className="sm:size-[30px]" />
              </Link>
              <Link
                href={project.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <Gitlab size={26} className="sm:size-[30px]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
