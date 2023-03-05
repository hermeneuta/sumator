import { useState } from "react";
import ElementsList from "../Elements/ElementsList";
import SummaryPanelMielo from "../SummaryPanel/SummaryPanelMielo";
import ReportMieloList from "../Reports/ReportMieloList";
import "./Main.css";

function Mielogram(props) {
  const names = [
    {
      name: "PERY",
      description: "Proerytroblasty",
      count: 0,
      report: "firstMielo",
      szereg: "erytroidalny",
      cell: "erytroblast",
    },
    {
      name: "ERYZ",
      description: "Erytroblasty zasadochłonne",
      count: 0,
      report: "firstMielo",
      szereg: "erytroidalny",
      cell: "erytroblast",
    },
    {
      name: "ERYP",
      description: "Erytroblasty polichromatyczne",
      count: 0,
      report: "firstMielo",
      szereg: "erytroidalny",
      cell: "erytroblast",
    },
    {
      name: "ERYK",
      description: "Erytroblasty kwasochłonne",
      count: 0,
      report: "firstMielo",
      szereg: "erytroidalny",
      cell: "erytroblast",
    },
    {
      name: "MBLA",
      description: "Mieloblasty",
      count: 0,
      report: "secondMielo",
      szereg: "mieloidalny",
      cell: "granulocyt",
    },
    {
      name: "PMIE",
      description: "Promielocyty",
      count: 0,
      report: "secondMielo",
      szereg: "mieloidalny",
      cell: "granulocyt",
    },
    {
      name: "MIE",
      description: "Mielocyty obojętnochłonne",
      count: 0,
      report: "secondMielo",
      szereg: "mieloidalny",
      cell: "granulocyt",
    },
    {
      name: "MET",
      description: "Metamielocyty obojętnochłonne",
      count: 0,
      report: "secondMielo",
      szereg: "mieloidalny",
      cell: "granulocyt",
    },
    {
      name: "PAL",
      description: "Neutrocyty z jądrem pałeczkowatym",
      count: 0,
      report: "secondMielo",
      szereg: "mieloidalny",
      cell: "granulocyt",
    },
    {
      name: "NEU",
      description: "Neutrocyty z jadrem podzielonym",
      count: 0,
      report: "secondMielo",
      szereg: "mieloidalny",
      cell: "granulocyt",
    },
    {
      name: "EO",
      description: "Eozynofile",
      count: 0,
      report: "secondMielo",
      szereg: "mieloidalny",
      cell: "granulocyt",
    },
    {
      name: "BAZO",
      description: "Bazofile",
      count: 0,
      report: "secondMielo",
      szereg: "mieloidalny",
      cell: "granulocyt",
    },
    {
      name: "PMO",
      description: "Promonocyty",
      count: 0,
      report: "thirdMielo",
      szereg: "mieloidalny",
      cell: "monocyt",
    },
    {
      name: "MON",
      description: "Monocyty",
      count: 0,
      report: "thirdMielo",
      szereg: "mieloidalny",
      cell: "monocyt",
    },
    {
      name: "LIM",
      description: "Limfocyty",
      count: 0,
      display: "first_column",
      report: "fourthMielo",
      szereg: "limfoidalny",
      cell: "limfocyt",
    },
    {
      name: "ALI",
      description: "Limfocyty atypowe",
      count: 0,
      report: "fourthMielo",
      szereg: "limfoidalny",
      cell: "limfocyt",
    },
    {
      name: "PLA",
      description: "Plazmocyty",
      count: 0,
      report: "fourthMielo",
      szereg: "limfoidalny",
      cell: "limfocyt",
    },
    {
      name: "LIPLA",
      description: "Limfoplazmocyty",
      count: 0,
      report: "fourthMielo",
      szereg: "limfoidalny",
      cell: "limfocyt",
    },
    {
      name: "BLAN",
      description: "Blasty niezidentyfikowane",
      count: 0,
      report: "fifthMielo",
      szereg: "pozostałe",
      cell: "pozostałe",
    },
    {
      name: "INNE",
      description: "Inne komórki",
      count: 0,
      report: "fifthMielo",
      szereg: "pozostałe",
      cell: "pozostałe",
    },
    {
      name: "DYS ERY",
      description: "Komórki dysplastycze w szeregu erytroidalnym",
      count: 0,
      display: "first_column expand1",
      report: "otherMielo",
      notCount: true,
      special: "dys_ery",
    },
    {
      name: "DYS GRAN",
      description: "Komórki dysplastyczne w szeregu granulocytowym",
      count: 0,
      display: "expand2",
      report: "otherMielo",
      notCount: true,
      special: "dys_gran",
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
      item.name === element ? { ...item, count: (item.count += 1) } : item
    );
    setElementsObs(newElements);
    setHistory([...history, element]);
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

  const onReturn = () => {
    setShowReport(false);
  };

  const onWynik = () => {
    setShowReport(true);
    setReport(<ReportMieloList elements={elementsObs} onReturn={onReturn} />);
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
        <SummaryPanelMielo
          elements={elementsObs}
          onReset={onReset}
          onWynik={onWynik}
          onCofnij={onCofnij}
          history={history}
        />
      </div>
    </div>
  );
}

export default Mielogram;
