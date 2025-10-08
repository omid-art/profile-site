"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Linkedin, Gitlab, ArrowLeft } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "بست شاپ",
    desc: "فروش موبایل و لپ تاپ و وسایل الکترونیکی با طراحی مدرن و جذاب.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind",
      "shadcn",
      "TypeScript",
    ],
    image: "/pic1.jpg",
    github: "https://github.com/username/project1",
    linkedin: "https://linkedin.com/in/username",
    gitlab: "https://gitlab.com/username/project1",
  },
  {
    id: "2",
    title: "تودو لیست",
    desc: "اپلیکیشن مدیریت کارها با قابلیت فیلتر، حذف و دسته‌بندی.",
    tech: ["React.js", "Next.js", "Tailwind", "TypeScript"],
    image: "/pic2.jpg",
    github: "https://github.com/username/project2",
    linkedin: "https://linkedin.com/in/username",
    gitlab: "https://gitlab.com/username/project2",
  },
  {
    id: "3",
    title: "بلاگ شخصی",
    desc: "وبلاگ حرفه‌ای برای انتشار مقالات و پست‌های آموزشی.",
    tech: ["Next.js", "Tailwind", "shadcn"],
    image: "/pic3.jpg",
    github: "https://github.com/username/project3",
    linkedin: "https://linkedin.com/in/username",
    gitlab: "https://gitlab.com/username/project3",
  },
  {
    id: "4",
    title: "فروشگاه مدرن",
    desc: "فروشگاه اینترنتی با رابط کاربری تمیز و فیلتر محصولات.",
    tech: ["React.js", "Redux", "Tailwind", "TypeScript"],
    image: "/pic4.jpg",
    github: "https://github.com/username/project4",
    linkedin: "https://linkedin.com/in/username",
    gitlab: "https://gitlab.com/username/project4",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 text-2xl text-gray-600">
        پروژه مورد نظر پیدا نشد 😢
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16" dir="rtl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        بازگشت به پروژه‌ها
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-6">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black transition-colors"
            >
              <Github size={26} />
            </Link>
            <Link
              href={project.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={26} />
            </Link>
            <Link
              href={project.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              <Gitlab size={26} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
