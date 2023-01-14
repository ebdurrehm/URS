import React from "react";
import style from "../assets/css/URSmentors.module.css";
import { mentor } from "../Data/URSdataMentors";

function URSmentors() {
  return (
    <div className={style.URSmentors} id="URSmentors">
      <div className="container">
        <div className={style.URSmentorsTitle}>
          <h2 className={style.URSmentorsTitleFiftyPixel}>eğitim</h2>
          <h2 className={style.URSmentorsTitleFiftyPixelLight}>mentörlerimiz</h2>
        </div>
        <div className={style.URSmentorsContent}>
          <div className="row">
            {mentor.map((result, index) => {
              return (
                <div className={`col-lg-3 col-6 ${style.URSmentorsItem}`} key={index}>
                  <div className={style.URSmentorsColDirection}>
                    <div className={style.URSmentorsCard}>
                      <div className={style.URSmentorsCardInner}>
                        <div className={style.URSmentorsCardFront}>
                          <img className={style.image} src={result.image} alt="" />
                        </div>
                        <div className={`${style.URSmentorsCardBack} ${result.class}`}>
                          <img className={style.URSmentorsImage} src={result.image} alt="" />
                          <div className={style.URSmentorsTurnCard}>
                            <h4 className={style.name}>{result.name}</h4>
                            <p className={style.profession}>
                              {result.profession}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default URSmentors;
