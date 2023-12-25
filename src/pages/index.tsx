import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { translate } from "@docusaurus/Translate";
import cover from "../../static/img/coverNew.png";
import styles from "./index.module.css";
import englishment from "@site/static/img/enlighnment.png";
import { Tokenomics } from "../components/sections/Tokenomics";
import { TeamList } from "../components/sections/TeamList";
import { GameRules } from "../components/sections/GameRules";

function HomepageHeader() {
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
            to="/docs/intro"
          >
            {translate({
              id: "know more",
            })}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Hello from ${siteConfig.title}`}>
      <img src={cover} alt="Description of the image"></img>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Tokenomics />
        <TeamList />
        <GameRules />
        <img src={englishment} alt="Description of the image"></img>
      </main>
    </Layout>
  );
}
