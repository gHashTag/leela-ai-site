import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";
import GameScreen from "@site/static/img/gameScreen.png";
import dice from "@site/static/img/dice.png";
import { translate } from "@docusaurus/Translate";

export function GameRules() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.container}>
        <h1 className="hero__title">
          {translate({
            id: "howtoplay",
          })}
        </h1>
        <div className={styles.content}>
          <p className="hero__subtitle">
            {translate({
              id: "howtoplay.desc",
            })}
          </p>
          <img src={GameScreen} alt="Game Screen" className={styles.image} />
        </div>
      </div>
    </header>
  );
}
