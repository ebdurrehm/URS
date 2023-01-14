import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import style from "../assets/css/URSportfolio.module.css"
import { URSdataPortfolio } from '../Data/URSdataPortfolio';
import { Link, NavLink } from 'react-router-dom';


export default function PortfolioComponent() {
    let element = {
        portfolioComponentContent: <div className={style.URSportfolio}>
            <div className="container">
                <div className="row">

                    {
                        URSdataPortfolio.map((content, index) => {
                            return (
                                <div className="col-6 col-md-4 col-lg-3" key={index}>
                                    <NavLink to={`/URSportfolioPage/:${content.text}`} >

                                        <div className={style.URSportfolioExample}>
                                            <div className={style.example}>
                                                <div className={style.examplePhoto}>
                                                    <img src={content.source} className={style.image} alt="portfolio" />
                                                </div>
                                                <div className={style.brandAndService}>
                                                    <h3 className={style.brandAndServiceName}>
                                                        <span className={style.brandName}>{content.text}</span><span className={style.serviceName}>{content.service}</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>

                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    }
    return (
        <>
            {element.portfolioComponentContent}
        </>

    )
}
