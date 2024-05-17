const ReportAItem = (props) => {
  const clName = "report__item " + props.report;

  const percent = () => {
    if (props.count > 0 && props.leu) {
      return String(((props.count * 100) / props.all).toFixed(1)).padStart(
        4,
        "0",
      );
    } else if (props.count > 0 && props.group === "neut") {
      return String(((props.count * 100) / props.allNeu).toFixed(1)).padStart(
        4,
        "0",
      );
    } else if (props.name === "PLIM% ALIN" && props.plimalin > 0) {
      return String(((props.plim * 100) / props.plimalin).toFixed(1)).padStart(
        4,
        "0",
      );
    } else if (props.name === "LGL% LIM" && props.allLim > 0) {
      return String(((props.lgl * 100) / props.allLim).toFixed(1)).padStart(
        4,
        "0",
      );
    } else if (props.name === "JERY" && props.count > 0 && props.allLeu > 0) {
      return String(((props.count * 100) / props.allLeu).toFixed()).padStart(
        2,
        "0",
      );
    } else if (props.name === "INNE" && props.count > 0 && props.allLeu > 0) {
      return String(((props.count * 100) / props.allLeu).toFixed()).padStart(
        4,
        "0",
      );
    } else if (
      (props.name === "INNE" || props.name === "JERY") &&
      (props.count === 0 || props.allLeu === 0)
    ) {
      return "00";
    } else {
      return "00.0";
    }
  };

  const clNumber = () => {
    if (percent() === "00.0" || percent() === "00")
      return "number number_inactive";
    else return "number";
  };

  const clName_ = () => {
    if (props.report.includes("other")) return "name_";
    else return "name";
  };

  const unitFormat = () => {
    if (props.name === "JERY" || props.name === "INNE") return "";
    else return "%";
  };
  return (
    <div className={clName}>
      <div title={props.desc} className={clName_()}>
        {props.name}
      </div>
      <div className={clNumber()}>
        {percent()} {unitFormat()}
      </div>
    </div>
  );
};

export default ReportAItem;
