import React from "react";
import { Link } from "react-router-dom";
import ImgNike from "../assets/Vector.svg";
import JoinCourse from "../components/subComponents/JoinCourse";
import "../styles/TrainingPrograms.scss";
import CourseStructure from "./TrainingProgramPages/CourseStructure"
import ResultSection from "./TrainingProgramPages/ResultSection";

function TrainingPrograms() {
  return (
    <>
      <div className="trainingprograms">
        <div className="linkLIst">
          <Link to="/">
            Bosh sahifa<span>/</span>
          </Link>
          <Link to="/">
            Yo'nalishlar<span>/</span>
          </Link>
          <Link to="/">Grafik dizayn</Link>
        </div>

        <div className="main">
          <div className="mainBox">
            <div className="content">
              <h1 className="title">
                Zamonaviy buxgalteriya hisob kursi orqali buxgalteriya kasbini
                o’rganing
              </h1>
              <p className="paragraph">
                Biz sizga yuqori darajadagi talabga ega bo’lgan buxgalteriya
                hisobi kursini taqdim etamiz bunda siz, zamonaviy buxgalteriya
                hisobi va 1C ni to’liq o’zlashtirish, mehnat haqini hisoblash,
                asosiy va aylanma vositalar hisobi, moliyaviy natijalar hisob va
                h.klarni o’rganib chiqasiz. buxgalteriya kasbini kuchli
                mentorlardan o’rganing va shu kasbni kuchli mutahasisiga
                aylaning{" "}
              </p>
            </div>
            <div className="whatLearn">
              <h3>Kursda nimalarni o’rganasiz?</h3>

              <ul className="courseList">
                <li>
                  <img src={ImgNike} />
                  <p>Pul mablag’lari va ularni ekvivalentlari hisobi</p>
                </li>
                <li>
                  <img src={ImgNike} />
                  <p>Mehnat haqini hisoblash</p>
                </li>
                <li>
                  <img src={ImgNike} />
                  <p>Asosiy va aylanma vositalar hisobi</p>
                </li>
                <li>
                  <img src={ImgNike} />
                  <p>
                    Ishlab chiqarish harajatlari hisobi va tannarx
                    kalkulyatsiyasi
                  </p>
                </li>
                <li>
                  <img src={ImgNike} />
                  <p>
                    Schetlar rejasi (buxgalteriya o’tkazmalari) bilan ishlash
                  </p>
                </li>
                <li>
                  <img src={ImgNike} />
                  <p>Moliyaviy natijalar hisobi</p>
                </li>
                <li>
                  <img src={ImgNike} />
                  <p>Soliqlar va ularning turkumlanishi </p>
                </li>
                <li>
                  <img src={ImgNike} />
                  <p>
                    Soliq hisobotlarini to’ldirish (my.soliq.uz platformasida)
                    va jo’natish tartibi
                  </p>
                </li>
              </ul>

              <ul className="timeCourse">
                <li>
                  <h3>Darslar vaqti</h3>
                  <span>Haftada 3 kun 3 soat</span>
                </li>
                <li>
                  <h3>Kafolat</h3>
                  <span>Mahsus sertifikat</span>
                </li>
              </ul>
            </div>
          </div>
          <JoinCourse />
        </div>
      </div>
      <CourseStructure />

      <ResultSection />
    </>
  );
}

export default TrainingPrograms;
