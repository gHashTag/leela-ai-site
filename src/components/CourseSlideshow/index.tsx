import React from "react";
import { ChevronDown } from "lucide-react";
import { courseModules } from "./Modules";
import "./styles.css";

export function CourseProgram() {
  return (
    <div className="max-w-4xl mb-8 mx-auto rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 shadow-xl">
      <h2 className="mb-8 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
        Программа курса
      </h2>
      <div className="space-y-4">
        {courseModules.map((module, moduleIndex) => (
          <details
            key={moduleIndex}
            className="group shadow-lg transition-all duration-300 rounded-lg overflow-hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between bg-white p-4 hover:bg-blue-50 group-open:bg-blue-100">
              <span className="font-semibold text-gray-900">
                {module.title}
              </span>
              <ChevronDown className="h-6 w-6 text-blue-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="p-4 text-gray-700 bg-white">
              <ul className="list-disc pl-5 space-y-2">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="mb-2">
                    {lesson.title}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
