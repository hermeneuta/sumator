import "./About.css";
import React from "react";

function Tworca(props) {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <h2 className="margin:10">
          {props.stopien} {props.imie}
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          {props.zdjęcie ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={props.zdjęcie}
                alt={props.imie}
                style={{ width: "200px", height: "200px" }}
              />
              <div style={{ fontSize: "12px", marginLeft: "auto" }}>
                {props.autor_zdj}
              </div>
            </div>
          ) : null}
          <div>
            <p style={{ fontWeight: "bold", justifyContent: "flex" }}>
              {props.rola}
            </p>
            <p>{props.opis}</p>
            <p>
              <span style={{ fontWeight: "bold" }}>kontakt: </span>
              <a href={`mailto:${props.kontakt}`}>{props.kontakt}</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tworca;
