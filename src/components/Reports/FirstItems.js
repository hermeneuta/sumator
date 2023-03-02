import ReportAItem from "./ReportAItem";

const FirstItems = props => {

    const selected = props.elements.filter(item => item.report.includes('first'));
    //counting all leuko elements
    const all = props.elements
            .filter(item => item.leu)
            .reduce((acc, cur) => acc + cur.count, 0);

    return (
        <div>
        {
        selected.map(item =>
            <ReportAItem
                key={item.name}
                leu={item.leu}
                name={item.name}
                count={item.count}
                report={item.report}
                desc={item.description}
                all={all}
            />)
        }
        </div>
        
    )
}

export default FirstItems;