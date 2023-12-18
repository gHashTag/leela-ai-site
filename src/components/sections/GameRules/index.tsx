import clsx from "clsx";
import React from "react";
import styles from "../Tokenomics/index.module.css";
import GameScreen from "@site/static/img/gameScreen.png";

export function GameRules() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>How to play?</h1>
        <p>
          To enter the game, you need to roll a 6 on the dice. The player rolls
          the dice, allowing the forces of karma to determine his next position
          on the board. He passes through the various planes of existence,
          ascending with arrows and descending with snakes, striving to
          comprehend the intention of his Higher Self wherever he goes.
        </p>
        <img src={GameScreen} width={"200 rem"} />
      </div>
    </header>
  );
}
