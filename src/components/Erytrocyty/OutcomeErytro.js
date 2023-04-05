const OutcomeErytro = props => {

    const average = () => {
        if (props.selected['name'] === '--- nazwa nieprawidłowości ---') {
            return '-';
        }
        else {
            const values = Object.values(props.data);
            const suma = values.reduce((acc, cur) => acc + Number(cur), 0);
            return (suma/values.length).toFixed(1);
        }
    }

    const severity = (average) => {
        if (props.selected['I'] === 'N/A' && average < props.selected['II']) return "N/A";
        else if (average === '-') return "-";
        else if (average >= props.selected['I'] && average < props.selected['II']) return "+";
        else if (average >= props.selected['II'] && average <= props.selected['III']) return "++";
        else if (average > props.selected['III']) return "+++";
        else return "-";
    }

    console.log('Outcome: ', props.selected);

    return (
        <div className="erytro_outcome">
            <div className="pole pole_average">{average()}</div>
            <div className="pole pole_severity">{severity(average())}</div>
        </div>
    )
}

export default OutcomeErytro;