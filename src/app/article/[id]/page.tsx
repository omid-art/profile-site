"use client";
import { useParams } from "next/navigation";
import db from "@/database/db.json";
import ArticleDetails from "@/component/pages/articleDetails";

export default function Page() {
  const { id } = useParams();

  // استخراج تمام مقالات از دسته‌بندی‌ها
  const categories = db.articles;
  const allArticles = Object.entries(categories)
    .flatMap(([category, items]) =>
      items.map((item) => ({ ...item, category }))
    );

  const article = allArticles.find((a) => a.id === id);

  if (!article)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        مقاله‌ای با این شناسه پیدا نشد 😢
      </div>
    );

  return <ArticleDetails article={article} />;
}
