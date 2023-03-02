import logo from './dco.jpg';
import './App.css';
import Leukogram from './components/Main/Leukogram';
import Mielogram from './components/Main/Mielogram';
import React, { useState } from 'react';

function App() {

  const [showLeuko, setShowLeuko] = useState(true);

  const leukoHandler = () => {
    setShowLeuko(true);
  }

  const mieloHandler = () => {
    setShowLeuko(false);
  }

  return (
    <div className='calculator'>
    <div>
      <div className='header'>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='menu'>
        <h1> Sumator hematologiczny </h1>
        <button className='menu__btn leuko__btn' onClick={leukoHandler}>Leukogram</button>
        <button className='menu__btn mielo__btn' onClick={mieloHandler}>Mielogram</button>
        </div>
      </div>
    </div>
      {showLeuko && <div><Leukogram chosen={'Leukogram'} /> </div> }
      {!showLeuko && <div> <Mielogram chosen={'Mielogram'} /> </div> }
    </div>
  );
}

export default App;
