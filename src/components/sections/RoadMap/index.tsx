import Map from "@site/static/img/map.jpg";
import clsx from "clsx";
import React from "react";

export function RoadMap() {
  return (
    <header className={clsx("hero")}>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className="hero__title">Road map</h1>
          <h2 className="hero__subtitle">
            As we <span style={{ color: "#2e8555" }}>begin 2024</span>, our
            focus is on{" "}
            <span style={{ color: "#2e8555" }}>marketing, influencer,</span> and
            the <span style={{ color: "#2e8555" }}>ambassador</span> program. We
            will then <span style={{ color: "#2e8555" }}>update</span> the{" "}
            <span style={{ color: "#2e8555" }}>design</span>, implement a{" "}
            <span style={{ color: "#2e8555" }}>3D AI avatar</span>, move to{" "}
            <span style={{ color: "#2e8555" }}>blockchain</span>, launch a{" "}
            <span style={{ color: "#2e8555" }}>web 3</span> application, and{" "}
            <span style={{ color: "#2e8555" }}>Leela Ai token</span>.
          </h2>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
        >
          <div style={{ marginRight: "20px" }}>
            <h1 className="hero__title" style={{ color: "#2e8555" }}>
              Q1.
              <br /> 2024
            </h1>
            <h3>
              •Marketing. Interaction with influencers, traffic, ambassador
              program <br />
              •UI/UX redesign, development of 3D avatar and AI assistant <br />
              •Blockchain migration, redevelopment <br /> •Web 3 mobile
              application and website <br /> •Launch of the Leela Ai token
            </h3>
          </div>
          <img
            src={Map}
            alt="Map"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              marginLeft: "auto", // Align to the right
            }}
          />
        </div>
      </div>
    </header>
  );
}
