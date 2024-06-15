import React from "react";
import "./specialtaste.css";
import FoodCard from "./FoodCard";
import backImg1 from "../assets/h8_img10.png";
import backImg2 from "../assets/h8_img2.png";
const SpecialTaste = () => {
  return (
    <div className="spacialTaste">
      <img className="backImg2" src={backImg2} alt="" />
      <div className="spacialTasteLeft">
        <FoodCard />
        <FoodCard />
      </div>
      <div className="spacialTasteRight">
        <div className="spacialTasteRightTxt">
          <p className="spacialTasteRightTxt1">Special Taste</p>
          <p className="spacialTasteRightTxt2">Good taste with vegetable</p>
          <p className="spacialTasteRightTxt3">
            The secret to making your vegetables taste better is to learn how to
            properly prepare them, and that goes for everything from selecting
            the right pieces of produce at the store to cooking them or putting
            them together in the kitchen.
          </p>
        </div>
        <div className="spacialTasteRightBtn">
          <button>VIEW ALL PRODUCTS</button>
        </div>
        <img className="backImg1" src={backImg1} alt="" />
      </div>
    </div>
  );
};

export default SpecialTaste;
