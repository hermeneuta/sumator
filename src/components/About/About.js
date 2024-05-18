// About.js
import "./About.css";
import React from "react";
import judyta from "../assets/judyta.jpg";
import { useNavigate } from "react-router-dom";
import Footnote from "../Footnote/Footnote";

function About() {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate("/");
  };

  return (
    <div className="calculator">
      <nav className="header">
        <ul>
          <li>
            <h1>Sumator hematologiczny</h1>
          </li>
          <li>
            <button className="menu__btn" onClick={goToCalculator}>
              Powrót do Sumatora
            </button>
          </li>
        </ul>
      </nav>
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
      <h2 className="margin:10">mgr. Judyta Kownacka</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={judyta}
            alt="Judyta Kownacka"
            style={{ width: "200px", height: "200px" }}
          />
          <div style={{ fontSize: "12px", marginLeft: "auto" }}>
            fot. Anna Kobierna
          </div>
        </div>
        <div>
          <p style={{ fontWeight: "bold", justifyContent: "flex" }}>
            Koordynatorka projektu
          </p>
          <p>
            Pracuje w Zakładzie Diagnostyki Laboratoryjnej Dolnośląskiego
            Centrum Onkologii, Pulmonologii i Hematologii, na stanowisku
            młodszego asystenta jako diagnosta laboratoryjny. Absolwentka
            Uniwersytetu Medycznego im. Piastów Śląskich we Wrocławiu na
            kierunku Analityka Medyczna.
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>kontakt: </span>
            <a href="mailto:judyta.kownacka@dcopih.pl">
              judyta.kownacka@dcopih.pl
            </a>
          </p>
        </div>
      </div>
      <Footnote />
    </div>
  );
}

export default About;
