import ReportAItem from "./ReportAItem";

const SecondItems = (props) => {
  const selected = props.elements.filter((item) =>
    item.report.includes("second")
  );

  return (
    <div>
      {selected.map((item) => (
        <ReportAItem
          key={item.name}
          name={item.name}
          leu={item.leu}
          count={item.count}
          report={item.report}
          desc={item.description}
          unit={item.unit}
          all={props.all}
        />
      ))}
    </div>
  );
};

export default SecondItems;
