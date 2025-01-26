import React from "react";
//@ts-ignore
import { Heart, Target, User, Brain, Smile, Compass } from "lucide-react";
import { translate } from "@docusaurus/Translate";

export function ConsultationBenefits() {
  const language = navigator.language.startsWith("ru") ? "ru" : "en";
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title_ru: "Персональная поддержка",
      title_en: "Personal support",
      bgColor: "from-red-100 to-pink-200",
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title_ru: "Долгосрочный эффект",
      title_en: "Long-term effect",
      bgColor: "from-green-100 to-lime-200",
    },
    {
      icon: <User className="h-8 w-8 text-yellow-500" />,
      title_ru: "Формирование намерения",
      title_en: "Forming intention",
      bgColor: "from-yellow-100 to-orange-200",
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title_ru: "Распаковка личности",
      title_en: "Unpacking personality",
      bgColor: "from-purple-100 to-indigo-200",
    },
    {
      icon: <Compass className="h-8 w-8 text-teal-500" />,
      title_ru: "Обсуждение целей и амбиций",
      title_en: "Discussion of goals and ambitions",
      bgColor: "from-teal-100 to-cyan-200",
    },
    {
      icon: <Smile className="h-8 w-8 text-pink-500" />,
      title_ru: "Управление эмоциями",
      title_en: "Emotional management",
      bgColor: "from-pink-100 to-red-200",
    },
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
          {translate({
            id: "consultationBenefits.title",
          })}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105"
              role="listitem"
              aria-label={benefit[`title_${language}`]}
            >
              <div
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${benefit.bgColor} text-white transition-transform transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-2xl`}
                aria-hidden="true"
              >
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                {benefit[`title_${language}`]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
