import './ReportBList.css';
import ReportBItem from './ReportBItem'

const ReportBList = props => {

    const selected = props.elements.filter(item => item.group);

    const groups = props.elements
        .filter(item => item.group)
        .map(item => { return { group: item.group, count: item.count } })
        .reduce((acc, obj) => {
            return { ...acc, ...obj.group } 
        }, {})

    // const setGroups = new Set(groups);
    console.log(groups);


    const returnHandler = () => {
        props.onReturn();
    }

    return (
        <div>
        <fieldset>
            {/* <h3 className="report_title"> Raport B</h3> */}
            <legend className='report_title'> Raport B</legend>
            <br />
            <div className='report__items'>
            <div>
            {
            selected.map(item =>
                <ReportBItem
                    key={item.name}
                    group={item.group}
                    count={item.count}
                    report={item.report}
                    desc={item.description}
                />)
            }
            </div>
            </div>
        </fieldset>
        <button onClick={returnHandler} className='returnB'>Powrót</button>
        </div>
    )

}

export default ReportBList;