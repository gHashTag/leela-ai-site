import React from "react";
import { ourTeam } from "@site/static/ourTeam";
import { translate } from "@docusaurus/Translate";

export function TeamList() {
  const middleIndex = Math.floor(ourTeam.length / 2);

  return (
    <div className="text-content text-center" style={{ marginBottom: 50 }}>
      <h1
        className="text-white hero__title"
        style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}
      >
        {translate({
          id: "team",
        })}
      </h1>
      <div
        className="flex row container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "37.5rem",
          margin: "0 auto",
        }}
      >
        {ourTeam.map(({ name, role, img, instLink }, index) => (
          <figure
            key={name}
            onClick={
              instLink ? () => window.open(instLink, "_blank") : undefined
            }
            style={{
              cursor: instLink ? "pointer" : "default",
              textAlign: "center",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "8em",
                height: "8em",
                margin: "0 auto",
              }}
            >
              <img
                draggable={false}
                src={img}
                alt={`${name}'s photo`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <figcaption>
              <p
                style={{
                  margin: "0.5em 0 0",
                  fontSize: "1.7em",
                }}
                className="text-white"
              >
                {name}
              </p>
              <p className="text-white">{role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
