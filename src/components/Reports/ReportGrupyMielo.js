import ReportGrupyMieloItem from "./ReportGrupyMieloItem";

const ReportGrupyMielo = (props) => {
  const erytro = props.elements
    .filter((item) => item.szereg === "erytroidalny")
    .reduce((acc, cur) => acc + cur.count, 0);

  const erytro_dys = props.elements
    .filter((item) => item.special === "dys_ery")
    .reduce((acc, cur) => acc + cur.count, 0);

  const erytro_meg = props.elements
    .filter((item) => item.special === "meg_ery")
    .reduce((acc, cur) => acc + cur.count, 0);

  const granulo = props.elements
    .filter((item) => item.cell === "granulocyt")
    .reduce((acc, cur) => acc + cur.count, 0);

  const granulo_dys = props.elements
    .filter((item) => item.special === "dys_gran")
    .reduce((acc, cur) => acc + cur.count, 0);

  const granulo_meg = props.elements
    .filter((item) => item.special === "meg_gran")
    .reduce((acc, cur) => acc + cur.count, 0);

  const mielo = props.elements
    .filter((item) => item.szereg === "mieloidalny")
    .reduce((acc, cur) => acc + cur.count, 0);

  const limfo = props.elements
    .filter((item) => item.szereg === "limfoidalny")
    .reduce((acc, cur) => acc + cur.count, 0);

  const all = props.elements
    .filter((item) => item.notCount !== true)
    .reduce((acc, cur) => acc + cur.count, 0);

  const id = () => {
    return Math.random().toString();
  };

  const groups = [
    {
      id: id(),
      name: "szereg erytroidalny",
      value: (erytro * 100) / all,
      style: "group1",
    },
    {
      id: id(),
      name: "DYS.",
      value: (erytro_dys * 100) / erytro,
      style: "group1",
    },
    {
      id: id(),
      name: "MEG.",
      value: (erytro_meg * 100) / erytro,
      style: "group1",
    },
    {
      id: id(),
      name: "szereg granulocytowy",
      value: (granulo * 100) / all,
      style: "group2",
    },
    {
      id: id(),
      name: "DYS.",
      value: (granulo_dys * 100) / granulo,
      style: "group2",
    },
    {
      id: id(),
      name: "MEG.",
      value: (granulo_meg * 100) / granulo,
      style: "group2",
    },
    {
      id: id(),
      name: "szereg mieloidalny",
      value: (mielo * 100) / all,
      style: "group2",
    },
    {
      id: id(),
      name: "M:E",
      value: mielo / erytro,
      style: "group3",
    },
    {
      id: id(),
      name: "szereg limfoidalny",
      value: (limfo * 100) / all,
      style: "group4",
    },
  ];

  const group3 = groups.filter((item) => item.style === "group3");
  const group4 = groups.filter((item) => item.style === "group4");

  const outcome = (val) => {
    if (val > 0 && val !== Infinity) {
      return String(val.toFixed(1).padStart(4, "0"));
    } else return "00.00";
  };

  const clNumber = (val) => {
    if (outcome(val) === "00.00") return "numberMielo number_inactive";
    else return "numberMielo";
  };

  return (
    <div>
      <div className="otherMielo_1">
        <div className={groups[0].style}>
          <div className="nameGrupaMielo">{groups[0].name}</div>
          <div className={clNumber(groups[0].value)}>
            {" "}
            {outcome(groups[0].value)}{" "}
          </div>
        </div>
        <div className="together">
          <div className={groups[1].style}>
            <div className="nameGrupaMielo">{groups[1].name}</div>
            <div className={clNumber(groups[1].value)}>
              {" "}
              {outcome(groups[1].value)}{" "}
            </div>
          </div>
          <div className={groups[2].style}>
            <div className="nameGrupaMielo">{groups[2].name}</div>
            <div className={clNumber(groups[2].value)}>
              {" "}
              {outcome(groups[2].value)}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="otherMielo_2">
        <div className={groups[3].style}>
          <div className="nameGrupaMielo">{groups[3].name}</div>
          <div className={clNumber(groups[3].value)}>
            {" "}
            {outcome(groups[3].value)}{" "}
          </div>
        </div>
        <div className="together">
          <div className={groups[4].style}>
            <div className="nameGrupaMielo">{groups[4].name}</div>
            <div className={clNumber(groups[4].value)}>
              {" "}
              {outcome(groups[4].value)}{" "}
            </div>
          </div>
          <div className={groups[5].style}>
            <div className="nameGrupaMielo">{groups[5].name}</div>
            <div className={clNumber(groups[5].value)}>
              {" "}
              {outcome(groups[5].value)}{" "}
            </div>
          </div>
        </div>
        <div className={groups[6].style}>
          <div className="nameGrupaMielo" style={{ paddingTop: "8%" }}>
            {groups[6].name}
          </div>
          <div className={clNumber(groups[6].value)}>
            {" "}
            {outcome(groups[6].value)}{" "}
          </div>
        </div>
      </div>
      <div className="otherMielo_3">
        <div>
          {group3.map((item) => (
            <ReportGrupyMieloItem
              key={item.id}
              name={item.name}
              value={item.value}
              style={item.style}
            />
          ))}
        </div>
      </div>
      <div className="otherMielo_4">
        <div>
          {group4.map((item) => (
            <ReportGrupyMieloItem
              key={item.id}
              name={item.name}
              value={item.value}
              style={item.style}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportGrupyMielo;
