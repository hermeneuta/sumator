
const ReportBItem = props => {

    const clName = 'report__item ' + props.report;

    return (
        <div className={clName} >
            <div className="name">{props.group}</div>
            <div className="number">{props.count}</div>
        </div>
    )
}

export default ReportBItem;