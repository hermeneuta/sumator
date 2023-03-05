import "./ReportMieloList.css";
import ReportMieloItem from "./ReportMieloItem";
import ReportGrupyMielo from "./ReportGrupyMielo";

const ReportMieloList = (props) => {
  const returnHandler = () => {
    props.onReturn();
  };
  const selected = props.elements.filter((item) => !item.notCount);

  const all = selected.reduce((acc, cur) => acc + cur.count, 0);

  const selected1 = selected.filter((item) =>
    item.report.includes("firstMielo")
  );
  const selected2 = selected.filter((item) =>
    item.report.includes("secondMielo")
  );
  const selected3 = selected.filter((item) =>
    item.report.includes("thirdMielo")
  );
  const selected4 = selected.filter((item) =>
    item.report.includes("fourthMielo")
  );
  const selected5 = selected.filter((item) =>
    item.report.includes("fifthMielo")
  );

  return (
    <div>
      <fieldset>
        <legend className="report_title"> Raport</legend>
        <br />
        <div className="reportMielo__items">
          <div>
            <div className="firstMielo">
              {selected1.map((item) => (
                <ReportMieloItem
                  key={item.name}
                  name={item.name}
                  count={item.count}
                  report={item.report}
                  desc={item.description}
                  all={all}
                />
              ))}
            </div>
            <div className="secondMielo">
              {selected2.map((item) => (
                <ReportMieloItem
                  key={item.name}
                  name={item.name}
                  count={item.count}
                  report={item.report}
                  desc={item.description}
                  all={all}
                />
              ))}
            </div>
            <div className="thirdMielo">
              {selected3.map((item) => (
                <ReportMieloItem
                  key={item.name}
                  name={item.name}
                  count={item.count}
                  report={item.report}
                  desc={item.description}
                  all={all}
                />
              ))}
            </div>
            <div className="fourthMielo">
              {selected4.map((item) => (
                <ReportMieloItem
                  key={item.name}
                  name={item.name}
                  count={item.count}
                  report={item.report}
                  desc={item.description}
                  all={all}
                />
              ))}
            </div>
            <div className="fifthMielo">
              {selected5.map((item) => (
                <ReportMieloItem
                  key={item.name}
                  name={item.name}
                  count={item.count}
                  report={item.report}
                  desc={item.description}
                  all={all}
                />
              ))}
            </div>
          </div>
          <div>
            <ReportGrupyMielo elements={props.elements} />
          </div>
        </div>
      </fieldset>
      <button onClick={returnHandler} className="returnM">
        Powrót
      </button>
    </div>
  );
};

export default ReportMieloList;
