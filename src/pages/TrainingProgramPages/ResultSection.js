import React from "react";
import ArrowImg from "./images/arrov.svg";
import resultImg from "./images/resultImg.svg";
import "./ResultSection.scss"

function ResultSection() {
  return (
    <div className="resultSection">
      <h2>Natija</h2>
      <div className="sectionBox">
        <div className="sectionContent">
          <h1 className="resultTitle">
            Lorem ipsum dolor sit amet consec amet dolor sit colo
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur Lorem ipsum.
          </p>
          <div className="btns">
            <a className="coureWriting" href="#">
              Kursga yozilish
            </a>
            <a className="coureWatching" href="#">
              <img src={ArrowImg} />
              <span>Videoni ko’rish</span>
            </a>
          </div>

          <ul className="resultNumber">
            <li>
              <h2>94K</h2>
              <p>ishga joylashgan</p>
            </li>
            <li>
              <h2>15K</h2>
              <p>O’qiyotgan</p>
            </li>
            <li>
              <h2>2K+</h2>
              <p>O’qiyotgan</p>
            </li>
          </ul>
        </div>
        <div className="sectionimg">
          <img src={resultImg} />
        </div>
      </div>
    </div>
  );
}

export default ResultSection;
