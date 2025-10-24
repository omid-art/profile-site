"use client";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function Contact() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        dir="rtl"
      >
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          ارتباط با من
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
          <div
            className={`space-y-3 sm:space-y-4 text-base sm:text-lg ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <p>
              <span className="font-bold">تلفن:</span> 09128610567
            </p>
            <p>
              <span className="font-bold">ایمیل:</span> pourbagher@gamil.com
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:gap-4">
            <p
              className={`font-bold text-base sm:text-lg ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              شبکه‌های اجتماعی:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-400 transition text-sm sm:text-base"
              >
                <FaInstagram className="text-lg sm:text-xl" /> ihwimd
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition text-sm sm:text-base"
              >
                <FaTelegram className="text-lg sm:text-xl" /> omidftf
              </a>
            </div>
          </div>
        </div>

        {/* فرم تماس */}
        <motion.form
          className={`p-6 sm:p-8 rounded-2xl space-y-5 sm:space-y-6 transition-colors duration-500 ${
            darkMode
              ? "bg-gray-900 text-white shadow-[0_0_25px_-10px_rgba(255,255,255,0.15)]"
              : "bg-white text-gray-900 shadow-[0_0_25px_-10px_rgba(0,0,0,0.15)]"
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.input
              type="text"
              placeholder="نام شما"
              className={`w-full p-3 sm:p-4 rounded-xl border focus:outline-none focus:ring-2 text-sm sm:text-base transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700 focus:ring-purple-400 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 focus:ring-gray-500 text-gray-900 placeholder-gray-500"
              }`}
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              required
            />
            <motion.input
              type="email"
              placeholder="ایمیل شما"
              className={`w-full p-3 sm:p-4 rounded-xl border focus:outline-none focus:ring-2 text-sm sm:text-base transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700 focus:ring-purple-400 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 focus:ring-gray-500 text-gray-900 placeholder-gray-500"
              }`}
              whileFocus={{ scale: 1.02 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              required
            />
          </div>

          <motion.input
            type="text"
            placeholder="موضوع"
            className={`w-full p-3 sm:p-4 rounded-xl border focus:outline-none focus:ring-2 text-sm sm:text-base transition-colors duration-300 ${
              darkMode
                ? "bg-gray-800 border-gray-700 focus:ring-purple-400 text-white placeholder-gray-400"
                : "bg-white border-gray-300 focus:ring-gray-500 text-gray-900 placeholder-gray-500"
            }`}
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            required
          />

          <motion.textarea
            placeholder="پیام شما"
            className={`w-full p-3 sm:p-4 rounded-xl border focus:outline-none focus:ring-2 resize-none h-28 sm:h-32 text-sm sm:text-base transition-colors duration-300 ${
              darkMode
                ? "bg-gray-800 border-gray-700 focus:ring-purple-400 text-white placeholder-gray-400"
                : "bg-white border-gray-300 focus:ring-gray-500 text-gray-900 placeholder-gray-500"
            }`}
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            required
          />

          <motion.button
            type="submit"
            className={`w-full py-3 sm:py-4 rounded-xl font-semibold transition-transform duration-300 shadow-lg ${
              darkMode
                ? "bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-white hover:opacity-90"
                : "bg-gradient-to-r from-black via-gray-800 to-gray-500 text-white hover:opacity-90"
            }`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
          >
            ارسال پیام
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
