import React from "react";
import "./menucard.css";
import { FaStar } from "react-icons/fa";

const MenuCard = (props) => {
  return (
    <div className="menuMain1">
      <div className="menuMain1Sub">
        <div className="menuMain1Sub1">
          <img src={props.menuImage} alt="" />
        </div>
        <div className="menuMain1Sub2">
          <p className="menuMain1Sub2-1">{props.menuItem}</p>
          <div className="menuMain1Sub2Star">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={
                  index < props?.rating ? "foodCardStar" : "foodCardStar2"
                }
              />
            ))}
          </div>
          <p className="menuMain1Sub2-2">{props.menuInfo}</p>
          <p className="menuMain1Sub2-3">{`#${parseInt(
            props.menuPrice
          ).toLocaleString()}`}</p>
        </div>
        <div
          onClick={() => props.updateCart(props.menu)}
          className="menuBasket"
        >
          <i className="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
