const ReportGrupyMieloItem = (props) => {
  const outcome = () => {
    if (props.value > 0 && props.value !== Infinity) {
      return String(props.value.toFixed(1).padStart(4, "0"));
    } else return "00.00";
  };

  const clNumber = () => {
    if (outcome() === "00.00") return "numberMielo number_inactive";
    else return "numberMielo";
  };

  return (
    <div className={props.style}>
      <div className="nameGrupaMielo">{props.name}</div>
      <div className={clNumber()}> {outcome()} </div>
    </div>
  );
};

export default ReportGrupyMieloItem;
