import React, { useEffect, useState, useContext } from "react";
import "./hotFresh.css";
import FoodCard from "./FoodCard";
import axios from "axios";
import { cartContext, userIdContext } from "../App";
import { toast } from "sonner";

const HotFresh = () => {
  const [allMenu, setAllMenu] = useState();
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

  const { carts, setCarts } = useContext(cartContext);

  const updateCart = async (menu) => {
    console.log(menu);

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
      getCartMenus();
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const getCartMenus = async () => {
    const Id = { userId };
    try {
      const response = await axios.post(`${baseUrl}/getcartmenus`, Id);
      console.log(response.data.data);
      setCarts(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hotFresh">
      <div className="hotFreshHead">
        <p className="hotFreshHeadTitle1">Hot Fresh</p>
        <p className="hotFreshHeadTitle2">Shop our favourites</p>
      </div>
      <div className="hotFreshMain">
        <div className="hotFreshMainFav">
          {allMenu?.slice(0, 4).map((menu, index) => (
            <div key={index}>
              <FoodCard
                updateCart={() => updateCart(menu)}
                item={menu?.menuItem}
                info={menu?.menuInfo}
                price={menu?.menuPrice}
                oldPrice={menu?.menuOldPrice}
                rating={menu?.menuRating}
                menuId={menu?.menuId}
                menuImage={menu.menuImage}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hotFreshMainQuary">
        <div className="hotFreshMainFavQuary">
          {allMenu?.slice(0, 1).map((menu, index) => (
            <div key={index}>
              <FoodCard
                updateCart={() => updateCart(menu)}
                item={menu?.menuItem}
                info={menu?.menuInfo}
                price={menu?.menuPrice}
                oldPrice={menu?.menuOldPrice}
                rating={menu?.menuRating}
                menuId={menu?.menuId}
                menuImage={menu.menuImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotFresh;
