const ReportMieloItem = (props) => {
  const clName = "report__item ";

  const outcome = () => {
    if (props.count > 0 && props.all > 0) {
      return String(((props.count * 100) / props.all).toFixed(1)).padStart(
        4,
        "0"
      );
    } else {
      return "00.0";
    }
  };

  const clNumber = () => {
    if (outcome() === "00.0") return "numberB number_inactive";
    else return "numberB";
  };

  return (
    <div className={clName}>
      <div className="nameMielo">{props.name}</div>
      <div className={clNumber()}>{outcome()} %</div>
    </div>
  );
};

export default ReportMieloItem;
