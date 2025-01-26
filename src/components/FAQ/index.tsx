import React from "react";
import { ChevronDown } from "lucide-react";
import "./styles.css";

export function FAQ() {
  const faqs = [
    {
      question: "Что такое игра Лила?",
      answer:
        "Лила — это древняя индийская игра самопознания, которая помогает игрокам исследовать свою внутреннюю природу и духовный путь.",
    },
    {
      question: "Каковы основные цели игры Лила?",
      answer:
        "Основные цели игры Лила — это самопознание, духовное развитие и понимание кармических узлов, которые влияют на жизнь игрока.",
    },
    {
      question: "Как подготовиться к игре Лила?",
      answer:
        "Перед началом игры рекомендуется настроиться на медитативный лад, очистить ум от посторонних мыслей и сосредоточиться на своих намерениях.",
    },
    {
      question: "Как интерпретировать результаты игры?",
      answer:
        "Результаты игры интерпретируются через призму духовных учений и символов, представленных на игровом поле. Каждый ход может раскрыть новые аспекты вашего внутреннего мира.",
    },
    {
      question: "Можно ли играть в Лила в одиночку?",
      answer:
        "Да, в Лила можно играть как в одиночку, так и в группе. Важно помнить, что игра — это инструмент для самопознания, и каждый игрок может извлечь из нее свои уроки.",
    },
    {
      question: "Как часто можно играть в Лила?",
      answer:
        "Частота игры зависит от вашего желания и потребностей. Некоторые играют регулярно для постоянного самопознания, другие — по мере необходимости.",
    },
  ];

  return (
    <div className="max-w-4xl mb-8 mx-auto rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 shadow-xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
        Частые вопросы
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 hover:bg-gray-100">
              <span className="font-medium text-gray-800">{faq.question}</span>
              <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="p-4 text-gray-600">{faq.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
