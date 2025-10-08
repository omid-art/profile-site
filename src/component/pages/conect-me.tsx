"use client";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      dir="rtl"
    >
      {/* هدر */}
      <h1 className="text-4xl md:text-5xl font-bold text-center via-gray-800 to-gray-600 mb-12">
        ارتباط با من
      </h1>

      {/* اطلاعات تماس */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* شماره و ایمیل */}
        <div className="space-y-4">
          <p className="text-lg"><span className="font-bold">تلفن:</span> 09128610567</p>
          <p className="text-lg"><span className="font-bold">ایمیل:</span> pourbagher@gamil.com</p>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="flex flex-col items-start gap-4">
          <p className="font-bold text-lg">شبکه‌های اجتماعی:</p>
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2 text-purple-600 hover:text-purple-400 transition">
              <FaInstagram /> ihwimd
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition">
              <FaTelegram /> omidftf
            </a>
          </div>
        </div>
      </div>

      {/* فرم تماس */}
      <motion.form
        className="bg-gray-100 p-8 rounded-2xl shadow-lg space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input
            type="text"
            placeholder="نام شما"
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:via-gray-800 to-gray-600"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            required
          />
          <motion.input
            type="email"
            placeholder="ایمیل شما"
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:via-gray-800 to-gray-600"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            required
          />
        </div>

        <motion.input
          type="text"
          placeholder="موضوع"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:via-gray-800 to-gray-600"
          whileFocus={{ scale: 1.02 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          required
        />
        <motion.textarea
          placeholder="پیام شما"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:via-gray-800 to-gray-600 resize-none h-32"
          whileFocus={{ scale: 1.02 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          required
        />

        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white py-4 rounded-xl  hover:bg-black"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        >
          ارسال پیام
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
