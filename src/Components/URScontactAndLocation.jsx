import React from "react";
import { branchTurkey } from "../Data/URSdataContact";
import { branchAzerbaijan } from "../Data/URSdataContact";
import style from "../assets/css/URScontactAndLocation.module.css";

function Contact() {
  return (
    <div className={style.URScontactAndLocation}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className={style.URScontactMarginThirteenPixel}>
              <div className={style.URScontactGetInTouch}>
                <div className={style.URScontactGetInTouchTitle}>
                  <h4 className={style.officeName}>Türkiye ofisimiz</h4>
                </div>
                <div className={style.getInTouchBlog}>
                  <ul className={style.getInTouchBlogAbout}>
                    {branchAzerbaijan.map((result) => {
                      return (
                        <li className={style.blogList} key={result.id}>
                          <div className={`${style.blogIcon} ${result.class}`}>
                            {result.icon}
                          </div>
                          <div className={style.blogData}>
                            <span><a href="https://www.google.com/maps/place/Mimar+Sinan,+34672+%C3%9Csk%C3%BCdar%2F%C4%B0stanbul,+Turkey/@41.0240135,28.9996381,15z/data=!3m1!4b1!4m5!3m4!1s0x14cab789465c43a1:0x7aa9516e109affa4!8m2!3d41.0231502!4d29.021261" target={'_blank'}>{result.adress}</a></span>
                            <span>{result.email}</span>
                            <span>{result.phoneNumber}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className={style.URScontactMarginThirteenPixel}>
              <div className={style.URScontactMapLocation}>
                <iframe className={style.map} src="https://maps.google.com/maps?q=Aff%20Mall&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className={style.URScontactMarginThirteenPixel}>
              <div className={style.URScontactGetInTouch}>
                <div className={style.URScontactGetInTouchTitle}>
                  <h4 className={style.officeName}>Azerbaycan ofisimiz</h4>
                </div>
                <div className={style.getInTouchBlog}>
                  <ul className={style.getInTouchBlogAbout}>
                    {branchTurkey.map((result) => {
                      return (
                        <li className={style.blogList} key={result.id}>
                          <div className={`${style.blogIcon} ${result.class}`}>
                            {result.icon}
                          </div>
                          <div className={style.blogData}>
                            <span><a href="https://www.google.com/maps/place/37a+Subhi+Salayev,+Bak%C4%B1+1065,+Azerbaijan/@40.3834292,49.8314676,17z/data=!3m1!4b1!4m5!3m4!1s0x40307d9ed5d3fe89:0x9452e793e2b0c4da!8m2!3d40.3834251!4d49.8336563" target={'_blank'}>{result.adress}</a></span>
                            <span>{result.email}</span>
                            <span>{result.phoneNumber}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className={style.URScontactMarginThirteenPixel}>
              <div className={style.URScontactMapLocation}>
                <iframe className={style.map} src="https://maps.google.com/maps?q=burj%20khalifa&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
