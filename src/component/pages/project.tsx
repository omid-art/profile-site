"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Gitlab } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext"; 

interface Project {
  id: number;
  title: string;
  desc: string;
  tech: string[];
  image: string;
  github: string;
  linkedin: string;
  gitlab: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "بست شاپ",
    desc: "فروش موبایل و لپ تاپ و وسایل الکترونیکی",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind", "shadcn", "TypeScript"],
    image: "/pic1.jpg",
    github: "https://github.com/username/project1",
    linkedin: "https://linkedin.com/in/username",
    gitlab: "https://gitlab.com/username/project1",
  },
  {
    id: 2,
    title: "تودو لیست",
    desc: "اپلیکیشن مدیریت کارها با امکان فیلتر و دسته‌بندی",
    tech: ["React.js", "Next.js", "Tailwind", "TypeScript"],
    image: "/pic2.jpg",
    github: "https://github.com/username/project2",
    linkedin: "https://linkedin.com/in/username",
    gitlab: "https://gitlab.com/username/project2",
  },
  {
    id: 3,
    title: "بلاگ شخصی",
    desc: "وبلاگ برای انتشار مقالات و نوشته‌های شخصی",
    tech: ["Next.js", "Tailwind", "shadcn"],
    image: "/pic3.jpg",
    github: "https://github.com/username/project3",
    linkedin: "https://linkedin.com/in/username",
    gitlab: "https://gitlab.com/username/project3",
  },
  {
    id: 4,
    title: "فروشگاه مدرن",
    desc: "فروشگاه اینترنتی با طراحی ریسپانسیو و مدرن",
    tech: ["React.js", "Redux", "Tailwind", "TypeScript"],
    image: "/pic4.jpg",
    github: "https://github.com/username/project4",
    linkedin: "https://linkedin.com/in/username",
    gitlab: "https://gitlab.com/username/project4",
  },
];

export default function Projects() {
  const router = useRouter();
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
      dir="rtl"
    >
      <motion.h1
        className={` text-3xl sm:text-4xl md:text-5xl font-bold text-center pt-16 mb-8 sm:mb-12 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        پروژه‌های من
      </motion.h1>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <div
              onClick={() => router.push(`/project/${project.id}`)}
              className="group [perspective:1000px] w-full h-72 sm:h-80 md:h-96 cursor-pointer"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* جلو کارت */}
                <div
                  className={`absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center [backface-visibility:hidden] transition-colors duration-500 ${
                    darkMode
                      ? "bg-purple-950 shadow-[0_0_25px_-10px_rgba(255,255,255,0.15)]"
                      : "bg-white shadow-[0_4px_25px_-10px_rgba(0,0,0,0.15)]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div
                    className={`absolute bottom-0 w-full p-3 sm:p-4 text-center font-bold text-base sm:text-lg ${
                      darkMode ? "text-white bg-black/60" : "text-white bg-black/60"
                    }`}
                  >
                    {project.title}
                  </div>
                </div>

                {/* پشت کارت */}
                <div
                  className={`absolute inset-0 rounded-2xl p-4 sm:p-6 flex flex-col justify-between items-center [transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-500 ${
                    darkMode
                      ? "bg-gradient-to-br from-purple-800 via-purple-900 to-black text-white"
                      : "bg-gradient-to-br from-black via-gray-800 to-gray-500 text-white"
                  }`}
                >
                  <div className="flex flex-col gap-2 sm:gap-3 items-center text-center">
                    <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
                    <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-2">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 sm:gap-6 mt-3 sm:mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href={project.gitlab}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Gitlab size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
