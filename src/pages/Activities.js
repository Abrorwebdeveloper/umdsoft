import '../styles/Activities.scss'
import React from "react";
import MyButton from "../components/UI/button/MyButton";
import ContentImg from '../assets/contentImg.svg'
import OurHelps from './ActivitePages/OurHelps';
import OurCompany from './ActivitePages/OurCompany';
import OurServices from './ActivitePages/OurServices';
import Services from './ActivitePages/Services';
import Feedback from './ActivitePages/Feedbacks.js'

function Activities() {
  return (
    <>
      <div className="activities">
      <div className="content">
        <h2 className="title">Bizning kompaniyamiz bilan <br/> biznesingizni rivojlantiring</h2>
        <p className="paragraph">Bizning kompaniyamiz bilan biznesingizni avtomatlashtirib, <br/> yanada rivojlantiring</p>
        <div className="contentBtns">
          <MyButton className="connecting">Bog'lanish</MyButton>
          <MyButton  className="detailed">Batafsil</MyButton>
        </div>
      </div>
      <div className="contentImg">
        <img src={ContentImg}/>
      </div>
    </div>
    <OurHelps />
    <OurCompany />
    <OurServices />
    <Services />
    <Feedback />
    </>
  );
}

export default Activities;
