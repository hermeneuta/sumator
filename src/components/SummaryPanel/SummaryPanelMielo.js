import "./SummaryPanel.css";
import Wynik from "./Wynik";
import History from "./History";
import Cofnij from "./Cofnij";

export default function Reports(props) {
  //Wszystkie policzone
  const allDetected = () => {
    const summary = props.elements
      .filter((item) => !item.notCount)
      .reduce((acc, cur) => acc + cur.count, 0);
    return summary;
  };

  const resetHandler = () => {
    props.onReset();
  };

  const passWynik = () => {
    props.onWynik();
  };

  const passCofnij = () => {
    props.onCofnij();
  };

  return (
    <div className="report">
      <div className="summary_mielo">
        <div className="summary_item_mielo">
          <History history={props.history} />
        </div>
        <div className="summary_item_mielo">
          Policzone <div>{allDetected()}</div>
        </div>
      </div>
      <div className="press_mielo">
        <Cofnij elements={props.elements} onCofnij={passCofnij} />
        <button onClick={resetHandler} className="press_item">
          RESET
        </button>
        <Wynik elements={props.elements} onWynik={passWynik} />
      </div>
    </div>
  );
}
