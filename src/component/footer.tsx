"use client";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <SiNextdotjs size={28} className="text-purple-500" />
            Omid Pourbagher
          </div>
          <p className="text-gray-300 text-sm">
            اینجا می‌توانید مقالات، پروژه‌ها و تجربه‌های من را دنبال کنید.  
            دنیای برنامه‌نویسی با عشق و خلاقیت!
          </p>
          <div className="flex items-center gap-3 mt-2">
            <SiReact size={24} className="text-cyan-400" />
            <SiTailwindcss size={24} className="text-purple-400" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg mb-2">شبکه‌های اجتماعی</h3>
          <div className="flex gap-4 mt-1">
            <a href="#" className="hover:text-purple-500 transition-colors text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors text-2xl">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg mb-2">خبرنامه</h3>
          <p className="text-gray-300 text-sm">
            برای دریافت جدیدترین مقالات و پروژه‌ها ایمیل خود را وارد کنید:
          </p>
          <div className="flex gap-2 mt-2">
            <input
              type="email"
              placeholder="ایمیل شما"
              className="flex-1 px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all duration-300">
              ثبت
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-sm opacity-70">
        © 2025 Omid Pourbagher – همه حقوق محفوظ است
      </div>
    </footer>
  );
}
