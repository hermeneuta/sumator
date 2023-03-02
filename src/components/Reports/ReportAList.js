import './ReportAList.css';
import FirstItems from './FirstItems';
import SecondItems from './SecondItems';
import ThirdItems from './ThirdItems';
import FourthItems from './FourthItems';
import OtherItems from './OtherItems';

const ReportAList = props => {

    const returnHandler = () => {
        props.onReturn();
    }

    // console.log(props.hundred);
    return (
        <div>
        <fieldset>
            <legend className='report_title'> Raport A</legend>
            <br />
            <div className='report__items'>
                <div>
                    <div className='first_items'>
                        <FirstItems elements={props.elements} />
                    </div>
                    <div className='second_items'>
                        <SecondItems elements={props.elements} />
                    </div>
                    <div className='third_items'>
                        <ThirdItems elements={props.elements} />
                    </div>
                    <div className='fourth_items'>
                    <FourthItems elements={props.elements} />
                    </div>
                </div>

                <div>
                    <OtherItems elements={props.elements} />
                </div>
            </div>
            </fieldset>
            <button onClick={returnHandler} className='returnA'>Powrót</button>
            </div>
    )

}

export default ReportAList;