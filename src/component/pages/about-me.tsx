"use client";
import { motion, Variants } from "framer-motion";
import { useTheme } from "@/context/ThemeContext"; // 👈 اتصال به Context

// 🔹 تعریف صحیح Variants با custom برای استفاده از index
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutPage() {
  const { darkMode } = useTheme();

  const paragraphs = [
    "از بچگی همیشه دوست داشتم کارهایی انجام بدم که یک فرد غریبه به آن نگاه می‌کند و سر در نمی‌آورد، و این حس خاص بودن را دوست داشتم.",
    "تا وقتی برادر بزرگترم را دیدم که برنامه‌نویس بود و کاری با کامپیوتر انجام می‌داد که من سر در نمی‌آوردم. ریز ریز ازش سوال می‌کردم تا بفهمم و الهام گرفتم.",
    "روزی به او گفتم که می‌خواهم مثل او شوم و کمکم کند. او به من گفت که خودت باید تحقیق کنی تا علایق خود را پیدا کنی و مسیر خودت را بفهمی.",
    "من شروع به جستجو کردم و وارد مسیر Frontend شدم؛ از HTML و CSS شروع کردم و سپس به React و Next.js رسیدم.",
  ];

  const cards = [
    {
      title: "شروع زودهنگام",
      desc: "از 16 سالگی مسیر یادگیری طراحی سایت را شروع کردم.",
      color: darkMode ? "bg-gray-800" : "bg-purple-100",
      textColor: darkMode ? "text-white" : "text-purple-600",
    },
    {
      title: "مسیر Frontend",
      desc: "با HTML, CSS و سپس React و Next.js مسیر حرفه‌ای خود را ادامه دادم.",
      color: darkMode ? "bg-gray-800" : "bg-green-100",
      textColor: darkMode ? "text-white" : "text-green-600",
    },
    {
      title: "علاقه به خلاقیت",
      desc: "همیشه دوست داشتم چیزهایی بسازم که خاص و متفاوت باشند.",
      color: darkMode ? "bg-gray-800" : "bg-blue-100",
      textColor: darkMode ? "text-white" : "text-blue-600",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-700 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 sm:px-4">
        {/* عنوان */}
        <motion.h1
          className={`text-4xl sm:text-3xl md:text-5xl font-bold text-center mb-12 leading-snug break-words ${
            darkMode
              ? "text-white"
              : "bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent"
          }`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          سلام من امیدم!
        </motion.h1>

        {/* معرفی کوتاه */}
        <motion.div
          className="mb-12 text-right"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            className={`text-lg sm:text-base md:text-xl font-semibold ${
              darkMode ? "text-gray-200" : "text-gray-900"
            }`}
          >
            من امید پورباقر هستم، ۱۸ سالمه و دانش‌آموز سال دوازدهم رشته شبکه و نرم‌افزار از کرج
          </p>
          <p
            className={`text-md sm:text-sm md:text-lg mt-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            از ۱۶ سالگی مسیر یادگیری طراحی سایت را شروع کردم و تا امروز در مسیر Frontend با HTML, CSS, React و Next.js پیش رفته‌ام.
          </p>
        </motion.div>

        {/* داستان زندگی */}
        <div className="space-y-8 text-right">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className={`leading-relaxed text-sm sm:text-xs md:text-base ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* کارت‌ها */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 text-right">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={`${card.color} p-6 rounded-2xl shadow hover:shadow-lg transition`}
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <h3
                className={`font-bold text-lg sm:text-base md:text-lg mb-2 ${card.textColor}`}
              >
                {card.title}
              </h3>
              <p
                className={`${
                  darkMode ? "text-gray-200" : "text-gray-800"
                } text-sm sm:text-xs md:text-sm`}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
