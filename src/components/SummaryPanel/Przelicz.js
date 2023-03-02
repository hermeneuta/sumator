
const Przelicz = props => {

    const przeliczHandler = () => {
        props.onPrzelicz();
    }

    return (
        <button onClick={przeliczHandler} className="press_item">PRZELICZ</button> 
    )
}

export default Przelicz;