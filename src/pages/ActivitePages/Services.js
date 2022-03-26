import React from "react";
import "./Services.scss";
import serviceImg from "./img/servicesImg.svg";
import MyButton from "../../components/UI/button/MyButton";

function Services() {
  return (
    <div className="activitiess">
      <div className="contentImg">
        <img src={serviceImg} />
      </div>
      <div className="content">
        <h2 className="title">
          Bizning xizmatlar
          <br /> biznesingiz uchun muhim
        </h2>
        <p className="paragraph">
        Bizning xizmatlar bilan siz o’z biznesignizni rivojlantirish bilan <br/> birga avtomatlashtirasiz.
        </p>
        <div className="contentBtns">
          <MyButton className="connecting">Bog'lanish</MyButton>
        </div>
      </div>
    </div>
  );
}

export default Services;
