import './ReportBList.css';
import ReportBItem from './ReportBItem'

const ReportBList = props => {

    //counting all leuko elements
    const all = props.elements
            .filter(item => item.leu)
            .reduce((acc, cur) => acc + cur.count, 0);

    //Selected items that will appear in report
    const selected = props.elements.filter(item => !item.skipB);

    //Create unique array with group names
    const groupsNames = selected 
        .map(item => item.group);
    const groupsUniq = [...new Set(groupsNames)];

    //Creating pair (group - count)
    const dataB = groupsUniq.map(groupName => selected
        .filter(item => item.group === groupName)
        .reduce((acc, item) => {
            const idNum = Math.random().toString();
            return { id: idNum, name: item.group, count: acc.count + item.count }
        }, {id: '', name: '', count: 0}));

    const returnHandler = () => {
        props.onReturn();
    }

    return (
        <div>
        <fieldset>
            <legend className='report_title'> Raport B</legend>
            <br />
            <div className='reportB__items'>
            <div>
            {
            dataB.map(item =>
                <ReportBItem
                    key={item.id}
                    group={item.name}
                    count={item.count}
                    wbc={props.wbc}
                    all={all}
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