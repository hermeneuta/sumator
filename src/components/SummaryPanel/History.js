const History = (props) => {
  const last = props.history[props.history.length - 1];

  return (
    <div>
      <div>Ostatnio</div>
      <div>{last}</div>
    </div>
  );
};

export default History;
