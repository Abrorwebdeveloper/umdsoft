import React from "react";
import "./OurCompany.scss";
import imgNike from "./img/Vector.svg";
import companyImg from "./img/companyImg.svg";

function OurCompany() {
  return (
    <div className="ourCompanySection">
      <div className="sectionContent">
        <h1 className="title">Biz eng yaxshi IT <br/> kompaniyasimiz</h1>
        <ul className="list">
          <li>
            <img src={imgNike} />
            <span>Bizning xodimlarimiz yuqori malakali.</span>
          </li>
          <li>
            <img src={imgNike} />
            <span>Biz eng yangi texnologiyalardan foydalanamiz.</span>
          </li>
          <li>
            <img src={imgNike} />
            <span>Biz eng qulay va tezkor ilovalar yaratamiz</span>
          </li>
        </ul>
        <div className="ourResults">
          <ul className="results">
            <li>
              <h1>
                48<span>+</span>
              </h1>
            </li>
            <li>Qoniqarli mijozlar</li>
          </ul>
          <ul className="results">
            <li>
              <h1>
                6<span>+</span>
              </h1>
            </li>
            <li>Mutaxassislar</li>
          </ul>
          <ul className="results">
            <li>
              <h1>
                50<span>+</span>
              </h1>
            </li>
            <li>Tugallangan ish</li>
          </ul>
        </div>
      </div>
      <div className="sectionImg">
          <img src={companyImg}/>
      </div>
    </div>
  );
}

export default OurCompany;
