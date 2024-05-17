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
      unit: "%",
    },
    {
      name: "PMIE",
      description: "promielocyty",
      group: "ig",
      count: 0,
      report: "first",
      leu: true,
      unit: "%",
    },
    {
      name: "MIE",
      description: "mielocyty obojętnochłonne",
      group: "ig",
      count: 0,
      report: "first",
      leu: true,
      unit: "%",
    },
    {
      name: "MET",
      description: "metamielocyty obojętnochłonne",
      group: "ig",
      count: 0,
      report: "first",
      leu: true,
      unit: "%",
    },
    {
      name: "PAL",
      description:
        "neutrocyty pałeczkowate – neutrofile z jądrem pałeczkowatym",
      group: "neut",
      count: 0,
      report: "first",
      leu: true,
      unit: "%",
    },
    {
      name: "NEU",
      description:
        "neutrocyty – granulocyty obojętnochłonne z jądrem podzielonym",
      group: "neut",
      count: 0,
      report: "first",
      leu: true,
      unit: "%",
    },
    {
      name: "EO",
      description: "eozynofile – granulocyty kwasochłonne",
      group: "eo",
      count: 0,
      report: "first",
      leu: true,
      unit: "%",
    },
    {
      name: "BAZO",
      description: "bazofile – granulocyty zasadochłonne",
      group: "bazo",
      count: 0,
      report: "first",
      leu: true,
      unit: "%",
    },
    {
      name: "LIM",
      description: "limfocyty – komórki o typowej morfologii",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
      unit: "%",
    },
    {
      name: "ALI-R",
      description: "limfocyty atypowe, prawdopodobnie reaktywne",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
      unit: "%",
    },
    {
      name: "ALI-N",
      description: "limfocyty atypowe, prawdopodobnie nowotworowe",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
      unit: "%",
    },
    {
      name: "PLIM",
      description: "prolimfocyty",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
      unit: "%",
    },
    {
      name: "ALI",
      description: "limfocyty atypowe o nieokreślonym charakterze",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
      unit: "%",
    },
    {
      name: "LGL",
      description: "limfocyty ziarniste",
      group: "lim",
      count: 0,
      report: "third",
      leu: true,
      unit: "%",
    },
    {
      name: "PLA",
      description: "plazmocyty",
      group: "pla",
      count: 0,
      report: "third",
      leu: true,
      unit: "%",
    },
    {
      name: "LIPLA",
      description: "limfoplazmocyty",
      group: "lipla",
      count: 0,
      report: "third",
      leu: true,
      unit: "%",
    },
    {
      name: "PMO",
      description: "promonocyty",
      group: "pmo",
      count: 0,
      report: "second",
      leu: true,
      unit: "%",
    },
    {
      name: "MON",
      description: "monocyty",
      group: "mon",
      count: 0,
      report: "second",
      leu: true,
      unit: "%",
    },
    {
      name: "CK",
      description: "cienie komórkowe",
      group: "ck",
      count: 0,
      report: "fourth individual",
      leu: true,
      unit: "%",
    },
    {
      name: "K1",
      description: "Inne kategorie komórek (limfocyty ziarniste itp.)",
      group: "k1",
      count: 0,
      leu: true,
      report: "fourth individual",
      unit: "%",
    },
    {
      name: "HipoG",
      description: "granulocyty hipogranularne",
      group: "neut",
      count: 0,
      leu: false,
      report: "other other1",
      display: "first_column",
      skipB: true, // Nie ujęty w raporcie B
      unit: "%Neut",
    },
    {
      name: "HiperG",
      description: "granulocyty hipergranularne",
      group: "neut",
      count: 0,
      leu: false,
      report: "other other2",
      skipB: true,
      unit: "%Neut",
    },
    {
      name: "HiperS",
      description: "granulocyty hipersegmentowane",
      group: "neut",
      count: 0,
      leu: false,
      report: "other other3",
      skipB: true,
      unit: "%Neut",
    },
    {
      name: "WOD",
      description: "granulocyty z wodniczkami",
      group: "neut",
      count: 0,
      leu: false,
      report: "other other4",
      skipB: true,
      unit: "%Neut",
    },
    {
      name: "LGL% LIM",
      description: "Odsetek LGL wśród wszystkich limfocytów",
      leu: false,
      hiden: true,
      skipB: true,
      report: "other other5",
      unit: "%LIM",
    },
    {
      name: "PLIM% ALIN",
      description: "Odsetek prolimfocytów w limfocytach ALIN",
      leu: false,
      hiden: true,
      skipB: true,
      report: "other other6",
      unit: "%ALIN",
    },
    {
      name: "JERY",
      description: "erytroblasty",
      count: 0,
      leu: false,
      report: "other other7",
      skipB: true,
      unit: "",
      // unit: "l./100LEU",
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
      unit: "",
      // unit: "l./100LEU",
    },
  ];

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
      item.name === element ? { ...item, count: (item.count += 1) } : item,
    );
    setElementsObs(newElements);
    setHistory([...history, element]);
  };

  const onReturn = () => {
    setShowReport(false);
  };

  const onOblicz = () => {
    setShowReport(true);
    setReport(<ReportAList elements={elementsObs} onReturn={onReturn} />);
  };

  const onCofnij = () => {
    const reduce = history.pop();
    const updateElementsObs = elementsObs.map((item) => {
      const curCount = item.count;
      return item.name === reduce ? { ...item, count: curCount - 1 } : item;
    });

    setElementsObs(updateElementsObs);

    if (history.length === 0) setHistory(["-"]);
    else setHistory([...history]);
  };

  const onPrzelicz = (wbc) => {
    const wbcAmount = wbc;
    setShowReport(true);
    setReport(
      <ReportBList
        elements={elementsObs}
        onReturn={onReturn}
        wbc={wbcAmount}
      />,
    );
  };

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
          onCofnij={onCofnij}
          history={history}
        />
      </div>
    </div>
  );
}

export default Leukogram;
