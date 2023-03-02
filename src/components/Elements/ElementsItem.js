import sound from '../assets/pop.wav';

const ElementsItem = props => {

    const clName = 'item ' + props.display;

    const onDetected = () => {
        props.detected(props.name);
        new Audio(sound).play();
    }

    return (
        <button onClick={onDetected} className={clName} > {props.name}</button>
    )
}

export default ElementsItem;