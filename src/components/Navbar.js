import React from "react";
import Logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import ruFlag from "../assets/ru.svg";
import MyButton from "./UI/button/MyButton";
import "../styles/Navbar.scss";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <Link to="/"><img className="logo" src={Logo} /></Link>

        <div className="hiddenLinks">
          <NavLink to="/">Tadbirlar</NavLink>
          <NavLink to="/findjob">O’quv dasturlar</NavLink>
          <NavLink to="/trainingprograms">Ish topish</NavLink>
        </div>
        <div className="navRight">
          <div className="changeLanguage">
            <img src={ruFlag} />
            <span>RU</span>
          </div>
          <div className="contactUs">
            <span>+998-00-000-00-00</span>
            <MyButton className="btnEnter">Kirish</MyButton>
            <MyButton className="signUp">Ro’yxatdan o’tish</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
