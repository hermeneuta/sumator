import ReportAItem from "./ReportAItem";

const FirstItems = props => {

    const selected = props.elements.filter(item => item.report.includes('first'));

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
                all={props.all}
            />)
        }
        </div>
        
    )
}

export default FirstItems;