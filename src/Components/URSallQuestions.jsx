import React, {useState,useCallback} from 'react'
import style from '../assets/css/URSfrequentlyAskedQuestionsAllQuestions.module.css';
import { FaArrowDown,FaArrowUp } from 'react-icons/fa';
import FaqQuestions from '../Data/URSfrequentlyAskedQuestions.json';

export default function URSallQuestions() {
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
    <div className={style.allQuestions}>
        <div className="container">
          <div className="row">
            <div className="col-12">
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
            </div>
          </div>
        </div>
      </div>
  )
}
