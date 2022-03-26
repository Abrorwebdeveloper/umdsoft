import React, { Component } from "react";
import Slider from "react-slick";
import "./Feedback.scss";
import people from "./img/people.svg";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="feedbacks">
        <div>
          <h2 className="mainTitle">Mijozlarimizdan ba’zi fikrlar</h2>
          <Slider className="boxs" {...settings}>
            <div className="box">
              <ul>
                <li>
                  <img src={people} />
                </li>
                <li>
                  <h2>Umidbek Jumaniyozov</h2>
                  <p>UMDSOFT.uz</p>
                </li>
              </ul>
              <p>
                Sayt judayam a’lo har taraflama zo’r chiqqan dizayn jihatdanam
                ishlash tezligi jihatdanam zo’r chiqqan
              </p>
            </div>
            <div  className="box">
              <ul>
                <li>
                  <img src={people} />
                </li>
                <li>
                  <h2>Umidbek Jumaniyozov</h2>
                  <p>UMDSOFT.uz</p>
                </li>
              </ul>
              <p>
                Sayt judayam a’lo har taraflama zo’r chiqqan dizayn jihatdanam
                ishlash tezligi jihatdanam zo’r chiqqan
              </p>
            </div>
            <div  className="box">
              <ul>
                <li>
                  <img src={people} />
                </li>
                <li>
                  <h2>Umidbek Jumaniyozov</h2>
                  <p>UMDSOFT.uz</p>
                </li>
              </ul>
              <p>
                Sayt judayam a’lo har taraflama zo’r chiqqan dizayn jihatdanam
                ishlash tezligi jihatdanam zo’r chiqqan
              </p>
            </div>
            <div  className="box">
              <ul>
                <li>
                  <img src={people} />
                </li>
                <li>
                  <h2>Umidbek Jumaniyozov</h2>
                  <p>UMDSOFT.uz</p>
                </li>
              </ul>
              <p>
                Sayt judayam a’lo har taraflama zo’r chiqqan dizayn jihatdanam
                ishlash tezligi jihatdanam zo’r chiqqan
              </p>
            </div>
            <div  className="box">
              <ul>
                <li>
                  <img src={people} />
                </li>
                <li>
                  <h2>Umidbek Jumaniyozov</h2>
                  <p>UMDSOFT.uz</p>
                </li>
              </ul>
              <p>
                Sayt judayam a’lo har taraflama zo’r chiqqan dizayn jihatdanam
                ishlash tezligi jihatdanam zo’r chiqqan
              </p>
            </div>
            <div  className="box">
              <ul>
                <li>
                  <img src={people} />
                </li>
                <li>
                  <h2>Umidbek Jumaniyozov</h2>
                  <p>UMDSOFT.uz</p>
                </li>
              </ul>
              <p>
                Sayt judayam a’lo har taraflama zo’r chiqqan dizayn jihatdanam
                ishlash tezligi jihatdanam zo’r chiqqan
              </p>
            </div>
            <div  className="box">
              <ul>
                <li>
                  <img src={people} />
                </li>
                <li>
                  <h2>Umidbek Jumaniyozov</h2>
                  <p>UMDSOFT.uz</p>
                </li>
              </ul>
              <p>
                Sayt judayam a’lo har taraflama zo’r chiqqan dizayn jihatdanam
                ishlash tezligi jihatdanam zo’r chiqqan
              </p>
            </div>
          </Slider>
        </div>
       
      </div>
    );
  }
}
