import React from "react";
import { VictoryLegend, VictoryPie } from "victory";
import clsx from "clsx";
import styles from "./index.module.css";

const PieChartExample = () => {
  const data = [
    { x: "Pre-Seed Round", y: 10.0 },
    { x: "Seed Round", y: 10.0 },
    { x: "KOL Round", y: 5.0 },
    { x: "Public Round (IDO)", y: 10.0 },
    { x: "Team", y: 10.0 },
    { x: "Reserves", y: 10.0 },
    { x: "Advisors", y: 9.0 },
    { x: "Marketing", y: 10.0 },
    { x: "Liquidity Fund", y: 10.0 },
    { x: "Airdrop", y: 10.0 },
    { x: "Founders", y: 6.0 },
  ];

  const getLabel = (datum) => `${datum.datum.y}%`;

  // Ваши указанные цвета
  const customColors = [
    "#5fa55a",
    "#01b4bc",
    "#f6d51f",
    "#fa8925",
    "#fa5457",
    "#3498db",
    "#e74c3c",
    "#2ecc71",
    "#f39c12",
    "#9b59b6",
    "#27ae60",
  ];

  return (
    <div className={clsx(styles.chartContainer, styles.chartContainer)}>
      <div className={styles.legendContainer}>
        <VictoryLegend
          data={data.map((item, index) => ({
            name: item.x,
            symbol: { fill: customColors[index] },
          }))}
          orientation="vertical"
          style={{
            labels: { fontSize: 18, fill: "white" },
          }}
        />
      </div>
      <div className={styles.chart}>
        <VictoryPie
          data={data}
          height={350}
          labels={getLabel}
          style={{ labels: { fill: "white" } }}
          colorScale={customColors}
        />
      </div>
    </div>
  );
};

export function Tokenomics() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container" style={{ marginBottom: 50 }}>
        <h1 style={{ textAlign: "center" }}>TOKENOMICS</h1>
        <PieChartExample />
      </div>
    </header>
  );
}
