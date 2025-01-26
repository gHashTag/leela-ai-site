import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { translate } from "@docusaurus/Translate";

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <>
        {translate({
          id: "easytouse",
        })}
      </>
    ),
    Svg: require("@site/static/img/important.svg").default,
    description: (
      <>
        {translate({
          id: "easytouse.desc",
        })}
      </>
    ),
  },
  {
    title: (
      <>
        {translate({
          id: "focus",
        })}
      </>
    ),
    Svg: require("@site/static/img/easy.svg").default,
    description: (
      <>
        {translate({
          id: "focus.desc",
        })}
      </>
    ),
  },
  {
    title: (
      <>
        {translate({
          id: "supported",
        })}
      </>
    ),
    Svg: require("@site/static/img/ai.svg").default,
    description: (
      <>
        {translate({
          id: "supported.desc",
        })}
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="flex flex-col items-center p-4 md:w-1/2 lg:w-1/3">
      <div className="text-center">
        <Svg className="mx-auto" role="img" />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
