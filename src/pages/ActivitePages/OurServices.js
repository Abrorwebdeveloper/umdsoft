import React from "react";
import Busines from "./img/busines.svg";
import WebIcon from "./img/webIcon.svg";
import Dasturiy from "./img/dasturiy.svg";
import Marketing from "./img/marketing.svg";
import Integration from "./img/integration.svg";
import Smm from "./img/smm.svg";
import "./OurServices.scss"

function OurServices() {
  return (
    <div className="OurServices">
      <ul className="listServices">
        <li>
            <img src={Busines}/>
            <h3>Biznes tahlili</h3>
        </li>
        <li>Sizning biznesingiz tekshiriladi va siz <br/> uchun foydali dasturiy ta'minot yaratiladi.</li>
      </ul>
      <ul className="listServices">
        <li>
            <img src={WebIcon}/>
            <h3>Veb sayt</h3>
        </li>
        <li>Sizning biznesingiz o'rganiladi va siz <br/> uchun foydali bo'lgan veb-sayt yaratiladi.</li>
      </ul>
      <ul className="listServices">
        <li>
            <img src={Dasturiy}/>
            <h3>Dasturiy ta'minot</h3>
        </li>
        <li>Sizning biznesingiz o'rganiladi va siz <br/> uchun foydali bo'lgan veb-sayt yaratiladi.</li>
      </ul>
      <ul className="listServices">
        <li>
            <img src={Marketing}/>
            <h3>Marketing</h3>
        </li>
        <li>Google reklama, Yandex Direct Ish  marketing strategiyasiga asoslangan.</li>
      </ul>
      <ul className="listServices">
        <li>
            <img src={Integration}/>
            <h3>Integration</h3>
        </li>
        <li>Biz to'lov tizimlari (Payme, Click), Ijtimoiy tarmoqlar, SMS xizmatlarini ulaymiz.</li>
      </ul>
      <ul className="listServices">
        <li>
            <img src={Smm}/>
            <h3>Smm</h3>
        </li>
        <li>Biz siz uchun ijtimoiy tarmoqlar uchun individual SMM dizaynini yaratamiz.</li>
      </ul>
    </div>
  );
}

export default OurServices;
