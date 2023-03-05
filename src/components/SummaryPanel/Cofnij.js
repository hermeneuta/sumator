const Cofnij = (props) => {
  const cofnijHandler = () => {
    props.onCofnij();
  };

  return (
    <button onClick={cofnijHandler} className="press_item">
      COFNIJ
    </button>
  );
};

export default Cofnij;
