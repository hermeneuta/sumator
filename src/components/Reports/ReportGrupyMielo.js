import ReportGrupyMieloItem from "./ReportGrupyMieloItem";

const ReportGrupyMielo = (props) => {
  const erytro = props.elements
    .filter((item) => item.szereg === "erytroidalny")
    .reduce((acc, cur) => acc + cur.count, 0);

  const erytro_dys = props.elements
    .filter((item) => item.special === "dys_ery")
    .reduce((acc, cur) => acc + cur.count, 0);

  const granulo = props.elements
    .filter((item) => item.cell === "granulocyt")
    .reduce((acc, cur) => acc + cur.count, 0);

  const granulo_dys = props.elements
    .filter((item) => item.special === "dys_gran")
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

  console.log(erytro, all, erytro_dys);
  const groups = [
    {
      id: id(),
      name: "szereg erytroidalny",
      value: (erytro * 100) / all,
      style: "group1",
    },
    {
      id: id(),
      name: "w tym dysplastyczne",
      value: (erytro_dys * 100) / erytro,
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
      name: "w tym dysplastyczne",
      value: (granulo_dys * 100) / granulo,
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

  const group1 = groups.filter((item) => item.style === "group1");
  const group2 = groups.filter((item) => item.style === "group2");
  const group3 = groups.filter((item) => item.style === "group3");
  const group4 = groups.filter((item) => item.style === "group4");

  return (
    <div>
      <div className="otherMielo_1">
        <div>
          {group1.map((item) => (
            <ReportGrupyMieloItem
              key={item.id}
              name={item.name}
              value={item.value}
              style={item.style}
            />
          ))}
        </div>
      </div>
      <div className="otherMielo_2">
        <div>
          {group2.map((item) => (
            <ReportGrupyMieloItem
              key={item.id}
              name={item.name}
              value={item.value}
              style={item.style}
            />
          ))}
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
