// About.js
import "./About.css";
import React from "react";
import judyta from "../assets/judyta.jpg";
import aneta from "../assets/aneta.jpg";
import mat from "../assets/mat.jpg";
import { useNavigate } from "react-router-dom";
import Footnote from "../Footnote/Footnote";
import Tworca from "./Tworca";

function About() {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate("/");
  };

  const tworcy = [
    {
      imie: "Aneta Wrzyszcz",
      stopien: "dr n. farm.",
      rola: "Pomysłodawczyni i konsultacja naukowa",
      opis: "Absolwentka Akademii Medycznej im. Piastów Śląskich we Wrocławiu na kierunku Analityka Medyczna. Specjalista analityki klinicznej, diagnostyki laboratoryjnej oraz medycznej hematologii laboratoryjnej.",
      zdjęcie: aneta,
      autor_zdj: "",
      kontakt: "aneta.wrzyszcz@dcopih.pl",
    },
    {
      imie: "Judyta Kownacka",
      stopien: "mgr",
      rola: "Koordynatorka projektu",
      opis: "Absolwentka Uniwersytetu Medycznego im. Piastów Śląskich we Wrocławiu na kierunku Analityka Medyczna.",
      zdjęcie: judyta,
      autor_zdj: "fot. Anna Kobierna",
      kontakt: "judyta.kownacka@dcopih.pl",
    },
    {
      imie: "Mateusz Kownacki",
      stopien: "",
      rola: "Realizacja",
      opis: "",
      zdjęcie: "",
      autor_zdj: "",
      kontakt: "hello@mathesis.dev",
    },
  ];

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
      {tworcy.map((item) => (
        <Tworca
          key={item.imie}
          imie={item.imie}
          rola={item.rola}
          stopien={item.stopien}
          opis={item.opis}
          zdjęcie={item.zdjęcie}
          autor_zdj={item.autor_zdj}
          kontakt={item.kontakt}
        />
      ))}
      <Footnote />
    </div>
  );
}

export default About;
