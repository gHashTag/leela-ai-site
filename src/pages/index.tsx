import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";
import { translate } from "@docusaurus/Translate";
import cover from "../../static/img/coverNew.png";
import styles from "./index.module.css";

import { CourseProgram } from "../components/CourseSlideshow";
import { FAQ } from "../components/FAQ";
import { CoursePricing } from "../components/CoursePricing";
import {
  PricingPlansEN,
  PricingPlansRU,
} from "../components/CoursePricing/PricingPlans";
import { HeroIntensive } from "../components/HeroIntensive";
import { AuthorSection } from "../components/AuthorSection";
import { ConsultationBenefits } from "../components/ConsultationBenefits";
import { ContactSection } from "../components/ContactSection";
import useBrowserLanguage from "../hooks/useBrowserLanguage";
// import englishment from '@site/static/img/enlighnment.png'
// import { Tokenomics } from '../components/sections/Tokenomics'
// import { TeamList } from '../components/sections/TeamList'
// import { GameRules } from '../components/sections/GameRules'
// import { RoadMap } from '../components/sections/RoadMap'

// ... existing imports ...

const getAutor = () => {
  return {
    name: translate({ id: "name" }),
    telegram: "https://t.me/playom",
    role: translate({ id: "role" }),
    experience: translate({ id: "experience" }),
    imageCaption: translate({ id: "imageCaption" }),
    bonusLabelTitle: translate({ id: "bonusLabelTitle" }),
    bonusLabelDescription: translate({ id: "bonusLabelDescription" }),
    bonusDescription: translate({ id: "bonusDescription" }),
    imageAvatar:
      "https://yuukfqcsdhkyxegfwlcb.supabase.co/storage/v1/object/public/landingpage/avatars/playom/gaia_kamskaya.JPG",
    imageUrl:
      "https://yuukfqcsdhkyxegfwlcb.supabase.co/storage/v1/object/public/landingpage/avatars/playom/leelachakra.JPG",
    description: translate({ id: "description" }),
    consultationBenefits: translate({ id: "consultationBenefits" }),
    title: translate({ id: "title" }),
    subtitle: translate({ id: "subtitle" }),
    bonusTitle: translate({ id: "bonusTitle" }),
    neurosmmDescription: translate({ id: "neurosmmDescription" }),
    achievements: [
      translate({ id: "achievements.1" }),
      translate({ id: "achievements.2" }),
      translate({ id: "achievements.3" }),
      translate({ id: "achievements.4" }),
    ],
    achievementDescriptions: {
      [translate({ id: "achievementDescriptions.neurocoach" })]: translate({
        id: "achievementDescriptions.1",
      }),
      [translate({ id: "achievementDescriptions.spiritualMentor" })]: translate(
        { id: "achievementDescriptions.2" }
      ),
      [translate({ id: "achievementDescriptions.vedicResearcher" })]: translate(
        { id: "achievementDescriptions.3" }
      ),
      [translate({ id: "achievementDescriptions.jnanaYogaTeacher" })]:
        translate({ id: "achievementDescriptions.4" }),
    },
  };
};

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { isRu } = useBrowserLanguage();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container mx-auto px-4">
        <h1>{siteConfig.title}</h1>
        <div className="my-4"></div>

        <h3 className="text-white">
          {translate({
            id: "app.description",
          })}
        </h3>

        <div className="my-8"></div>
        <div className="flex flex-col items-center justify-center md:flex-row md:space-y-0 md:space-x-4">
          <Link
            className="button button--secondary button--lg"
            to="https://apps.apple.com/kz/app/leela-ai/id1296604457"
          >
            {translate({
              id: "ios",
            })}
          </Link>
          <div className="my-2"></div>
          <Link
            className="button button--secondary button--lg"
            to="https://t.me/leela_chakra_ai_bot"
          >
            {translate({
              id: "android",
            })}
          </Link>
          <div className="my-2"></div>
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
  const { isRu } = useBrowserLanguage();
  const autor = getAutor();
  return (
    // @ts-ignore
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={`${siteConfig.tagline}`}
    >
      <section className="px-4 py-5">
        <div className="mx-auto max-w-7xl">
          <HeroIntensive
            author={autor}
            title={autor.title}
            subtitle={autor.subtitle}
            bonusTitle={autor.bonusTitle}
            description={autor.neurosmmDescription}
            imageCaption={autor.imageCaption}
            bonusLabelDescription={autor.bonusLabelDescription}
            bonusLabelTitle={autor.bonusLabelTitle}
          />
        </div>
      </section>
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
        <div className="flex justify-center" style={{ marginBottom: "20px" }} />
      </section>

      <section id="author-section" className="px-4 py-5">
        <div className="mx-auto max-w-7xl">
          <AuthorSection
            author={autor}
            imageAvatar={autor.imageAvatar}
            side="right"
          />
        </div>
      </section>

      <section id="faq" className="px-4 py-5">
        <div className="mx-auto max-w-7xl">
          <CoursePricing plans={isRu ? PricingPlansRU : PricingPlansEN} />
        </div>
        <div className="flex justify-center" style={{ marginBottom: "80px" }} />
      </section>
      <ConsultationBenefits />
      <section id="faq" className="px-4 py-5">
        <div className="mx-auto max-w-7xl">
          <FAQ />
          <div
            className="flex justify-center"
            style={{ marginBottom: "30px" }}
          />
        </div>
      </section>
      <section id="contacts" className="px-4 py-5">
        <div className="mx-auto max-w-7xl">
          <ContactSection contact={autor.telegram} hidePrice={true} />
        </div>
      </section>
    </Layout>
  );
}
