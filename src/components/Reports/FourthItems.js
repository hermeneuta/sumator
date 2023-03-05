import ReportAItem from "./ReportAItem";

const FourthItems = props => {

    const selected = props.elements.filter(item => item.report.includes('fourth'));

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
                all={props.all}
            />)
        }
        </div>
        
    )
}

export default FourthItems;