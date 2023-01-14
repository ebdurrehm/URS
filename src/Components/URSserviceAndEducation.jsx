import React, { Component } from 'react'
import style from '../assets/css/URSserviceAndEducation.module.css'
import sepLine from '../assets/images/sep-line.png'
import { dataServiceAndEDucation } from '../Data/URSdataServiceAndEducation';
import { NavLink } from 'react-router-dom';

export default function Service() {
    return (
        <div className={style.URSserviceAndEducation}>
            <div className="container">
                <div className="row">
                    <div className={`${style.URSserviceAndEducationLeftSide} col-lg-6`}>
                       <div className={style.titles}>
                            <h2 className={style.titleFiftyPixel}>hizmet & eğitim</h2><br />
                            <h3 className={style.titleFortyPixel}>alanları</h3>
                        </div>
                        <p className={style.shortDescription}>Amazon'da gerçek bir iş kurma hayalini gerçekleştirmek sandığın kadar zor değil. Yolculuk uzun, sonuçlar harika olacak!
                        </p>
                       </div>
                    <div className={`${style.URSserviceAndEducationRightSide} col-lg-6`}>
                        <div className={`${style.row} row`}>
                            {
                                dataServiceAndEDucation.map(data => {
                                    return (
                                        <NavLink  className={`col-lg-6 col-md-12 ${style.serviceAndEducation}`} to={`/URSserviceAndEducationDetail/:${data.title}`} key={data.title}>

                                                    <img src={data.icon} className={style.icon} />
                                                    <img src={data.lightIcon} className={style.lightIcon} />
                                                    <br />
                                                    <p className={style.title}>{data.title}</p><br /><br />
                                                    <small className={style.information}>{data.shortDescription}</small>
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
