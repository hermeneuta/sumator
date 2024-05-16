import Option from "../Erytrocyty/Option";
import { nanoid } from "nanoid";
import { useState } from "react";
import OutcomeErytro from "./OutcomeErytro";

function ErytroComp(props) {
  //Obiekt przechowujący zaobserwowane wartości
  const observations = {
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
  };

  const [selectedElement, setSelectedElement] = useState(
    "--- nazwa nieprawidłowości ---",
  );
  const [obsVal, setObsVal] = useState(observations);
  const [result, setResult] = useState(
    <div className="erytro_outcome">
      <div className="pole pole_average">-</div>
      <div className="pole pole_severity">-</div>
    </div>,
  );

  //Tablica nazw kluczy obiektu observations
  const nameObs = Object.keys(observations);

  //Tablica z numerami pól widzenia
  const numberObs = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  const selectedHandler = (e) => {
    const selected = e.target.value;
    setSelectedElement(selected);
    console.log(selected);
  };

  const obsHandler = (e) => {
    const { name, value } = e.target;
    setObsVal({
      ...obsVal,
      [name]: value,
    });
  };

  const selectedObject = (selectedEl) => {
    const selObj = props.names.filter((el) => el.name === selectedEl);
    return selObj[0];
  };

  const obsFormHandler = (e) => {
    e.preventDefault();
    console.log("Form ", obsVal);
    setResult(
      <div>
        <OutcomeErytro
          key={nanoid()}
          selected={selectedObject(selectedElement)}
          data={obsVal}
        />
      </div>,
    );
  };

  return (
    <div>
      <div className="erytro_element">
        <legend className="legend_number"> {props.number} </legend>
        <div className="number_wrapper"></div>
        <div className="pole_wrapper">
          <form onSubmit={obsFormHandler}>
            <div className="name_wrapper">
              <select
                className="name_select"
                value={selectedElement}
                onChange={selectedHandler}
              >
                {props.names.map((item) => (
                  <Option key={item.name} option={item.name} />
                ))}
              </select>
            </div>
            {/*Generacja pól do wprowadzania zarejestrowanych wartości */}
            <div className="pole_number">
              {nameObs.map((el, idx) => (
                <div>
                  {/*Numer pola widzenia*/}
                  <div className="nbr">{numberObs[idx]}</div>
                  {/*Generacja pól do wprowadzania zarejestrowanych wartości */}
                  <input
                    key={el}
                    className="pole"
                    type="number"
                    min="0"
                    max="99"
                    placeholder="0"
                    name={`${el}`}
                    value={obsVal[`${el}`]}
                    onChange={obsHandler}
                  ></input>
                </div>
              ))}
              <button type="submit" className="btn_erytro_oblicz">
                {"=>"}
              </button>
              {result}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ErytroComp;
