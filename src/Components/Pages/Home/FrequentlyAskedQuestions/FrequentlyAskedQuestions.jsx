import { useState } from 'react';
import './FrequentlyAskedQuestions.scss';
import { Data } from './Data';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// import Plus from '../../../../Assets/Home/Questions/plus.svg';
import VLine from '../../../../Assets/Home/Questions/v-line.svg';



const FrequentlyAskedQuestions = () => {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <div className="frequently-asked-questions">

            <div className="faq-title">
                <h1>Frequently Asked Questions</h1>
            </div>

            <div className="questions-container">
                {Data.map((item, index) => {
                    return (
                        <>
                            <div className="question-answer-wrapper">
                                <div className="question-wrapper"
                                    onClick={() => toggle(index)} key={index}>
                                    <span>{clicked === index ? <RemoveIcon /> : <AddIcon />}</span>
                                    <h1>{item.question}</h1>
                                </div>

                                {clicked === index ? (
                                    <div className="answer-wrapper">
                                        <img src={VLine} alt="" />
                                        <p>{item.answer}</p>
                                    </div>
                                ) : null}
                                <hr className="questions-hr"/>
                            </div>


                        </>
                    );
                })}
            </div>


        </div>
    );
};

export default FrequentlyAskedQuestions;