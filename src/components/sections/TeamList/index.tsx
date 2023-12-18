import React from "react";
import { ourTeam } from "@site/static/ourTeam";

export function TeamList() {
  return (
    <div className="text-content text-center" style={{ marginBottom: 50 }}>
      <h1
        className="text-white"
        style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}
      >
        Team
      </h1>
      <div
        className="flex row container"
        style={{
          alignSelf: "center",
          justifyContent: "space-between",
          width: "100%", // Чтобы контейнер занимал всю ширину
          maxWidth: "37.5 rem", // Указать нужную максимальную ширину
          margin: "0 auto", // Центрирование по горизонтали
        }}
      >
        {ourTeam.map(({ name, role, img, instLink }) => (
          <figure
            key={name}
            onClick={
              instLink ? () => window.open(instLink, "_blank") : undefined
            }
            style={{
              cursor: instLink ? "pointer" : "default",
              textAlign: "center",
              margin: "0.5em",
              marginLeft: "1.875 rem", // Увеличиваем левый отступ для каждой картинки
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "8em", // Указать нужный размер
                height: "8em", // Указать нужный размер
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
                  fontFamily: "ProximaNovaBold",
                }}
                className="text-white"
              >
                {name}
              </p>
              <p
                style={{ margin: 0, fontSize: "0.8em" }}
                className="text-white"
              >
                {role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
