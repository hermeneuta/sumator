import './ElementsList.css';
import ElementsItem from './ElementsItem';

const ElementsList = props => {

    const showElements = props.elements.filter(item => !item.hiden);

    //Nazwa zliczonego elementu przekazywana do rodzica -> Elements
    const detect = (elDetected) => {
        props.detPass(elDetected);
    }

    return (
        <div>
            <div className='chosen_calc'>{props.chosen}</div>
        <div className='items'>
            {showElements.map(item =>
                <ElementsItem
                    key={item.name}
                    name={item.name}
                    desc={item.description}
                    display={item.display}
                    detected={detect}
                />
            )} 
        </div>
        </div>
    )
}

export default ElementsList;