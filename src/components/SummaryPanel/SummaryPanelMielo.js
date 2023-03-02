import './SummaryPanel.css';
import Wynik from './Wynik';

export default function Reports(props) {

    //Wszystkie policzone
    const allDetected = () => {
        const summary = props.elements
            .reduce((acc, cur) => acc + cur.count, 0);
        return summary;
    }

    const resetHandler = () => {
        props.onReset();
    }

    const passWynik = () => {
        props.onWynik()
    }

    return (
        <div className="report">

            <div className="summary_mielo">
                <div className="summary_item_mielo">Policzone <div>{allDetected()}</div></div> 
            </div>
            <div className="press_mielo">
                <button className="press_item">COFNIJ</button> 
                <button onClick={resetHandler} className="press_item">RESET</button> 
                <Wynik elements={props.elements} onWynik={passWynik} />
           </div>
        </div>
    )
}