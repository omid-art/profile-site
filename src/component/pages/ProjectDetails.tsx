"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Gitlab } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  theme: "light" | "dark"; // نوبار اینو پاس می‌کنه
}

export default function ProjectDetails({
  projectId,
  theme,
}: ProjectDetailsProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

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

  const bgColorMain =
    theme === "dark"
      ? "bg-gray-900 text-white"
      : "bg-white text-gray-900";

  return (
    <div
      className={`relative max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 flex flex-col lg:flex-row-reverse gap-10 lg:gap-8 ${theme === "dark" ? "dark" : ""}`}
      dir="rtl"
    >
      {/* ---------- ستون باکس‌های اطلاعات ---------- */}
      <div className="flex flex-row lg:flex-col justify-between gap-4 w-full lg:w-44">
        {/* مدت زمان */}
        <div className="bg-sky-200 rounded-2xl p-4 sm:p-5 text-center shadow-lg flex-1 h-auto lg:h-48 flex flex-col justify-center">
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-1">⏱ مدت زمان</p>
          <p className="text-base sm:text-lg font-semibold">{project.duration}</p>
        </div>

        {/* مبلغ */}
        <div className="bg-amber-200 rounded-2xl p-4 sm:p-5 text-center shadow-lg flex-1 h-auto lg:h-48 flex flex-col justify-center">
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-1">💰 مبلغ</p>
          <p className="text-base sm:text-lg font-semibold">{project.price}</p>
        </div>

        {/* درجه سختی */}
        <div className="bg-violet-200 rounded-2xl p-4 sm:p-5 text-center shadow-lg flex-1 h-auto lg:h-48 flex flex-col justify-center">
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
        className={`flex-1 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 ${bgColorMain}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* هدر پروژه (عنوان + دکمه بازگشت) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{project.title}</h1>
          <Link
            href="/project"
            className="inline-flex items-center gap-2 bg-black text-white px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition text-sm sm:text-base"
          >
            ← بازگشت
          </Link>
        </div>

        {/* چیدمان دو ستونه */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* تصویر پروژه */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl group"
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

          {/* توضیحات پروژه */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              {project.desc}
            </p>

            {/* تکنولوژی‌ها */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {project.tech?.map((t: string, i: number) => (
                <span
                  key={i}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm ${
                    theme === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-black text-white"
                  }`}
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
    </div>
  );
}
