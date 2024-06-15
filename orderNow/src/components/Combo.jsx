import React from "react";
import "./combo.css";
import comboPizza1 from "../assets/h8_banner-img1.png";
import comboPizza2 from "../assets/h8_banner-img4.png";
import comboPizza3 from "../assets/h8_banner-img5.png";

const Combo = () => {
  return (
    <div className="comboTopBody">
      <div className="comboTopTop">
        <div className="comboTopBody1">
          <img className="comboPizza" src={comboPizza1} alt="" />
          <div className="comboTopBodyCont">
            <div className="comboTopBody1Title">
              <p>SPECIAL FOR YOU MONSTER PIZZA</p>
            </div>
            <div className="comboTopBody1Btn">
              <button>ORDER NOW</button>
            </div>
          </div>
        </div>
        <div className="comboTopBody2">
          <img className="comboPizza3" src={comboPizza2} alt="" />
          <div className="comboTopBodyCont2">
            <div className="comboTopBody2Title">
              <p>BUGER COMBO</p>
            </div>
            <div className="comboTopBody1Btn2">
              <p>3.90 ONLY</p>
              <button>ORDER NOW</button>
            </div>
          </div>
        </div>
        <div className="comboTopBody3">
          <img className="comboPizza" src={comboPizza3} alt="" />
          <div className="comboTopBodyCont">
            <div className="comboTopBody3Title">
              <p className="comboTopBody3Title1">Delicious</p>
              <p className="comboTopBody3Title2">FOOD MENU</p>
              <p className="comboTopBody3Title3">This weekend only</p>
            </div>
            <div className="comboTopBody1Btn">
              <button>ORDER NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="comboTopBottom">
        <div className="comboTopBottomMain">
          <div className="comboTopBottom1">
            <div className="comboTopBottom1Select">
              <select name="" id="">
                <option value="">1 People</option>
                <option value="">2 People</option>
                <option value="">3 People</option>
                <option value="">4 People</option>
              </select>
              <div className="comboTopBottom1SelectIcon">
                <i class="fa-solid fa-caret-down"></i>
              </div>
            </div>
            <input type="date" placeholder="yy/mm/dd" />
            <input type="time" placeholder="00:00 AM" />
            <div className="comboTopBottomBtn">
              <button>BOOK A TABLE</button>
            </div>
          </div>
          <div className="comboTopBottom2">
            <p>
              Booking request <span>+39-055-123456</span> or fill out the order
              form
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combo;
