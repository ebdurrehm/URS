import style from '../assets/css/URSserviceAndEducationDetail.module.css';
import { NavLink, useParams } from 'react-router-dom';
import { dataServiceAndEDucation } from '../Data/URSdataServiceAndEducation';
import React from 'react';
import URSmobileHeader from './URSmobileHeader';
import ApplyForm from './URSapplyForm';
import URSscrollHeader from './URSscrollHeader';
import BreadcumpStyle from '../assets/css/Breadcump.module.css';
import URSfooter from '../Components/URSfooter';

export default function URSserviceAndEducationDetail() {
    window.scrollTo(0, 0);
    const detail = useParams();
    console.log(detail.detail.slice(1))
    let filteredData = [];
    return (
        <div className={style.URSserviceAndEducationDetail}>
            <div className={BreadcumpStyle.breadcump}>
                <NavLink to={'/'}>Ana sayfa</NavLink>/
                <NavLink to={'/'}>Hizmet & Eğitim</NavLink>/
                {
                    dataServiceAndEDucation.map(item => {
                        if (detail.detail.slice(1) == item.title) {
                            return <NavLink key={item.title} className={BreadcumpStyle.active}>{item.title}</NavLink>
                        }
                    })
                }
            </div>


            <div className={style.serviceDetail}>

                <URSmobileHeader />
                <URSscrollHeader />

                <div className="container">
                        {
                            dataServiceAndEDucation.map((item, index) => {
                                if (detail.detail.slice(1) == item.title) {
                                    return <div className="row" key={index}>

                                        <div className={`col-12 col-lg-6 ${style.serviceDetailImg}`}>
                                                <img src={item.source} alt="" width={550} />
                                            </div>
                                        <div className={`col-12 col-lg-6 ${style.ServiceTexts}`}>
                                                <h2 className={style.title}>{item.title}</h2>
                                                <p className={style.information}>
                                                    {item.information}
                                                </p>
                                        </div>

                                    </div>
                                } else {
                                    filteredData.push(item)
                                }
                            })
                        }

                        <div className={style.otherServiceExamples}>
                                <div className={style.titles}>
                                    <h2 className={style.titleFiftyPixelLight}>diğer</h2>
                                    <h2 className={style.titleFiftyPixel}>hizmet & eğitim</h2>
                                    <h2 className={style.titleFiftyPixelLight}>alanları</h2>
                                </div>

                            <div className={style.otherServiceAndEducation}>
                            {
                                filteredData.map(data => {
                                    return  <div className={`col-lg-4 col-md-12 ${style.serviceAndEducation}`} key={data.id}>
                                    <NavLink to={`/URSserviceAndEducationDetail/:${data.title}`} key={data.title}>
                                            <p className={style.title}>{data.title}</p>
                                    </NavLink>
                                </div>
                                })
                            }   
                            </div>

                        </div>
                </div>
            </div>
            <ApplyForm />
            <URSfooter />
        </div>
    )
}
