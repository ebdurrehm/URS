import React from 'react';
import style from '../assets/css/URSyoutubeVideos.module.css';
import { NavLink } from 'react-router-dom';

const URSyoutubeVideos = () => {
    return (
        <div className={style.URSyoutubeVideos}>
            <section className={style.YoutubeVideos}>
                <div className="container">
                    <div className="row">
                        <div className={`col-md-12 text-center`}>
                            <div className={style.titles}>
                            <h2 className={style.titleFiftyPixel}>en son</h2>
                            <h3 className={style.titleFiftyPixelLight}>youtube videolarımız</h3>
                        </div>
                        </div>

                        <div className={style.latestVideos}>
                            <div className="row">
                                <div className={`${style.ursYoutubeVideo} col-md-4 col-12`}>
                                    <div className={style.videoContent}><iframe src="https://www.youtube.com/embed/4xjVYZbpccQ" className={style.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
                                    <h3 className={style.videoTitle}>HELİUM 10 NASIL KULLANILIR? HELİUM 10 KULLANIMI DETAYLI ANLATIM! - AMAZON FBA EĞİTİMİ!</h3>
                                </div>

                                <div className={`${style.ursYoutubeVideo} col-md-4 col-12 `}>
                                    <div className={style.videoContent}><iframe src="https://www.youtube.com/embed/35KhJ45P6bw" className={style.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
                                    <h3 className={style.videoTitle}>HELİUM 10 NASIL KULLANILIR? HELİUM 10 KULLANIMI DETAYLI ANLATIM! - AMAZON FBA EĞİTİMİ!</h3>
                                </div>

                                <div className={`${style.ursYoutubeVideo} col-md-4 col-12 `}>
                                    <div className={style.videoContent}><iframe src="https://www.youtube.com/embed/YXctL4VkhJw" className={style.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
                                    <h3 className={style.videoTitle}>HELİUM 10 NASIL KULLANILIR? HELİUM 10 KULLANIMI DETAYLI ANLATIM! - AMAZON FBA EĞİTİMİ!</h3>
                                </div>

                                <div className={style.seeAllVideosButton}>
                                   <NavLink className={style.seeAllVideosButtonLink} to={'/URSyoutubeVideosPage'}>Tüm videolarımızı izle</NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default URSyoutubeVideos;
