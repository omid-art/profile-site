"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Mail,
  User,
  FileText,
  Settings,
  Code,
  Home,
} from "lucide-react";

function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "ارتباط با من", href: "/conect-me", icon: <Mail size={20} /> },
    { title: "درباره من", href: "/about-me", icon: <User size={20} /> },
    { title: "مقالات", href: "/article", icon: <FileText size={20} /> },
    { title: "مهارت ها", href: "/skills", icon: <Settings size={20} /> },
    { title: "پروژه ها", href: "/project", icon: <Code size={20} /> },
    { title: "خانه", href: "/", icon: <Home size={20} /> },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 left-0 backdrop-blur-md bg-black/20 text-white flex justify-between items-center px-6 py-3 z-50 shadow-md">
        {/* موبایل آیکون */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-white/20 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* منو وسط برای دسکتاپ */}
        <ul className="hidden md:flex gap-8 mx-auto items-center">
          {navItems.map((item, id) => (
            <Link href={item.href} key={id}>
              <li className="flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-gray-400/20 hover:shadow-lg hover:shadow-white">
                {item.icon} {item.title}
              </li>
            </Link>
          ))}
        </ul>

        {/* لوگو و اسم سایت سمت راست */}
        <div className="hidden md:flex items-center gap-2 font-bold text-2xl cursor-pointer select-none">
          <Code size={28} className="via-gray-800 text-gray-600" />
          <span className="font-sans">Omid Pourbagher</span>
        </div>
      </nav>

      {/* Overlay موبایل */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* سایدبار موبایل */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-gray-700/90 to-black/90 backdrop-blur-md shadow-2xl flex flex-col p-6 gap-6 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* هدر بالای سایدبار */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Code size={28} className="text-purple-500" />
            Omid Pourbagher
          </div>
          <p className="text-sm text-gray-300">
            به دنیای مقالات و پروژه های من خوش آمدید!
          </p>
          <hr className="border-gray-500/50" />
        </div>

        {/* گزینه‌های منو */}
        <div className="flex flex-col gap-3">
          {navItems.map((item, id) => (
            <Link href={item.href} key={id} onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-white/20 hover:shadow-lg hover:shadow-gray-400">
                {item.icon} {item.title}
              </div>
            </Link>
          ))}
        </div>

        {/* دکمه بستن */}
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
