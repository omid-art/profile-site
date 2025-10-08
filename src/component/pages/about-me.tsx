"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About() {
  const paragraphs = [
    "از بچگی همیشه دوست داشتم کارهایی انجام بدم که یک فرد غریبه به آن نگاه می‌کند و سر در نمی‌آورد، و این حس خاص بودن را دوست داشتم.",
    "تا وقتی برادر بزرگترم را دیدم که برنامه‌نویس بود و کاری با کامپیوتر انجام می‌داد که من سر در نمی‌آوردم. ریز ریز ازش سوال می‌کردم تا بفهمم و الهام گرفتم.",
    "روزی به او گفتم که می‌خواهم مثل او شوم و کمکم کند. او به من گفت که خودت باید تحقیق کنی تا علایق خود را پیدا کنی و مسیر خودت را بفهمی.",
    "من شروع به جستجو کردم و وارد مسیر Frontend شدم؛ از HTML و CSS شروع کردم و سپس به React و Next.js رسیدم.",
  ];

  const cards = [
    { title: "شروع زودهنگام", desc: "از 16 سالگی مسیر یادگیری طراحی سایت را شروع کردم.", color: "bg-purple-100", textColor: "text-purple-600" },
    { title: "مسیر Frontend", desc: "با HTML, CSS و سپس React و Next.js مسیر حرفه‌ای خود را ادامه دادم.", color: "bg-green-100", textColor: "text-green-600" },
    { title: "علاقه به خلاقیت", desc: "همیشه دوست داشتم چیزهایی بسازم که خاص و متفاوت باشند.", color: "bg-blue-100", textColor: "text-blue-600" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16" dir="rtl">
      {/* هدر */}
    <motion.h1
       className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent leading-snug break-words"
       initial={{ opacity: 0, y: 40 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
     >
      سلام من امیدم!
     </motion.h1>

      {/* معرفی کوتاه */}
      <motion.div
        className="mb-12 text-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
      >
        <p className="text-lg md:text-xl font-semibold">
          من امید پورباقر هستم، 18 سالمه و دانش‌آموز سال 12 رشته شبکه و نرم‌افزار از کرج
        </p>
        <p className="text-md md:text-lg text-gray-700 mt-2">
          از 16 سالگی مسیر یادگیری طراحی سایت را شروع کردم و تا امروز در مسیر Frontend با HTML, CSS, React و Next.js پیش رفته‌ام.
        </p>
      </motion.div>

      {/* داستان زندگی با Scroll Reveal */}
      <div className="space-y-8 text-right">
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            className="text-gray-800 leading-relaxed"
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

      {/* نکات کلیدی در کارت‌ها */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
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
            <h3 className={`font-bold text-lg mb-2 ${card.textColor}`}>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
