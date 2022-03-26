import React from "react";
import "./CourseStructure.scss";
import StructureImg from "../TrainingProgramPages/images/structure.svg";
import PracticeImg from "../TrainingProgramPages/images/practice.svg";
import CheckCodeImg from "../TrainingProgramPages/images/checkCode.svg";
import Algaritm from "../TrainingProgramPages/images/algaritm.svg";
const arr = [
  {
    id: 1,
    img: StructureImg,
    title: "Strukturaviy nazariya",
    paragraph:
      "Har bir bo’limning boshida siz nazariyani o’rganasiz - matnli materiallar, skrinshotlar va mavzu bo’yicha maqolalar",
  },
  {
    id: 2,
    img: PracticeImg,
    title: "Amaliyot",
    paragraph:
      "Nazariyani o’rganganingizdan so’ng, siz uy vazifasini bajarasiz, unda siz loyihangiz ustida ishlaysiz va tajriba orttirasiz",
  },
  {
    id: 3,
    img: CheckCodeImg,
    title: "Kodni tekshirish",
    paragraph:
      "har bir topshiriqdan so’ng, sizning shaxsiy murabbiyingiz ish isfatini tekshiradi, tajriba almashadi va o’rgatadi",
  },
  {
    id: 4,
    img: Algaritm,
    title: "Algoritm",
    paragraph:
      "Nazariy jihatdan va amaliyot jihatdan to’liq o’zlashtirilgandan so’ng siz algoritmlarni to’liq ishlab o’rganasiz",
  },
];

function CourseStructure() {
  return (
    <div className="courseStructure">
      <div className="box">
        <h2>Kursda sizni nima kutmoqda</h2>
        <ul>
          {arr.map((item) => (
            <li className="list">
              <img src={item.img} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.paragraph}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="whoIsCourse">
        <h2 className="courseTitle">Kursda sizni nima kutmoqda</h2>
        <div className="boxInto">
          <div className="boxs">
            <h3 className="titles">Web dasturlashni 0dan boshlaganlar uchun</h3>
            <p className="paragraph">
              Web dasturlashni 0 dan pro darajagacha chiqishingizga bu kurs
              judayam katta yordam beradi.
            </p>
          </div>
          <div className="boxs">
            <h3 className="titles">
              Doimiy ish o’rniga ega bo’lishni xoxlovchilar uchun
            </h3>
            <p className="paragraph">
              Siz o’z tajribangizni oshirishni maqsad qilgan bo’lsangiz bu kurs
              aynan siz uchun, ha to’gri eshitdingiz siz uchun
            </p>
          </div>
          <div className="boxs">
            <h3 className="titles">
              Frilancer bo’lib ishlashni xoxlaganlar uchun
            </h3>
            <p className="paragraph">
              Siz bu kursimizda bemalol masofadan ishlang va o’zingiz uchun
              ishlang va dizaynda barchani hayratlantiring
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseStructure;
