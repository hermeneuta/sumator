import ReportAItem from "./ReportAItem";

const ThirdItems = (props) => {
  const selected = props.elements.filter((item) =>
    item.report.includes("third")
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
          all={props.all}
          unit={item.unit}
        />
      ))}
    </div>
  );
};

export default ThirdItems;
