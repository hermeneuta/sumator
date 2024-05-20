// About.js
import "./About.css";
import React from "react";
import judyta from "../assets/judyta.jpg";
import aneta from "../assets/aneta.jpg";
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
      <div style={{ marginBottom: "30px" }}>
        <h2 className="margin:10">dr n. farm. Aneta Wrzyszcz</h2>
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
              src={aneta}
              alt="Aneta Wrzyszcz"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div>
            <p style={{ fontWeight: "bold", justifyContent: "flex" }}>
              Pomysłodawczyni i konsultacja naukowa
            </p>
            <p>
              Absolwentka Akademii Medycznej im. Piastów Śląskich we Wrocławiu
              na kierunku Analityka Medyczna. Specjalista analityki klinicznej,
              diagnostyki laboratoryjnej oraz medycznej hematologii
              laboratoryjnej.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>kontakt: </span>
              <a href="mailto:aneta.wrzyszcz@dcopih.pl">
                aneta.wrzyszcz@dcopih.pl
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
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
              Absolwentka Uniwersytetu Medycznego im. Piastów Śląskich we
              Wrocławiu na kierunku Analityka Medyczna.
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
      <Footnote />
    </div>
  );
}

export default About;
