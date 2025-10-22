"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Gitlab } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectDetails({ projectId }: { projectId: string }) {
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:5000/projects/${projectId}`);
        if (!res.ok) throw new Error("پروژه پیدا نشد");
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error("❌ خطا در دریافت پروژه:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="text-center text-gray-600 mt-20">در حال بارگذاری...</div>
    );
  }

  if (!project) {
    return (
      <div className="text-center text-gray-600 mt-20">پروژه‌ای پیدا نشد 😕</div>
    );
  }

  return (
    <div
      className="relative max-w-7xl mx-auto py-16 px-6 flex flex-row-reverse gap-8"
      dir="rtl"
    >
      {/* ---------- ستون باکس‌های اطلاعات ---------- */}
      <div className="flex flex-col justify-between w-44 space-y-4">
        {/* مدت زمان */}
        <div className="bg-sky-200 rounded-2xl p-5 text-center shadow-lg h-48 flex flex-col justify-center">
          <p className="text-sm text-gray-700 mb-1">⏱ مدت زمان</p>
          <p className="text-lg font-semibold text-gray-900">
            {project.duration}
          </p>
        </div>

        {/* مبلغ */}
        <div className="bg-amber-200 rounded-2xl p-5 text-center shadow-lg h-48 flex flex-col justify-center">
          <p className="text-sm text-gray-700 mb-1">💰 مبلغ</p>
          <p className="text-lg font-semibold text-gray-900">{project.price}</p>
        </div>

        {/* درجه سختی */}
        <div className="bg-violet-200 rounded-2xl p-5 text-center shadow-lg h-48 flex flex-col justify-center">
          <p className="text-sm text-gray-700 mb-2">💪 سختی پروژه</p>
          <div className="w-full bg-violet-300 h-2 rounded-full overflow-hidden">
            <div
              className="bg-violet-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${project.difficulty}%` }}
            ></div>
          </div>
          <p className="text-sm mt-1 text-gray-700">{project.difficulty}%</p>
        </div>
      </div>

      {/* ---------- محتوای اصلی پروژه ---------- */}
      <motion.div
        className="flex-1 bg-white rounded-3xl shadow-2xl overflow-hidden p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* هدر پروژه (عنوان + دکمه بازگشت) */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {project.title}
          </h1>
          <Link
            href="/project"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            ← بازگشت
          </Link>
        </div>

        {/* چیدمان دو ستونه */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-xl font-semibold">
              {project.title}
            </div>
          </motion.div>

          {/* توضیحات پروژه */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              {project.desc}
            </p>

            {/* تکنولوژی‌ها */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech?.map((t: string, i: number) => (
                <span
                  key={i}
                  className="bg-black text-white px-4 py-1.5 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* لینک‌ها */}
            <div className="flex gap-6">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition"
              >
                <Github size={30} />
              </Link>
              <Link
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <Linkedin size={30} />
              </Link>
              <Link
                href={project.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
              >
                <Gitlab size={30} />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
