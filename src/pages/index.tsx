import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { translate } from "@docusaurus/Translate";
import cover from "../../static/img/coverNew.png";
import styles from "./index.module.css";

import { CourseProgram } from "../components/CourseSlideshow";
import { FAQ } from "../components/FAQ";
import { CoursePricing } from "../components/CoursePricing";
import { PricingPlans } from "../components/CoursePricing/PricingPlans";
// import englishment from '@site/static/img/enlighnment.png'
// import { Tokenomics } from '../components/sections/Tokenomics'
// import { TeamList } from '../components/sections/TeamList'
// import { GameRules } from '../components/sections/GameRules'
// import { RoadMap } from '../components/sections/RoadMap'

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          {translate({
            id: "app.description",
          })}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://apps.apple.com/kz/app/leela-ai/id1296604457"
          >
            {translate({
              id: "ios",
            })}
          </Link>
          <div style={{ margin: "20px" }}></div>
          <Link
            className="button button--secondary button--lg"
            to="https://t.me/leela_chakra_ai_bot"
          >
            {translate({
              id: "android",
            })}
          </Link>
          <div style={{ margin: "20px" }}></div>
          <Link
            className="button button--secondary button--lg"
            to="https://vk.com/leela.chakra"
          >
            {`VKontakte`}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    // @ts-ignore
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={`${siteConfig.tagline}`}
    >
      <HomepageHeader />
      <img src={cover} alt="cover"></img>

      <main>
        <HomepageFeatures />
        {/* <AboutToken /> */}
        {/* <Tokenomics /> */}
        {/* <TeamList />
        <GameRules /> */}
        {/* <RoadMap /> */}
        {/* <ProgramSection />  */}
        {/* <CostSection /> */}
        {/* <img src={englishment} alt="englishment"></img> */}
      </main>
      <section id="course-program" className="px-4 py-5">
        <div className="mx-auto max-w-7xl">
          <CourseProgram />
        </div>
        <div className="flex justify-center" style={{ marginBottom: "80px" }} />
      </section>

      <section id="faq" className="px-4 py-5">
        <div className="mx-auto max-w-7xl">
          <CoursePricing plans={PricingPlans} />
        </div>
        <div className="flex justify-center" style={{ marginBottom: "80px" }} />
      </section>
      <section id="faq" className="px-4 py-5">
        <div className="mx-auto max-w-7xl">
          <FAQ />
          <div
            className="flex justify-center"
            style={{ marginBottom: "30px" }}
          />
        </div>
      </section>
    </Layout>
  );
}
