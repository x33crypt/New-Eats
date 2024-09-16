import React from "react";
import "./topBody.css";
import italiaFood from "../assets/fried-chicken.png";
import italiLeaveRotate from "../assets/rev_home8_1.png";
import italiTomatoes from "../assets/rev_home8_4.png";
import textAreaImg from "../assets/rev_home5_5.png";

const TopBody = () => {
  return (
    <div className="topBodyDiv">
        <div className="mainTopBodyText">
          <div className="mainTopBodyTextTop">
            <p className="mainTopBodyTextTop1">Hot & special</p>
            <p className="mainTopBodyTextTop2">SPICY FRIED CHICKEN</p>
            <p className="mainTopBodyTextTop3">
              Italian food with special sauce is a flavour you can find only in
              MR EATS.
            </p>
          </div>
          <div className="mainTopBodyTextBut">
            <p>
              Enjoy free delivery with min, purchase of <span>SUPER50</span>
            </p>
          </div>
          <div className="mainTopBodyTextMid">
            <button>ORDER NOW</button>
          </div>
          <img className="textAreaImg" src={textAreaImg} alt="" />
        </div>
        <div className="mainTopBodyImage">
          <img className="mainTopBodyImage1" src={italiaFood} alt="" />
          <img className="mainTopBodyImage3" src={italiLeaveRotate} alt="" />
          <img className="mainTopBodyImage4" src={italiTomatoes} alt="" />
        </div>
      
    </div>
  );
};

export default TopBody;
