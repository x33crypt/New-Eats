import React from "react";
import "./foodcard.css";
import hotFreshMainFav1Img from "../assets/53-1-450x450.png";

const FoodCard = () => {
  return (
    <div>
      <div className="hotFreshMainFav1">
        <p className="hotFreshMainFav1Sale">Sale!</p>
        <div className="hotFreshMainFav1Heart">
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="hotFreshMainFav1ImgDiv">
          <div className="hotFreshMainFav1ImgHov"></div>
          <img className="foodImage" src={hotFreshMainFav1Img} alt="" />
        </div>
        <div className="hotFreshMainFav1Star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <div className="hotFreshMainFav1TitleDiv">
          <p className="hotFreshMainFav1Title1">Vegge Lover</p>
          <p className="hotFreshMainFav1Title2">
            Extra-virgin olive oil, garlic, mozzarella cheese, onions,...
          </p>
        </div>
        <div className="hotFreshMainFav1PriceDiv">
          <div className="hotFreshMainFav1PriceDiv1">
            <p className="hotFreshMainFav1Price1"> &#36;15.20</p>
            <p className="hotFreshMainFav1Price2"> &#36;14.99</p>
          </div>
          <div className="hotFreshMainFav1PriceDiv2">
            <i className="fa-solid fa-basket-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
