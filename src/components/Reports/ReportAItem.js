
const ReportAItem = props => {

    const clName = 'report__item ' + props.report;

    const percent = () => {
        if (props.count > 0 && props.leu) {
            return String(((props.count * 100) / props.all).toFixed(1)).padStart(4, '0');
        }
        else if (props.count > 0 && props.group === 'neut') {
            return String(((props.count * 100) / props.allNeut).toFixed(1)).padStart(4, '0');
        }
        else if (props.name === 'PLIM% ALIN' && props.plimalin > 0) {
            return String(((props.plim * 100) / props.plimalin).toFixed(1)).padStart(4, '0');
        }
        else if (props.name === 'LGL% LIM' && props.allLim > 0) {
            return String(((props.lgl * 100) / props.allLim).toFixed(1)).padStart(4, '0');
        } 
        // else if (props.name === 'JERY' && props.all % 100 === 0) {
        //     return String(((props.lgl * 100) / props.allLim).toFixed(1)).padStart(4, '0');
        // } 
        // else if (props.name === 'INNE' && props.allLim > 0) {
        //     return String(((props.lgl * 100) / props.allLim).toFixed(1)).padStart(4, '0');
        // } 
        else {
            return '00.0';
        }
    }

    const clNumber = () => {
        if (percent() === '00.0') return 'number number_inactive'
        else return 'number';
    }

    return (
        <div className={clName} >
            <div className="name">{props.name}</div>
            <div className={clNumber()}>{percent()} %</div>
        </div>
    )
}

export default ReportAItem;