import React from "react";
import "./topBody.css";
import { BsTelephone } from "react-icons/bs";
import italiaFood from "../assets/rev_home8_6.png";
import italiaFoodBack from "../assets/rev_home8.png";
import italiLeaveRotate from "../assets/rev_home8_1.png";
import italiLeave from "../assets/rev_home8_7.png";
import italiTomatoes from "../assets/rev_home8_4.png";
import italiChili from "../assets/rev_home8_5.png";

const TopBody = () => {
  return (
    <div className="topBodyDiv">
      <div className="mainTopBody">
        <div className="mainTopBodyText">
          <div className="mainTopBodyTextTop">
            <p className="mainTopBodyTextTop1">ITALIAN FOOD</p>
            <p className="mainTopBodyTextTop2">WITH SPECIAL SAUCE</p>
            <p className="mainTopBodyTextTop3">
              Italian food with special sauce is a flavour you can find only in
              POCO.
            </p>
          </div>
          <div className="mainTopBodyTextMid">
            <button>ORDER NOW</button>
          </div>
          <div className="mainTopBodyTextBut">
            <span className="mainTopBodyTextBut1">
              <BsTelephone />
            </span>
            <div className="mainTopBodyTextBut2">
              <p className="mainTopBodyTextBut2Top">Quick order 24/7</p>
              <p className="mainTopBodyTextBut2But">+1 718-904-4450</p>
            </div>
          </div>
        </div>
        <div className="mainTopBodyImage">
          <img className="mainTopBodyImage1" src={italiaFood} alt="" />
          <img className="mainTopBodyImage2" src={italiaFoodBack} alt="" />
          <img className="mainTopBodyImage3" src={italiLeaveRotate} alt="" />
          <img className="mainTopBodyImage4" src={italiTomatoes} alt="" />
          <img className="mainTopBodyImage6" src={italiLeave} alt="" />
        </div>
        <img className="mainTopBodyImage5" src={italiChili} alt="" />
      </div>
    </div>
  );
};

export default TopBody;
