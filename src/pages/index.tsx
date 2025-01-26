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
import { PricingPlans } from "../components/CoursePricing/PricingPlans";
import { HeroIntensive } from "../components/HeroIntensive";
import { AuthorSection } from "../components/AuthorSection";
import { ConsultationBenefits } from "../components/ConsultationBenefits";
import { ContactSection } from "../components/ContactSection";
// import englishment from '@site/static/img/enlighnment.png'
// import { Tokenomics } from '../components/sections/Tokenomics'
// import { TeamList } from '../components/sections/TeamList'
// import { GameRules } from '../components/sections/GameRules'
// import { RoadMap } from '../components/sections/RoadMap'

const autor = {
  name: "Гая Камская",
  telegram: "https://t.me/playom",
  role: "Нейрокоуч и духовный наставник",
  experience: "12 лет опыта в ведической культуре",
  imageCaption: "Исследуй мир с Гаей Камской",
  bonusLabelTitle: "ПОЗНАНИЕ ИГРЫ ЖИЗНИ",
  bonusLabelDescription: "С ЛИЛОЙ В ПОДАРОК",
  bonusDescription:
    "Создатель мобильной игры Leela Chakra Ai с персональным Гуру ассистентом, вошедшего в TOP 100 игровых образовательных мобильных платформ по версии App Store.",
  imageAvatar:
    "https://yuukfqcsdhkyxegfwlcb.supabase.co/storage/v1/object/public/landingpage/avatars/playom/gaia_kamskaya.JPG",
  imageUrl:
    "https://yuukfqcsdhkyxegfwlcb.supabase.co/storage/v1/object/public/landingpage/avatars/playom/leelachakra.JPG", // Обновите URL, если необходимо
  description:
    "Консультация с нейрокоучем Гаей Камской с 12-летним опытом ведической культуры в роли учителя и создателя мобильной игры Leela Chakra Ai - НейроЛила, с персональным Гуру ассистентом, вошедшего в TOP 100 игровых образовательных мобильных платформ по версии App Store. Гая духовный наставник, исследователь Вед и преподаватель джняна-йоги. Она обладает статусом брахмачарини в традиции адвайта-веданты - пути недвойственности бытия, корни которого уходят к Даттатрее, создателю Вед. Гармонично соединяя древнюю мудрость и современные технологии, Гая открывает новую эру самопознания. Её миссия - помочь людям осознать свою истинную природу, обрести внутреннюю целостность и научиться миксовать древние ведические знание и технологии в реальной жизни.",
  consultationBenefits:
    "Преимущества консультации: персональная поддержка, долгосрочный эффект, формирование намерения, распаковка личности, обсуждение личных целей/амбиций и разработка стратегии для их достижения, как профессионального, так и личного роста, инструменты и техники управления эмоциями, а также анализ психологических аспектов своей жизни, самооценка, мотивация, вдохновение и отношения.",
  title: "НЕЙРО ЛИЛА",
  subtitle: "Путешествие в мир самопознания через игру и ведическую мудрость",
  bonusTitle: "БОНУС ПРИ РЕГИСТРАЦИИ",
  neurosmmDescription: "Играйте и учись вместе с нейрокоучем Гаей Камской",
  achievements: [
    "Нейрокоуч",
    "Духовный наставник",
    "Исследователь Вед",
    "Преподаватель джняна-йоги",
  ],
  achievementDescriptions: {
    Нейрокоуч: "Помощь в самопознании и развитии личности.",
    "Духовный наставник": "Ведение по пути духовного роста.",
    "Исследователь Вед": "Глубокое изучение ведической культуры.",
    "Преподаватель джняна-йоги": "Обучение философии недвойственности.",
  },
};
function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
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
          <CoursePricing plans={PricingPlans} />
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
