"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mail, User, FileText, Settings, Code, Home, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode, isMounted } = useTheme();

  const navItems = [
    { title: "ارتباط با من", href: "/conect-me", icon: <Mail size={20} /> },
    { title: "درباره من", href: "/about-me", icon: <User size={20} /> },
    { title: "مقالات", href: "/article", icon: <FileText size={20} /> },
    { title: "مهارت ها", href: "/skills", icon: <Settings size={20} /> },
    { title: "پروژه ها", href: "/project", icon: <Code size={20} /> },
    { title: "خانه", href: "/", icon: <Home size={20} /> },
  ];

  // Hydration safe: قبل از mount چیزی نمایش نده
  if (!isMounted) return null;

  return (
    <>
      <nav className="w-full fixed top-0 left-0 backdrop-blur-md bg-black/20 text-white flex justify-between items-center px-6 py-3 z-50 shadow-md transition-colors duration-300">
        <div className="flex items-center gap-4">
          <div
            onClick={toggleDarkMode}
            className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer relative transition-colors duration-500
              ${darkMode ? "bg-gray-800" : "bg-gray-300"}`}
          >
            <div
              id="toggle-ball"
              className={`absolute top-0.5 left-0.5 w-7 h-7 rounded-full transform transition-transform duration-500 flex items-center justify-center
                ${darkMode
                  ? "translate-x-8 bg-gray-400 shadow-[0_0_8px_rgba(255,255,255,0.3)] animate-[swing_2s_ease-in-out_infinite]"
                  : "translate-x-0 bg-white shadow-[0_0_6px_rgba(0,0,0,0.2)] animate-pulse"
                }`}
            >
              {darkMode ? <Moon size={18} className="text-white" /> : <Sun size={18} className="text-gray-700" />}
            </div>
          </div>
        </div>

        {/* منو موبایل و desktop بدون تغییر */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-white/20 transition">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-8 mx-auto items-center">
          {navItems.map((item, id) => (
            <Link href={item.href} key={id}>
              <li className="flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-gray-400/20 hover:shadow-lg hover:shadow-white">
                {item.icon} {item.title}
              </li>
            </Link>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 font-bold text-2xl cursor-pointer select-none">
          <Code size={28} className="via-gray-800 text-gray-600" />
          <span className="font-sans">Omid Pourbagher</span>
        </div>
      </nav>

      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}></div>}

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-gray-700/90 to-black/90 backdrop-blur-md shadow-2xl flex flex-col p-6 gap-6 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Code size={28} className="text-purple-500" />
            Omid Pourbagher
          </div>
          <p className="text-sm text-gray-300">به دنیای مقالات و پروژه های من خوش آمدید!</p>
          <hr className="border-gray-500/50" />
        </div>

        <div className="flex flex-col gap-3">
          {navItems.map((item, id) => (
            <Link href={item.href} key={id} onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-white/20 hover:shadow-lg hover:shadow-gray-400">
                {item.icon} {item.title}
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-2xl font-semibold transition-all duration-300"
        >
          بستن
        </button>
      </div>
    </>
  );
}

export default NavbarHome;
