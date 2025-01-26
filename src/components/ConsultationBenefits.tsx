import React from "react";
//@ts-ignore
import { Heart, Target, User, Brain, Smile, Compass } from "lucide-react";

export function ConsultationBenefits() {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Персональная поддержка",
      bgColor: "from-red-100 to-pink-200",
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: "Долгосрочный эффект",
      bgColor: "from-green-100 to-lime-200",
    },
    {
      icon: <User className="h-8 w-8 text-yellow-500" />,
      title: "Формирование намерения",
      bgColor: "from-yellow-100 to-orange-200",
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Распаковка личности",
      bgColor: "from-purple-100 to-indigo-200",
    },
    {
      icon: <Compass className="h-8 w-8 text-teal-500" />,
      title: "Обсуждение целей и амбиций",
      bgColor: "from-teal-100 to-cyan-200",
    },
    {
      icon: <Smile className="h-8 w-8 text-pink-500" />,
      title: "Управление эмоциями",
      bgColor: "from-pink-100 to-red-200",
    },
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Преимущества игры с ментором
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <div
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${benefit.bgColor} text-white transition-transform transform hover:rotate-12`}
              >
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
