import React from "react";
import "./ourmenu.css";
import menu1 from "../assets/h8_menulist1.jpg";
import menu2 from "../assets/h8_menulist2.jpg";
import menu3 from "../assets/h8_menulist3.jpg";
import menuImg1 from "../assets/h8_img9.png";

const OurMenu = () => {
  return (
    <div className="ourMenu">
      <img className="menuImg1" src={menuImg1} alt="" />
      <div className="ourMenuHead">
        <p className="ourMenuHead1"> Our Menu</p>
        <p className="ourMenuHead2">Poco's menu board</p>
      </div>
      <div className="ourMenuMain">
        <div className="ourMenuMain1">
          <div className="ourMenuMain1Head">
            <p>Special Combo :</p>
          </div>
          <div className="ourMenuMain1All">
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu1} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">
                    Happy Lunch Combo
                  </p>
                  <p className="ourMenuMain1MenuInfoTitle2"> &#36;4.95</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu2} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">Weekend Combo</p>
                  <p className="ourMenuMain1MenuInfoTitle2"> &#36;13.95</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu3} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">Family Combo</p>
                  <p className="ourMenuMain1MenuInfoTitle2"> &#36;33.95</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
