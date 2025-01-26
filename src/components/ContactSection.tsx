import { translate } from "@docusaurus/Translate";
import React from "react";

export function ContactSection({
  contact,
  hidePrice = false,
}: {
  contact: string;
  hidePrice?: boolean;
}) {
  return (
    <section className="relative py-16">
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-indigo-700">
          {translate({
            id: "contactSection.title",
          })}
        </h2>
        <div className="rounded-lg bg-white bg-opacity-80 p-8 text-center shadow-lg">
          <p className="mb-6 text-lg text-gray-700">
            {translate({
              id: "contactSection.description",
            })}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={contact}
              className="inline-block rounded-full bg-indigo-600 px-8 py-4 text-center font-semibold text-white shadow-md transition-all hover:bg-indigo-700"
            >
              {translate({
                id: "contactSection.button",
              })}
            </a>
            {!hidePrice && (
              <a
                href="https://auth.robokassa.ru/merchant/Invoice/1TECfbyRZUKhtX-O-0r43g"
                className="inline-block rounded-full bg-teal-600 px-8 py-4 text-center font-semibold text-white shadow-md transition-all hover:bg-teal-700"
              >
                {translate({
                  id: "contactSection.button",
                })}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
