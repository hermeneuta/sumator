
const Wynik = props => {

    const obliczHandler = () => {
        props.onWynik();
    }

    return (
        <button onClick={obliczHandler} className="press_item">WYNIK</button> 
    )
}

export default Wynik;