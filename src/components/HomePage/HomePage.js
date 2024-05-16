// HomePage.js
import "../../App.css";
import Leukogram from "../Main/Leukogram";
import Mielogram from "../Main/Mielogram";
import Erytrocyty from "../Main/Erytrocyty";
import Footnote from "../Footnote/Footnote";
import About from "../About/About";
import React, { useState } from "react";

function HomePage() {
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

  const goToAbout = () => {
    setShow(3);
  };

  return (
    <>
      <div className="calculator">
        <div>
          <nav className="header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* <div className="logo-lab">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M175 389.4c-9.8 16-15 34.3-15 53.1c-10 3.5-20.8 5.5-32 5.5c-53 0-96-43-96-96V64C14.3 64 0 49.7 0 32S14.3 0 32 0H96h64 64c17.7 0 32 14.3 32 32s-14.3 32-32 32V309.9l-49 79.6zM96 64v96h64V64H96zM352 0H480h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V214.9L629.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H261.4c-38.3 0-69.4-31.1-69.4-69.4c0-12.8 3.6-25.4 10.3-36.4L320 214.9V64c-17.7 0-32-14.3-32-32s14.3-32 32-32h32zm32 64V224c0 5.9-1.6 11.7-4.7 16.8L330.5 320h171l-48.8-79.2c-3.1-5-4.7-10.8-4.7-16.8V64H384z"/></svg>
          </div> */}
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
              <li>
                <button className="menu__btn" onClick={goToAbout}>
                  Twórcy
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
        {show === 3 && (
          <div>
            {" "}
            <About />{" "}
          </div>
        )}
        <Footnote />
      </div>
    </>
  );
}

export default HomePage;
