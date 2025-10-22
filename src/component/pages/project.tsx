"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Gitlab } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "بست شاپ",
    desc: "فروش موبایل و لپ تاپ و وسایل الکترونیکی",
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

  return (
    <div className="max-w-6xl mx-auto px-6 py-16" dir="rtl">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        پروژه‌های من
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
          >
            {/* کارت کلیک‌پذیر بدون تگ لینک تو در تو */}
            <div
              onClick={() => router.push(`/project/${project.id}`)}
              className="group [perspective:1000px] w-full h-80 cursor-pointer"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* جلو کارت */}
                <div className="absolute inset-0 rounded-2xl shadow-xl overflow-hidden bg-gray-200 flex items-center justify-center [backface-visibility:hidden]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 bg-black/60 text-white w-full p-4 text-center text-lg font-bold">
                    {project.title}
                  </div>
                </div>

                {/* پشت کارت */}
                <div className="absolute inset-0 rounded-2xl shadow-xl text-white p-6 flex flex-col justify-between items-center [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#1c1c1c]">
                  <div className="flex flex-col gap-3 items-center text-center">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-sm opacity-90">{project.desc}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-white/20 px-3 py-1 rounded-full text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* آیکون‌ها (درست و بدون تداخل لینک‌ها) */}
                  <div className="flex gap-6 mt-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={26} />
                    </Link>
                    <Link
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={26} />
                    </Link>
                    <Link
                      href={project.gitlab}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Gitlab size={26} />
                    </Link>
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
