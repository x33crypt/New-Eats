import React, { useContext, useState, useEffect } from "react";
import "./specialtaste.css";
import FoodCard from "./FoodCard";
import backImg1 from "../assets/h8_img10.png";
import backImg2 from "../assets/h8_img2.png";
import { cartContext, userIdContext } from "../App";
import axios from "axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const SpecialTaste = () => {
  const [allMenu, setAllMenu] = useState();
  const { carts, setCarts } = useContext(cartContext);
  const { userId, setUserId } = useContext(userIdContext);

  const baseUrl = "http://localhost:3500/api/v1";

  const getAllMenu = async () => {
    try {
      const response = await axios.get(`${baseUrl}/allmenus`);
      setAllMenu(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllMenu();
  }, []);

  const updateCart = async (menu) => {
    const addCartValues = {
      menu: menu,
      Id: userId,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/addmenutocart`,
        addCartValues
      );
      console.log("updating your cart");
      getCarts();
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const getCarts = async () => {
    const getCartValues = {
      Id: userId,
    };
    try {
      const response = await axios.post(
        `${baseUrl}/getcartmenus`,
        getCartValues
      );
      console.log("getting all cart");
      setCarts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="spacialTaste">
      <img className="backImg2" src={backImg2} alt="" />
      <div className="spacialTasteLeft">
        {allMenu?.slice(6, 8).map((menu, index) => (
          <div key={index}>
            <FoodCard
              updateCart={() => updateCart(menu)}
              menuImage={menu.menuImage}
              item={menu?.menuItem}
              info={menu?.menuInfo}
              price={menu?.menuPrice}
              menu={menu}
              oldPrice={menu?.menuOldPrice}
              rating={menu?.menuRating}
              menuId={menu?.menuId}
            />
          </div>
        ))}
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
          <Link to={"/shop"}>
            <button>VIEW ALL MENU'S</button>
          </Link>
        </div>
        <img className="backImg1" src={backImg1} alt="" />
      </div>
    </div>
  );
};

export default SpecialTaste;
