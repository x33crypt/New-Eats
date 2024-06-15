import React from "react";
import "./hotFresh.css";
import FoodCard from "./FoodCard";

const HotFresh = () => {
  return (
    <div className="hotFresh">
      <div className="hotFreshHead">
        <p className="hotFreshHeadTitle1">Hot Fresh</p>
        <p className="hotFreshHeadTitle2">Shop our favourites</p>
      </div>
      <div className="hotFreshMain">
        <div className="hotFreshToggleL">
          <i class="fa-solid fa-angle-left"></i>
        </div>
        <div className="hotFreshMainFav">
          <FoodCard />
        </div>
        <div className="hotFreshToggleR">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default HotFresh;
