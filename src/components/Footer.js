import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";
import Logo from "../assets/logo.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Navigation from "../assets/navigation.svg";
import Youtube from "../assets/youtube.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footerMenu">
        <img src={Logo} className="logo" />
        <div className="footerMenu">
          <ul className="pages">
            <li>Sahifalar</li>
            <li>
              <Link to="/">Tadbirlar</Link>
            </li>
            <li>
              <Link to="/">O’quv dasturlar</Link>
            </li>
            <li>
              <Link to="/">Ish topish</Link>
            </li>
          </ul>
          <ul className="directions">
            <li>Yo’nalishlar</li>
            <li>
              <Link to="/">Dasturlash</Link>
            </li>
            <li>
              <Link to="/">Marketing</Link>
            </li>
            <li>
              <Link to="/">Dizayn</Link>
            </li>
          </ul>
          <ul className="directions">
            <li>
              <Link to="/">Tadbirlar</Link>
            </li>
            <li>
              <Link to="/">O’quv dasturlar</Link>
            </li>
            <li>
              <Link to="/">Ish topish</Link>
            </li>
          </ul>
          <ul className="callCenter">
            <li>Call center</li>
            <li>+998-00-000-00-00</li>
          </ul>
          <ul className="Tashkent">
            <li>Tashkent</li>
            <li>+998-00-123-45-67</li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          <span>Barcha huquqlardan himoyalangan</span>
          <span>&copy;Edulife, 2021</span>
        </p>
        <div className="socialNetwork">
          <Link to="/">
              <img src={Instagram}/>
          </Link>
          <Link to="/">
              <img src={Facebook}/>
          </Link>
          <Link to="/">
              <img src={Navigation}/>
          </Link>
          <Link to="/">
              <img src={Youtube}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
