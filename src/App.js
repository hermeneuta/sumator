import logo from "./dcopih_new_.png";
import "./App.css";
import Leukogram from "./components/Main/Leukogram";
import Mielogram from "./components/Main/Mielogram";
import Erytrocyty from "./components/Main/Erytrocyty";
import Footnote from "./components/Footnote/Footnote";
import React, { useState } from "react";

function App() {
  //show allows to view certain display:
  //0 - leukogram
  //1 - mielogram
  //2 - ocena erytrocytów

  const [show, setShow] = useState(0);

  const leukoHandler = () => {
    setShow(0);
  };

  const mieloHandler = () => {
    setShow(1);
  };

  const erytroHandler = () => {
    setShow(2);
  };

  return (
    <div className="calculator">
      <div>
        <nav className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>
              <h1>Sumator hematologiczny</h1>
            </li>
            <li>
              <button className="menu__btn" onClick={leukoHandler}>
                Leukogram
              </button>
            </li>
            <li>
              <button className="menu__btn" onClick={mieloHandler}>
                Mielogram
              </button>
            </li>
            <li>
              <button className="menu__btn" onClick={erytroHandler}>
               Erytrocyty 
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {show === 0 && (
        <div>
          <Leukogram chosen={"Leukogram"} />{" "}
        </div>
      )}
      {show === 1 && (
        <div>
          {" "}
          <Mielogram chosen={"Mielogram"} />{" "}
        </div>
      )}
      {show === 2 && (
        <div>
          {" "}
          <Erytrocyty chosen={"Erytrocyty"} />{" "}
        </div>
      )}
      <Footnote />
    </div>
  );
}

export default App;