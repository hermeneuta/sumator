import { useState } from 'react';
import ElementsList from "../Elements/ElementsList";
import SummaryPanelMielo from "../SummaryPanel/SummaryPanelMielo";
import ReportMieloList from '../Reports/ReportMieloList';

import './Main.css';

function Mielogram (props) {
  const names = [
    {
      name: 'PERY',
      description: 'Proerytroblasty',
      count: 0,
      report: true 
    },
    {
      name: 'ERYZ',
      description: 'Erytroblasty zasadochłonne',
      count: 0,
      report:  true
    },
    {
      name: 'ERYP',
      description: 'Erytroblasty polichromatyczne',
      count: 0,
      report:  true
    },
    {
      name: 'ERYK',
      description: 'Erytroblasty kwasochłonne',
      count: 0,
      report:  true
    },
    {
      name: 'MBLA',
      description: 'Mieloblasty',
      count: 0,
      report:  true
    },
    {
      name: 'PMIE',
      description: 'Promielocyty',
      count: 0,
      report:  true
    },
    {
      name: 'MIE',
      description: 'Mielocyty obojętnochłonne',
      count: 0,
      report:  true
    },
    {
      name: 'MET',
      description: 'Metamielocyty obojętnochłonne',
      count: 0,
      report:  true
    },
    {
      name: 'PAL',
      description: 'Neutrocyty z jądrem pałeczkowatym',
      count: 0,
      report:  true
    },
    {
      name: 'NEU',
      description: 'Neutrocyty z jadrem podzielonym',
      count: 0,
      report:  true
    },
    {
      name: 'EO',
      description: 'Eozynofile',
      count: 0,
      report:  true
    },
    {
      name: 'BAZO',
      description: 'Bazofile',
      count: 0,
      report:  true
    },
    {
      name: 'PMO',
      description: 'Promonocyty',
      count: 0,
      report:  true
    },
    {
      name: 'MON',
      description: 'Monocyty',
      count: 0,
      report:  true
    },
    {
      name: 'LIM',
      description: 'Limfocyty',
      count: 0,
      display: 'first_column',
      report:  true
    },
    {
      name: 'ALI',
      description: 'Limfocyty atypowe',
      count: 0,
      report:  true
    },
    {
      name: 'PLA',
      description: 'Plazmocyty',
      count: 0,
      report:  true
    },
    {
      name: 'LIPLA',
      description: 'Limfoplazmocyty',
      count: 0,
      report:  true
    },
    {
      name: 'BLAN',
      description: 'Blasty niezidentyfikowane',
      count: 0,
      report:  true
    },
    {
      name: 'INNE',
      description: 'Inne komórki',
      count: 0,
      report:  true
    },
    {
      name: 'DYS ERY',
      description: 'Komórki dysplastycze w szeregu erytroidalnym',
      count: 0,
      display: 'first_column expand1',
      report: false 
    },
    {
      name: 'DYS GRAN',
      description: 'Komórki dysplastyczne w szeregu granulocytowym',
      count: 0,
      display: 'expand2',
      report: false 
    }
]

    const [report, setReport] = useState('');
    const [elementsObs, setElementsObs] = useState(names);
    //Historia uzyteczna dla funkcjonalnosci przycisku Cofnij
    const [showReport, setShowReport] = useState(false);
    const [history, setHistory] = useState([]);

    const onReset = () => {
        setElementsObs((prevObserv) => {
            return prevObserv.map(item => { return { ...item, count: 0 } } )
        });
        setShowReport(false)
    }

    const detected = (element) => {
        const newElements = elementsObs 
            .map(item => item.name === element ? { ...item, count: item.count += 1 } : item)
        setElementsObs(newElements);
        setHistory([...history, element]);
        }

    const onReturn = () => {
        setShowReport(false);
    }

    const onWynik = () => {
        setShowReport(true);
        setReport(<ReportMieloList elements={elementsObs} onReturn={onReturn}/>)
    }

    return (
        <div className='elements'>
            <div className="back">
            <div className='chosen_title'>{props.chosen}</div>
            { !showReport && <div> <ElementsList elements={names} detPass={detected} /> </div> }
            {showReport && <div>{report}</div>}
            </div>
            <div>
                <SummaryPanelMielo elements={elementsObs} onReset={onReset} onWynik={onWynik} />
            </div>
        </div>
    );
}

export default Mielogram;