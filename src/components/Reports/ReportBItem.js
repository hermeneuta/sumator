import '../Reports/ReportBList.css';

const ReportBItem = props => {

    const clName = 'report__item itemsB';

    const outcome = () => {
        if (props.count > 0 && props.all > 0 && props.wbc > 0) {
            return String((((props.count * 100) / props.all)*props.wbc).toFixed(2)).padStart(5, '0');
        } else {
            return '00.00';
        }
    }

    const clNumber = () => {
        if (outcome() === '00.00') return 'numberB number_inactive';
        else return 'numberB'
    }

    return (
        <div className={clName} >
            <div className="nameB">{props.group.toUpperCase()}</div>
            <div className={clNumber()}>{outcome()}</div>
        </div>
    )
}

export default ReportBItem;