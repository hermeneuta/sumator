import './SummaryPanel.css';
import Oblicz from './Oblicz';
import Przelicz from './Przelicz';
import { useState } from 'react';

export default function Reports(props) {

    const [enterAmount, setEnterAmount] = useState('000.00');

    //Wszystkie policzone
    const allDetected = () => {
        const summary = props.elements
            .filter(item => item.leu)
            .reduce((acc, cur) => acc + cur.count, 0);

        if (summary % 100 === 0) {
            const dataCol = props.elements
                .filter(item => item.name === 'JERY' || item.name === 'INNE')
            props.onHundred([dataCol[0].count, dataCol[1].count]);
        }

        return summary;
    }

    const resetHandler = () => {
        props.onReset();
        setEnterAmount('000.00');
    }

    const passPrzelicz = () => {
        props.onPrzelicz()
    }

    const passOblicz = () => {
        props.onOblicz()
    }

    const wbcHandler = e => {
        e.preventDefault();
        setEnterAmount(e.target.value);
    }

    return (
        <div className="report">

            <div className="summary">
                <div className="summary_item">Policzone <div>{allDetected()}</div></div> 
                <form className="summary_item">
                    <div>WBC [G/I]</div>
                    <input type="number" min="0.01" step="1.00" value={enterAmount} onChange={wbcHandler} />
                </form> 
            </div>
            <div className="press">
                <button className="press_item">COFNIJ</button> 
                <button onClick={resetHandler} className="press_item">RESET</button> 
                <Oblicz elements={props.elements} onOblicz={passOblicz}/>
                <Przelicz elements={props.elements} onPrzelicz={passPrzelicz} wbc={enterAmount} />
           </div>
        </div>
    )
}