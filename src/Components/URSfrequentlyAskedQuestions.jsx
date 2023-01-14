import React, { useState, useCallback } from "react";
import style from "../assets/css/URSfrequentlyAskedQuestions.module.css";
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import FaqQuestions from '../Data/URSfrequentlyAskedQuestions.json';
import { NavLink } from "react-router-dom";

export default function Faq() {
    const [arrowIcon, setArrowIcon] = useState(false);
    const [isSowAnswer, setIsSowAnswer] = useState(false);
    const [dataKey, setDataKey] = useState();

    const showAnswer = useCallback((e) => {
        arrowIcon ? setArrowIcon(false) : setArrowIcon(true);
        isSowAnswer ? setIsSowAnswer(false) : setIsSowAnswer(true);
        setDataKey(parseInt(e.target.dataset.key));
        if (e.target.dataset.key != dataKey) {
            setIsSowAnswer(true)
        }
    })
    return (
        <>
            <div className={style.frequentlyAskedQuestions}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className={style.titles}>
                                <h2 className={style.titleFiftyPixel}>??? bize</h2><br />
                                <h3 className={style.titleFortyPixel}>sıkca sorulan sorular</h3>
                            </div>
                            <p className={style.shortDescription}>
                            Amazon'da alım satım yapmak ve bu işe nasıl başlayacağımız hakkında en sık sorulan soruları sizin için bir araya getirdik
                            </p>
                            <div className={style.seeAllQuestions}><NavLink to={'/frequentlyAskedQuestionsPage'} className={style.seeAllQuestionsBtn}>Tüm soruları gör</NavLink></div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className={style.frequentlyAskedQuestionsAccordion}>
                                {

                                    FaqQuestions.questions.map((item, index) => {
                                        return <div key={index}><div className={style.questions} onClick={showAnswer} data-key={item.id} >
                                            <div className={style.question} data-key={item.id}>{item.question}</div>
                                            <div className={style.questionArrowIcon}>{arrowIcon ? dataKey === item.id ? <FaArrowUp data-key={item.id} /> : <FaArrowDown data-key={item.id} /> : <FaArrowDown data-key={item.id} />}</div>
                                        </div>
                                            {isSowAnswer ? dataKey === item.id ? <div className={style.answers}> <div className={style.answer}>{item.answer}</div> </div> : null : null}</div>
                                    })
                                }

                            </div>
                            <div className={style.seeAllQuestions}><NavLink to={'/frequentlyAskedQuestionsPage'} className={style.seeAllQuestionsBtnMobile}>Tüm soruları gör</NavLink></div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}



