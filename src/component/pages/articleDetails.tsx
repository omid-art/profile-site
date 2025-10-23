"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, User, Tag, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";

interface Article {
  id: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  readTime: string;
  category?: string;
}

interface ArticleDetailsProps {
  article: Article;
}

export default function ArticleDetails({ article }: ArticleDetailsProps) {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-10 sm:py-16 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-gray-100 mt-4"
      dir="rtl"
    >
      {/* کارت کلی جزئیات */}
      <motion.div
        className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-6xl w-full border border-gray-100 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* دکمه بازگشت */}
        <motion.button
          onClick={() => router.push('/article')}
          className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 sm:px-4 py-2 rounded-xl flex items-center gap-1 sm:gap-2 font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md z-20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          بازگشت به مقالات
        </motion.button>

        {/* سمت راست - تصویر مقاله */}
        <motion.div
          className="md:w-1/2 relative group overflow-hidden h-64 sm:h-auto"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

          {/* عنوان روی تصویر فقط در موبایل */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-white z-20 block md:hidden">
            <h1 className="text-xl sm:text-2xl font-bold drop-shadow-lg">
              {article.title}
            </h1>
          </div>
        </motion.div>

        {/* سمت چپ - جزئیات مقاله */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/20 to-transparent z-0"></div>

          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 hidden md:block">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
              <span>📅 {article.date}</span>
              <span>⏱ {article.readTime}</span>
              {article.category && (
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-[11px] sm:text-xs font-semibold">
                  {article.category}
                </span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base border-r-4 border-gray-300 pr-3 sm:pr-4 mb-5 sm:mb-6">
              {article.desc}
            </p>

            {/* باکس نویسنده و دسته‌بندی */}
            <div className="bg-white shadow-md rounded-2xl p-3 sm:p-4 mb-5 sm:mb-6 border border-gray-100 flex flex-col gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <User size={16} className="text-gray-500" />
                <span className="font-medium">
                  نویسنده: <span className="font-bold">محمد فرانت‌اند</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Tag size={16} className="text-gray-500" />
                <span className="font-medium">
                  دسته‌بندی:{' '}
                  <span className="font-bold">{article.category || 'عمومی'}</span>
                </span>
              </div>
            </div>

            {/* نوار پیشرفت مطالعه */}
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <BookOpen size={18} className="text-gray-700" />
              <div className="flex-1 h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gray-800 to-gray-600"
                  initial={{ width: '0%' }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                ></motion.div>
              </div>
              <span className="text-[11px] sm:text-sm text-gray-600 font-semibold">75%</span>
            </div>

            <button
              onClick={() => alert('پروژه‌های مرتبط به زودی اضافه می‌شوند!')}
              className="self-start bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105 text-sm sm:text-base"
            >
              مشاهده پروژه‌های مرتبط
            </button>
          </div>
        </div>
      </motion.div>

      {/* 👇 بخش تیتر توضیحات */}
      <div className="flex flex-col items-center mt-12 sm:mt-16 mb-4">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          توضیحات
        </motion.h2>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        </motion.div>
      </div>

      {/* محتوای کامل مقاله */}
      <motion.div
        className="max-w-6xl bg-white rounded-3xl shadow-xl p-6 sm:p-10 leading-7 sm:leading-8 text-gray-800 border border-gray-100 text-sm sm:text-base"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="space-y-5 sm:space-y-6 text-justify">
          <p>
            در این مقاله قصد داریم درباره موضوع{' '}
            <strong>{article.title}</strong> صحبت کنیم. این مبحث یکی از
            پایه‌ای‌ترین مفاهیم در توسعه وب است و دانستن آن برای هر برنامه‌نویس
            ضروری است.
          </p>
          <p>
            {article.title} نه‌تنها به درک بهتر ساختار کد کمک می‌کند بلکه باعث
            افزایش سرعت توسعه و کاهش خطاها می‌شود. با تمرین مداوم و مطالعه‌ی
            منابع معتبر، می‌توانید در این زمینه تسلط بالایی پیدا کنید.
          </p>
          <p>
            پیشنهاد می‌کنیم حین مطالعه‌ی این مقاله، مثال‌ها را در محیط واقعی تست
            کنید. این کار باعث درک عمیق‌تر و ماندگارتر مفاهیم می‌شود.
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>تمرین روزانه حتی در مقیاس کوچک</li>
            <li>خواندن کدهای توسعه‌دهندگان حرفه‌ای</li>
            <li>ساخت پروژه‌های کوچک برای درک مفاهیم</li>
            <li>شرکت در انجمن‌های برنامه‌نویسی و اشتراک‌گذاری دانش</li>
          </ul>
          <p className="mt-4 sm:mt-6">
            در نهایت، یادگیری هیچ‌وقت تمام نمی‌شود — با پشتکار، شما هم می‌توانید
            به سطح بالایی از مهارت برسید 💪🔥
          </p>
        </div>
      </motion.div>
    </div>
  );
}
