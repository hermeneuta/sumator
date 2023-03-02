import './ReportBList.css';
import ReportMieloItem from './ReportMieloItem'
import ReportGrupyMielo from './ReportGrupyMielo';

const ReportMieloList = props => {

    const returnHandler = () => {
        props.onReturn();
    }

    const selected = props.elements.filter(item => item.report);

    return (
        <div>
        <fieldset>
            <legend className="report_title"> Raport</legend>
            <br />
            <div className='report__items'>
            <div>
            {
            selected.map(item =>
                <ReportMieloItem
                    key={item.name}
                    name={item.name}
                    count={item.count}
                    report={item.report}
                    desc={item.description}
                />)
            }
            </div>
            <div>
                <ReportGrupyMielo elements={props.elements} />
            </div>
            </div>
        </fieldset>
        <button onClick={returnHandler} className='returnM'>Powrót</button>
        </div>
    )

}

export default ReportMieloList;