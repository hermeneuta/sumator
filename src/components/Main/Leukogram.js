import { useState } from "react";
import ElementsList from "../Elements/ElementsList";
import SummaryPanel from "../SummaryPanel/SummaryPanel";
import ReportAList from "../Reports/ReportAList";
import ReportBList from "../Reports/ReportBList";
import "./Main.css";

function Leukogram(props) {
  const names = [
    {
      name: "BLA",
      description: "komórki blastyczne",
      group: "bla", //określa obecność w raporcie B
      count: 0,
      report: "first",
      leu: true, //określa obecność we wzorze odsetkowym leukocytów
    },
    {
      name: "PMIE",
      description: "promielocyty",
      group: "ig",
      count: 0,
      report: "first",
      leu: true,
    },
    {
      name: "MIE",
      description: "mielocyty obojętnochłonne",
      group: "ig",
      count: 0,
      report: "first",
      leu: true,
    },
    {
      name: "MET",
      description: "metamielocyty obojętnochłonne",
      group: "ig",
      count: 0,
      report: "first",
      leu: true,
    },
    {
      name: "PAL",
      description:
        "neutrocyty pałeczkowate – neutrofile z jądrem pałeczkowatym",
      group: "neut",
      count: 0,
      report: "first",
      leu: true,
    },
    {
      name: "NEU",
      description:
        "neutrocyty – granulocyty obojętnochłonne z jądrem podzielonym",
      group: "neut",
      groupNeut: true,
      count: 0,
      report: "first",
      leu: true,
    },
    {
      name: "EO",
      description: "eozynofile – granulocyty kwasochłonne",
      group: "eo",
      count: 0,
      report: "first",
      leu: true,
    },
    {
      name: "BAZO",
      description: "bazofile – granulocyty zasadochłonne",
      group: "bazo",
      count: 0,
      report: "first",
      leu: true,
    },
    {
      name: "LIM",
      description: "limfocyty – komórki o typowej morfologii",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
    },
    {
      name: "ALI-R",
      description: "limfocyty atypowe, prawdopodobnie reaktywne",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
    },
    {
      name: "ALI-N",
      description: "limfocyty atypowe, prawdopodobnie nowotworowe",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
    },
    {
      name: "PLIM",
      description: "prolimfocyty",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
    },
    {
      name: "ALI",
      description: "limfocyty atypowe o nieokreślonym charakterze",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
    },
    {
      name: "LGL",
      description: "limfocyty ziarniste",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
    },
    {
      name: "PLA",
      description: "plazmocyty",
      group: "pla",
      count: 0,
      report: "third",
      leu: true,
    },
    {
      name: "LIPLA",
      description: "limfoplazmocyty",
      group: "lipla",
      count: 0,
      report: "third",
      leu: true,
    },
    {
      name: "PMO",
      description: "promonocyty",
      group: "pmo",
      count: 0,
      report: "second",
      leu: true,
    },
    {
      name: "MON",
      description: "monocyty",
      group: "mon",
      count: 0,
      report: "second",
      leu: true,
    },
    {
      name: "CK",
      description: "cienie komórkowe",
      group: "ck",
      count: 0,
      report: "fourth individual",
      leu: true,
    },
    {
      name: "K1",
      description: "Inne kategorie komórek (limfocyty ziarniste itp.)",
      group: "k1",
      count: 0,
      leu: true,
      report: "fourth individual",
      note: "Procentowa prezentacja razem z K2",
    },
    {
      name: "HipoG",
      description: "granulocyty hipogranularne",
      group: "neut",
      groupNeut: true,
      count: 0,
      leu: false,
      report: "other other1",
      display: "first_column",
      skipB: true,
      note: "% neut",
    },
    {
      name: "HiperG",
      description: "granulocyty hipergranularne",
      group: "neut",
      groupNeut: true,
      count: 0,
      leu: false,
      report: "other other2",
      skipB: true,
      note: "% neut",
    },
    {
      name: "HiperS",
      description: "granulocyty hipersegmentowane",
      group: "neut",
      groupNeut: true,
      count: 0,
      leu: false,
      report: "other other3",
      skipB: true,
      note: "% neut",
    },
    {
      name: "WOD",
      description: "granulocyty z wodniczkami",
      group: "neut",
      groupNeut: true,
      count: 0,
      leu: false,
      report: "other other4",
      skipB: true,
      note: "% neut",
    },
    {
      name: "LGL% LIM",
      description: "Odsetek LGL wśród wszystkich limfocytów",
      leu: false,
      hiden: true,
      skipB: true,
      report: "other other5",
    },
    {
      name: "PLIM% ALIN",
      description: "Odsetek prolimfocytów w limfocytach ALIN",
      leu: false,
      hiden: true,
      skipB: true,
      report: "other other6",
    },
    {
      name: "JERY",
      description: "erytroblasty",
      count: 0,
      leu: false,
      report: "other other7",
      skipB: true,
      note: "liczba/100 leu",
    },
    {
      name: "INNE",
      description:
        "inne kategorie komórek: mikromegakariocyty, komórki nowotworów niehematologicznych, mikroorganizmy",
      count: 0,
      leu: false,
      report: "other other8",
      display: "last_column",
      skipB: true,
      note: "liczba/100 leu",
    },
  ];

  // const [hundredSituation, setHundredSituation] = useState(0);
  const [report, setReport] = useState("");
  const [elementsObs, setElementsObs] = useState(names);
  //Historia uzyteczna dla funkcjonalnosci przycisku Cofnij
  const [showReport, setShowReport] = useState(false);
  const [history, setHistory] = useState(["-"]);

  const onReset = () => {
    setElementsObs((prevObserv) => {
      return prevObserv.map((item) => {
        return { ...item, count: 0 };
      });
    });
    setShowReport(false);
    setHistory(["-"]);
  };

  const detected = (element) => {
    const newElements = elementsObs.map((item) =>
      item.name === element ? { ...item, count: (item.count += 1) } : item
    );
    setElementsObs(newElements);
    setHistory([...history, element]);
  };

  const onReturn = () => {
    setShowReport(false);
  };

  const onOblicz = () => {
    setShowReport(true);
    setReport(
      <ReportAList
        elements={elementsObs}
        onReturn={onReturn}
        // hundred={hundredSituation}
      />
    );
  };

  const onCofnij = () => {
    const reduce = history.pop();
    const updateElementsObs = elementsObs.map((item) => {
      const curCount = item.count;
      return item.name === reduce ? { ...item, count: curCount - 1 } : item;
    });

    console.log(updateElementsObs[0].name, updateElementsObs[0].count);
    setElementsObs(updateElementsObs);

    if (history.length === 0) setHistory(["-"]);
    else setHistory([...history]);
  };

  const onPrzelicz = (wbc) => {
    const wbcAmount = wbc;
    setShowReport(true);
    setReport(
      <ReportBList elements={elementsObs} onReturn={onReturn} wbc={wbcAmount} />
    );
  };

  // const onHundred = (data) => {
  // console.log(hundredSituation);
  // setHundredSituation(data[0]);
  // setHundredSituation(prevData => {
  //   return {...prevData, jery: data[0], inne: data[1]}
  // });
  // };

  return (
    <div className="elements">
      <div className="back">
        <div className="chosen_title">{props.chosen}</div>
        {!showReport && (
          <div>
            {" "}
            <ElementsList elements={names} detPass={detected} />{" "}
          </div>
        )}
        {showReport && <div>{report}</div>}
      </div>
      <div>
        <SummaryPanel
          elements={elementsObs}
          onReset={onReset}
          onPrzelicz={onPrzelicz}
          onOblicz={onOblicz}
          // onHundred={onHundred}
          onCofnij={onCofnij}
          history={history}
        />
      </div>
    </div>
  );
}

export default Leukogram;
