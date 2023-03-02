
const Oblicz = props => {

    const obliczHandler = () => {
        props.onOblicz();
    }

    return (
        <button onClick={obliczHandler} className="press_item">OBLICZ</button> 
    )
}

export default Oblicz;