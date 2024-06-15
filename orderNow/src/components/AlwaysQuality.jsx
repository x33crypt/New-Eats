import React from "react";
import "./alwaysquality.css";
import { CiCoffeeCup } from "react-icons/ci";
import { GiChickenOven } from "react-icons/gi";
import alwaysQRightImg1 from "../assets/h8_img4.png";
import alwaysQRightImg2 from "../assets/h8_img7.png";
import alwaysQRightImg3 from "../assets/h8_img5.png";
import alwaysQRightImg4 from "../assets/h8_img8.png";
import alwaysQRightImg5 from "../assets/h8_img6.png";

const AlwaysQuality = () => {
  return (
    <div className="alwaysQ">
      <div className="alwaysQLeft">
        <div className="alwaysQLeftHead">
          <p className="alwaysQLeftHead1">Always Quality</p>
          <p className="alwaysQLeftHead2">The best quality for your health</p>
          <p className="alwaysQLeftHead3">
            Each freshly meal is perfectly sized for one person to enjoy at one
            sitting. Out fully prepared meals are delivered fresh, and ready to
            eat in 3 minutes.
          </p>
        </div>
        <div className="alwaysQLeftChoose1">
          <div className="alwaysQLeftChoose1Img">
            <span>
              <CiCoffeeCup />
            </span>
          </div>
          <div className="alwaysQLeftChoose1Txt">
            <p className="alwaysQLeftChoose1Txt1">Choose your meal</p>
            <p className="alwaysQLeftChoose1Txt2">80+ menus to choose from</p>
          </div>
        </div>
        <div className="alwaysQLeftChoose2">
          <div className="alwaysQLeftChoose2Img">
            <span>
              <GiChickenOven />
            </span>
          </div>
          <div className="alwaysQLeftChoose2Txt">
            <p className="alwaysQLeftChoose2Txt1">Authentical product</p>
            <p className="alwaysQLeftChoose2Txt2">
              Keep healthy and regulate immune system
            </p>
          </div>
        </div>
        <div className="alwaysQLeftBtn">
          <button>DISCOVER NOW</button>
        </div>
      </div>
      <div className="alwaysQRight">
        <img className="alwaysQRightImg1" src={alwaysQRightImg1} alt="" />
        <img className="alwaysQRightImg2" src={alwaysQRightImg2} alt="" />
        <img className="alwaysQRightImg3" src={alwaysQRightImg3} alt="" />
        <img className="alwaysQRightImg4" src={alwaysQRightImg4} alt="" />
        <img className="alwaysQRightImg5" src={alwaysQRightImg5} alt="" />
      </div>
    </div>
  );
};

export default AlwaysQuality;
