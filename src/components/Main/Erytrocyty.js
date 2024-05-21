import { nanoid } from "nanoid";
import { useState } from "react";
import "./Main.css";
import "../Erytrocyty/Erytrocyty.css";
import ErytroComp from "../Erytrocyty/ErytroComp";

function Erytrocyty(props) {
  const names = [
    {
      name: "--- nazwa nieprawidłowości ---",
      I: 0,
      II: 0,
      III: 0,
    },
    {
      name: "Schistocyty",
      I: 2,
      II: 5,
      III: 10,
    },
    {
      name: "Dangocyty",
      I: 2,
      II: 5,
      III: 10,
    },
    {
      name: "Krwinki pęcherzowate",
      I: 2,
      II: 5,
      III: 10,
    },
    {
      name: "Drepanocyty",
      I: 2,
      II: 5,
      III: 10,
    },
    {
      name: "Sferocyty",
      I: 2,
      II: 5,
      III: 10,
    },
    {
      name: "Lakrymocyty",
      I: 2,
      II: 5,
      III: 10,
    },
    {
      name: "Akantocyty",
      I: 2,
      II: 5,
      III: 10,
    },
    {
      name: "Krwinki nieregularnie obkurczone",
      I: "N/A",
      II: 5,
      III: 10,
    },
    {
      name: "Eliptocyty",
      I: 2,
      II: 10,
      III: 20,
    },
    {
      name: "Polichromazja",
      I: 2,
      II: 10,
      III: 20,
    },
    {
      name: "Owalocyty",
      I: "N/A",
      II: 10,
      III: 20,
    },
    {
      name: "Echinocyty",
      I: "N/A",
      II: 10,
      III: 20,
    },
    {
      name: "Krwinki tarczowate",
      I: "N/A",
      II: 10,
      III: 20,
    },
    {
      name: "Stomatocyty",
      I: "N/A",
      II: 10,
      III: 20,
    },
    {
      name: "Pierścienie Cabota",
      I: 1,
      II: 2,
      III: 2,
    },
    {
      name: "Ciałka Howella-Jolly’ego",
      I: 2,
      II: 5,
      III: 10,
    },
    {
      name: "Ciałka Pappenheimera",
      I: 2,
      II: 10,
      III: 20,
    },
    {
      name: "Nakrapianie zasadochłonne",
      I: "N/A",
      II: 4,
      III: 20,
    },
  ];

  const [block, setBlock] = useState([{ id: "el-0", position: 1 }]);

  const addComponent = () => {
    if (block.length < 6) {
      const newBlock = { id: `el-${nanoid()}`, position: block.length + 1 };
      setBlock((prevBlock) => {
        return [...prevBlock, newBlock];
      });
    } else return;
  };

  const removeComponent = () => {
    if (block.length > 1) {
      block.pop();
      setBlock([...block]);
    } else return;
  };

  const displayBlock = block.map((el) => (
    <ErytroComp id={el.id} key={el.id} names={names} number={el.position} />
  ));

  return (
    <div className="erytro_elements">
      <div className="erytro_back">
        <div className="erytro_intro">
          <div className="chosen_title">{props.chosen}</div>
          <div className="erytro_mod">
            <button className="dodaj" onClick={addComponent}>
              +
            </button>
            <button className="odejmij" onClick={removeComponent}>
              -
            </button>
          </div>
        </div>
        {displayBlock}
      </div>
    </div>
  );
}

export default Erytrocyty;
