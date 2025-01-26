import React from "react";
// @ts-ignore
import { ChevronDown } from "lucide-react";
import useBrowserLanguage from "@site/src/hooks/useBrowserLanguage";

export function FAQ() {
  const { isRu } = useBrowserLanguage();

  const faqs = {
    ru: [
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
    ],
    en: [
      {
        question: "What is the Leela game?",
        answer:
          "Leela is an ancient Indian game of self-discovery that helps players explore their inner nature and spiritual path.",
      },
      {
        question: "What are the main goals of the Leela game?",
        answer:
          "The main goals of the Leela game are self-discovery, spiritual development, and understanding the karmic knots that affect the player's life.",
      },
      {
        question: "How to prepare for the Leela game?",
        answer:
          "Before starting the game, it is recommended to tune into a meditative state, clear your mind of extraneous thoughts, and focus on your intentions.",
      },
      {
        question: "How to interpret the results of the game?",
        answer:
          "The results of the game are interpreted through the lens of spiritual teachings and symbols presented on the game board. Each move can reveal new aspects of your inner world.",
      },
      {
        question: "Can you play Leela alone?",
        answer:
          "Yes, Leela can be played both alone and in a group. It is important to remember that the game is a tool for self-discovery, and each player can learn their own lessons from it.",
      },
      {
        question: "How often can you play Leela?",
        answer:
          "The frequency of play depends on your desire and needs. Some play regularly for continuous self-discovery, while others play as needed.",
      },
    ],
  };

  return (
    <div className="max-w-4xl mb-8 mx-auto rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 shadow-xl">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
        {isRu ? "Частые вопросы" : "Frequently Asked Questions"}
      </h2>
      <div className="space-y-4">
        {faqs[isRu ? "ru" : "en"].map((faq, index) => (
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
