import logo from "./dco.jpg";
import "./App.css";
import Leukogram from "./components/Main/Leukogram";
import Mielogram from "./components/Main/Mielogram";
import Footnote from "./components/Footnote/Footnote";
import React, { useState } from "react";

function App() {
  const [showLeuko, setShowLeuko] = useState(true);

  const leukoHandler = () => {
    setShowLeuko(true);
  };

  const mieloHandler = () => {
    setShowLeuko(false);
  };

  // <div className="menu">// </div>
  // <img src={logo} className="App-logo" alt="logo" />
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
              <button className="menu__btn leuko__btn" onClick={leukoHandler}>
                Leukogram
              </button>
            </li>
            <li>
              <button className="menu__btn mielo__btn" onClick={mieloHandler}>
                Mielogram
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {showLeuko && (
        <div>
          <Leukogram chosen={"Leukogram"} />{" "}
        </div>
      )}
      {!showLeuko && (
        <div>
          {" "}
          <Mielogram chosen={"Mielogram"} />{" "}
        </div>
      )}
      <Footnote />
    </div>
  );
}

export default App;
