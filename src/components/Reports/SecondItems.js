
import ReportAItem from "./ReportAItem";

const SecondItems = props => {

    const selected = props.elements.filter(item => item.report.includes('second'));
    const all = props.elements
            .filter(item => item.leu)
            .reduce((acc, cur) => acc + cur.count, 0);
    return (
        <div>
        {
        selected.map(item =>
            <ReportAItem
                key={item.name}
                name={item.name}
                leu={item.leu}
                count={item.count}
                report={item.report}
                desc={item.description}
                all={all}
            />)
        }
        </div>
        
    )
}

export default SecondItems;