import React from "react";
import "./ourmenu.css";
import menu1 from "../assets/h8_menulist1.jpg";
import menu2 from "../assets/h8_menulist2.jpg";
import menu3 from "../assets/h8_menulist3.jpg";
import menu4 from "../assets/h8_menulist4.jpg";
import menu5 from "../assets/h8_menulist5.jpg";
import menu6 from "../assets/h8_menulist6.jpg";
import menu7 from "../assets/h8_menulist12.jpg";
import menu8 from "../assets/h8_menulist7.jpg";
import menu9 from "../assets/h8_menulist8.jpg";
import menu10 from "../assets/h8_menulist11.jpg";
import menu11 from "../assets/h8_menulist9.jpg";
import menu12 from "../assets/h8_menulist10.jpg";

import menuImg1 from "../assets/h8_img9.png";
import menuImg2 from "../assets/h8_img10.png";

const OurMenu = () => {
  return (
    <div className="ourMenu">
      <img className="menuImg1" src={menuImg1} alt="" />
      <img className="menuImg2" src={menuImg2} alt="" />

      <div className="ourMenuHead">
        <p className="ourMenuHead1"> Our Menu</p>
        <p className="ourMenuHead2">Mr.eats menu board</p>
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
                  <p className="ourMenuMain1MenuInfoTitle2">#5,700</p>
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
                  <p className="ourMenuMain1MenuInfoTitle2">#8,500</p>
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
                  <p className="ourMenuMain1MenuInfoTitle2">#13,600</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ourMenuMain1">
          <div className="ourMenuMain1Head">
            <p>Kids Menu :</p>
          </div>
          <div className="ourMenuMain1All">
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu4} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">Mostep Taco</p>
                  <p className="ourMenuMain1MenuInfoTitle2">#6,000</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu5} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">Chocolate Shake</p>
                  <p className="ourMenuMain1MenuInfoTitle2">#4,900</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu6} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">Ice Cream</p>
                  <p className="ourMenuMain1MenuInfoTitle2">#4,300</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ourMenuMain1">
          <div className="ourMenuMain1Head">
            <p>Burgers :</p>
          </div>
          <div className="ourMenuMain1All">
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu7} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">Bacon Burger</p>
                  <p className="ourMenuMain1MenuInfoTitle2"> #4,000</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu8} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">
                    Double Cheese Burger
                  </p>
                  <p className="ourMenuMain1MenuInfoTitle2">#5,600</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu9} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">Seafood Burger</p>
                  <p className="ourMenuMain1MenuInfoTitle2">#3,200</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ourMenuMain1">
          <div className="ourMenuMain1Head">
            <p>Chicken :</p>
          </div>
          <div className="ourMenuMain1All">
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu10} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">Chicken Crispy</p>
                  <p className="ourMenuMain1MenuInfoTitle2">#9,200</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu11} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">Fried Thigh</p>
                  <p className="ourMenuMain1MenuInfoTitle2">#6,500</p>
                </div>
                <div className="ourMenuMain1MenuInfoLine"></div>
                <div className="ourMenuMain1MenuInfoCombo">
                  <p>Burger, coke, fries, chicken nuggets</p>
                </div>
              </div>
            </div>
            <div className="ourMenuMain1Menu">
              <div className="ourMenuMain1MenuImg">
                <img src={menu12} />
              </div>
              <div className="ourMenuMain1MenuInfo">
                <div className="ourMenuMain1MenuInfoTitle">
                  <p className="ourMenuMain1MenuInfoTitle1">Teriyaki</p>
                  <p className="ourMenuMain1MenuInfoTitle2">#4,800</p>
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
