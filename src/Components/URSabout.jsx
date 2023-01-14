import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "../assets/css/URSabout.module.css";
import about from "../assets/images/about.jpg";
import { URSdataAbout } from '../Data/URSdataAbout';


const URSabout = () => {
    return (
        <div className={style.URSabout}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className={style.leftSide}>
                            <h1 className={style.title}>Biz kimiz?<br />Ne yapıyoruz?</h1>
                            <div className={style.leftSideInformation}>
                                <p className={style.shortDescription}>Eduplan student consultancy is one of the renowned international education consultancy firms which assisting overseas students</p>
                                <p className={style.shortDescription}>The head office of Eduplan is located in India which helps all Indian students to get admission into top-ranked universities from the United Kingdom, USA, Australia, Canada,Germany and Sweden. At the same time, we have a very strong relationship with our partner Malaysian, Cyprus and Chinese Universities.</p>

                                <div className={style.icons}>
                                    <ul className={style.list}>
                                        {
                                            URSdataAbout.map(result => {
                                                return (
                                                    <li key={result.id} className={style.listItem}>
                                                        <div className={style.icon}>
                                                            {result.icon}
                                                        </div>
                                                        <div className={style.descriptions}>
                                                            <p className={style.description}>{result.text}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>
                            <div className={style.goToPortfolioButton}>
                                <NavLink to={'/URSportfolioPage'} className={style.goToPortfolioButtonLink}>Portfolioya git</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className={style.rightSide}>
                            <img src={about} alt="" className={style.rightSideImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default URSabout;