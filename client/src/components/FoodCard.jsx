import "./foodcard.css";
import React, { useState } from "react";
import shopCardImg from "../assets/53-1-450x450.png";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FoodCard = (props) => {
  const [shopCardOver, setShopCardOver] = useState(false);
  const [shopCardImgOver, setShopCardImgOver] = useState(false);

  const navigateTo = useNavigate();

  const handleFoodCardClick = (id) => {
    navigateTo(`/menupreview/${id}`);
  };

  return (
    <div>
      <div
        onMouseEnter={() => {
          setShopCardOver(!shopCardOver);
          setShopCardImgOver(!shopCardImgOver);
        }}
        onMouseLeave={() => {
          setShopCardOver(!shopCardOver);
          setShopCardImgOver(!shopCardImgOver);
        }}
        className="shopCardMainFav1"
      >
        <p className="shopCardMainFav1Sale">Sale!</p>
        <div className="shopCardMainFav1Heart">
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="shopCardMainFav1ImgDiv">
          <div
            className={
              shopCardOver
                ? "shopCardMainFav1ImgHovOver"
                : "shopCardMainFav1ImgHov"
            }
          ></div>
          <img
            className={shopCardImgOver ? "shopfoodImageOver" : "shopfoodImage"}
            src={props.menuImage}
          />
        </div>
        <div className="shopCardMainFav1Star">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={
                index < props?.rating ? "foodCardStar" : "foodCardStar2"
              }
            />
          ))}
        </div>
        <div className="shopCardMainFav1TitleDiv">
          <p
            onClick={() => handleFoodCardClick(props.menuId)}
            className="shopCardMainFav1Title1"
          >
            {props.item}
          </p>
          <p className="shopCardMainFav1Title2">{props.info}</p>
        </div>
        <div className="shopCardMainFav1PriceDiv">
          <div className="shopCardMainFav1PriceDiv1">
            <p className="shopCardMainFav1Price2">{`#${parseInt(
              props.price
            ).toLocaleString()}`}</p>
          </div>
          <div
            className="shopCardMainFav1PriceDiv2"
            onClick={() => {
              props.updateCart(props.menu);
            }}
          >
            <i className="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
