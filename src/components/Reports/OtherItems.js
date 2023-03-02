
import ReportAItem from "./ReportAItem";

const OtherItems = props => {

    const selected = props.elements.filter(item => item.report.includes('other'));

    const allNeut = props.elements
            .filter(item => item.group === 'neut')
            .reduce((acc, cur) => acc + cur.count, 0);

    const allLim = props.elements
            .filter(item => item.group === 'lim')
            .reduce((acc, cur) => acc + cur.count, 0);

    const lgl = props.elements
            .filter(item => item.name === 'LGL')
            .reduce((acc, cur) => acc + cur.count, 0);
    
    const plimalin = props.elements
            .filter(item => (item.name === 'ALI-N' || item.name === 'PLIM'))
            .reduce((acc, cur) => acc + cur.count, 0);

    const plim = props.elements
            .filter(item => item.name === 'PLIM')
            .reduce((acc, cur) => acc + cur.count, 0);

    return (
        <div className={props.report}>
        {
        selected.map(item =>
            <ReportAItem
                key={item.name}
                group={item.group}
                name={item.name}
                count={item.count}
                report={item.report}
                desc={item.description}
                allNeut={allNeut}
                allLim={allLim}
                lgl={lgl}
                plimalin={plimalin}
                plim={plim}
            />)
        }
        </div>
        
    )
}

export default OtherItems;