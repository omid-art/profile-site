"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import skillsData from "@/database/db.json";
import { Link } from "lucide-react";

const SkillDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const skill = skillsData.skills.find((s) => s.id === Number(id));

  if (!skill)
    return <p className="text-center text-gray-600 mt-20">مهارت پیدا نشد 😢</p>;

  const Icon = (SiIcons as any)[skill.icon];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative"
      dir="rtl"
      style={{
        background: `linear-gradient(to bottom right, ${skill.light}, white)`,
      }}
    >
      {/* دکمه بازگشت */}
      <button
        onClick={() => router.push("/skills")}
        className="group mb-10 flex items-center gap-3 px-6 py-3 rounded-full font-bold shadow-lg text-gray-800 transition-all hover:scale-105 hover:shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${skill.primary}, #0000)`,
        }}
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        بازگشت به مهارت‌ها
      </button>

      <div className="relative flex flex-col md:flex-row items-start gap-10 w-full max-w-6xl">
        {/* باکس سمت چپ (داینامیک) */}
        {skill.boxLeft && (
          <motion.div
            className="hidden md:flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl p-6 w-64 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-bold text-lg mb-4">{skill.boxLeft.title}</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              {skill.boxLeft.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* کارت اصلی */}
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl flex-1 flex flex-col md:flex-row items-center gap-10 relative hover:shadow-3xl transition-shadow transform overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Icon
            className="absolute opacity-10 text-9xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
            style={{ color: skill.primary }}
          />

          <div
            className="p-8 rounded-full shadow-lg text-white flex items-center justify-center text-6xl z-10"
            style={{ backgroundColor: skill.primary }}
          >
            <Icon />
          </div>

          <div className="flex-1 flex flex-col gap-6 text-right z-10">
            <h1
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: skill.primary }}
            >
              {skill.name}
            </h1>

            <div className="flex gap-3">
              <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm font-semibold">
                Front-end
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm font-semibold">
                UI/UX
              </span>
            </div>

            <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative group">
              <motion.div
                className="h-5 rounded-full"
                style={{ backgroundColor: skill.primary }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5 }}
              />
              <span className="absolute -top-7 right-0 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-1 rounded-lg shadow-md transition-all">
                {skill.level === 100
                  ? "تسلط کامل"
                  : skill.level > 80
                  ? "تجربه زیاد"
                  : "تجربه متوسط"}
              </span>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              {skill.description}
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 font-semibold text-white px-6 py-3 rounded-xl transition-transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${skill.primary}, ${skill.primary}aa)`,
                boxShadow: `0 4px 15px ${skill.primary}55`,
              }}
            >
              مشاهده پروژه مرتبط
              <FaArrowRightLong className="text-xl" />
            </Link>
          </div>
        </motion.div>

        {/* باکس سمت راست (داینامیک) */}
        {skill.boxRight && (
          <motion.div
            className="hidden md:flex flex-col bg-white/90 backdrop-blur-lg rounded-2xl p-6 w-64 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-bold text-lg mb-4">{skill.boxRight.title}</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              {skill.boxRight.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SkillDetails;
