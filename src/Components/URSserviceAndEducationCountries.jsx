import React from 'react';
import { country } from '../Data/URSdataServiceAndEducationCountries';
import style from "../assets/css/URSserviceAndEducationCountries.module.css";

const Countries = () => {
    return (
        <div className={style.URSserviceAndEducationCountries}>
            <div className="container">
                <div className={style.URSserviceAndEducationCountriesTitles}>
                    <div className={style.URSheaderServiceAndEducationCountries}>
                        <div className={style.titles}>
                            <h2 className={style.titleFiftyPixel}>Hizmet & eğitim</h2>
                            <h2 className={style.titleFiftyPixelLight}>verdiğimiz ülkeler</h2>
                        </div>
                    </div>
                </div>
               <div className={style.URSserviceAndEducationCountriesContent}>
               <div className="row">
                    {
                        country.map((content, index) => {
                            return (
                                <div className={`col-lg-2 col-6 ${style.URSserviceAndEducationCountriesItem}`} key={index}>
                                    <div className={style.URScountryServiceAndEducationCountries}>
                                        <img src={content.source} alt="" />
                                        <p className={style.countryName}>{content.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
               </div>
            </div>
        </div>
    )
}

export default Countries
