import React from "react";
import MyInput from "../UI/input/MyInput";
import "./JoinCourse.scss";

function JoinCourse() {
  return (
    <div className="joinCourse">
      <div className="contentTitle">
        <h3>Kurslarimizga yoziling</h3>
        <p>
          Trening boshlanishi: <span>13 dekabr</span> <br /> davomiyligi: 2 oy{" "}
        </p>
      </div>
      <form className="contentInput">
        <label>Ism</label>
        <MyInput
          className="input"
          type="name"
          placeholder="Ismingizni yozing..."
        />
        <label>Telofon raqam</label>
        <MyInput className type="tel" placeholder="+998-00-000-00-00" />
        <button>Batafsil ma’lumot</button>
      </form>
    </div>
  );
}

export default JoinCourse;
