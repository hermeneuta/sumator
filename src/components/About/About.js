// About.js
import "./About.css";
import React from "react";
import judyta from "../assets/judyta.jpg";

function About() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Twórcy
      </h1>
      <h2 className="margin:10">Judyta Kownacka</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <img
          src={judyta}
          alt="Judyta Kownacka"
          style={{ width: "200px", height: "200px" }}
        />
        <div>
          <p style={{ fontWeight: "bold", justifyContent: "flex" }}>
            Pomysłodawczyni i koordynatorka projektu
          </p>
          <p>
            Pracuje w Zakładzie Diagnostyki Laboratoryjnej Dolnośląskiego
            Centrum Onkologii, Pulmonologii i Hematologii, na stanowisku młodszy
            asystent jako diagnosta laboratoryjny. Absolwentka Uniwersytetu
            Medycznego im. Piastów Śląskich we Wrocławiu na kierunku analityka
            medyczna.
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>kontakt: </span>
            <a href="mailto:judyta.kownacka@dcopih.pl">
              judyta.kownacka@dcopih.pl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
