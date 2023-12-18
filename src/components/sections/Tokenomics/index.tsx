import React from "react";
import { VictoryLegend, VictoryPie } from "victory";
import clsx from "clsx";
import styles from "./index.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Tokenomics() {
  const data = {
    labels: [
      "Pre-Seed Round",
      "Seed Round",
      "KOL Round",
      "Public Round (IDO)",
      "Team",
      "Reserves",
      "Advisors",
      "Marketing",
      "Liquidity Fund",
      "Airdrop",
      "Founders",
    ],
    datasets: [
      {
        label: "%",
        data: [10, 10, 5, 10, 10, 10, 9, 10, 10, 10, 6],
        backgroundColor: [
          "#5fa55a",
          "#01b4bc",
          "#f6d51f",
          "#fa8925",
          "#fa5457",
          "#27ae60",
          "#3498db",
          "#e74c3c",

          "#2ecc71",
          "#f39c12",
          "#9b59b6",
        ],
        borderColor: [
          "#5fa55a",
          "#01b4bc",
          "#f6d51f",
          "#fa8925",
          "#fa5457",
          "#27ae60",
          "#3498db",
          "#e74c3c",
          "#2ecc71",
          "#f39c12",
          "#9b59b6",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white", // Устанавливаем цвет текста легенды
        },
      },
    },
  };

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div
        className="container"
        style={{ marginBottom: "3.125rem", textAlign: "center" }}
      >
        <h1>TOKENOMICS</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30rem",
          }}
        >
          <div style={{ width: "30rem", height: "30rem" }}>
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
    </header>
  );
}
