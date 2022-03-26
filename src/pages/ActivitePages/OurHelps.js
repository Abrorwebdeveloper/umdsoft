import React from "react";
import "./OurHelps.scss";
import Img1 from "./img/img1.svg";
import Img2 from "./img/img2.svg";
import Img3 from "./img/img3.svg";
import MyButton from "../../components/UI/button/MyButton";

function OurHelps() {
  return (
    <div className="servicesSection">
      <div className="ourServices">
        <div className="box1">
          <div className="boxContent">
            <img src={Img1} />
            <h3 className="title">Daromadni oshirish</h3>
            <p className="paragraph">
              Sizning biznesingiz o'rganiladi va avtomatlashtiriladi
            </p>
          </div>
          <div className="boxContent">
            <img src={Img2} />
            <h3 className="title">Xavfsizlik nazorati</h3>
            <p className="paragraph">
              Yuqori darajadagi xavfsizlikni nazorat qilish tizimlari
            </p>
          </div>
        </div>
        <div className="box2">
          <div className="boxContent">
            <img src={Img3} />
            <h3 className="title">Kreativ g’oya</h3>
            <p className="paragraph">
              Biz ijodiy ishlaymiz va foydalanuvchilarga qulay tizimlarni
              yaratamiz
            </p>
            
          </div>
          <MyButton className="blackBtn">3 yil tajriba</MyButton>
        </div>
        <div className="boxContentRight">
          <h3 className="contentTitle">
            Eng yaxshi xizmatni taqdim etishga harakat qilamiz
          </h3>
          <p className="contentParagraph">
            Bizning kompaniyamiz bilan biznesingizni avtomatlashtirib, yanada
            rivojlantiring
          </p>
          <MyButton className="servicesBtn">Xizmatlar</MyButton>
        </div>
      </div>
    </div>
  );
}

export default OurHelps;
