import "./SummaryPanel.css";
import sound from "../assets/hundred2.wav";
import Oblicz from "./Oblicz";
import Przelicz from "./Przelicz";
import History from "./History";
import Cofnij from "./Cofnij";
import { useState } from "react";

export default function Reports(props) {
  const [enterAmount, setEnterAmount] = useState("000.00");

  //Wszystkie policzone
  const allDetected = () => {
    const summary = props.elements
      .filter((item) => item.leu)
      .reduce((acc, cur) => acc + cur.count, 0);

    if (summary > 0 && summary % 100 === 0) {
      new Audio(sound).play();
    }

    return summary;
  };

  const resetHandler = () => {
    props.onReset();
    setEnterAmount("000.00");
  };

  const passPrzelicz = () => {
    props.onPrzelicz(enterAmount);
  };

  const passOblicz = () => {
    props.onOblicz();
  };

  const passCofnij = () => {
    props.onCofnij();
  };

  const wbcHandler = (e) => {
    e.preventDefault();
    setEnterAmount(e.target.value);
  };

  console.log(props.history);

  return (
    <div className="report">
      <div className="summary">
        <div className="summary_item">
          <History history={props.history} />
        </div>
        <div className="summary_item">
          Policzone <div>{allDetected()}</div>
        </div>
        <form className="summary_item">
          <div>WBC [G/I]</div>
          <input
            type="number"
            min="0.01"
            step="1.00"
            value={enterAmount}
            onChange={wbcHandler}
          />
        </form>
      </div>
      <div className="press">
        <Cofnij elements={props.elements} onCofnij={passCofnij} />
        <button onClick={resetHandler} className="press_item">
          RESET
        </button>
        <Oblicz elements={props.elements} onOblicz={passOblicz} />
        <Przelicz
          elements={props.elements}
          onPrzelicz={passPrzelicz}
          wbc={enterAmount}
        />
      </div>
    </div>
  );
}
