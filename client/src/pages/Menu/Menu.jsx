import React, { useEffect, useState, useContext } from "react";
import "./menu.css";
import explore1 from "../../assets/1391ea68c4b0255bea99b2ffac4fba63.jpg";
import axios from "axios";
import { toast } from "sonner";
import { cartContext, tokenContext, userIdContext } from "../../App";
import MenuCard from "../../components/MenuCard";

const Menu = () => {
  //  window.scrollTo(0, 0);
  const [hotDeal, setHotDeal] = useState();
  const [allDeal, setAllDeal] = useState();
  const [hotDealContent, setHotDealContent] = useState(true);
  const { carts, setCarts } = useContext(cartContext);
  const { userToken, setUserToken } = useContext(tokenContext);
  const { userId, setUserId } = useContext(userIdContext);

  console.log(userToken);

  const baseUrl = "http://localhost:3500/api/v1";
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  const getAllDeals = async () => {
    console.log("headers :", headers);
    try {
      const response = await axios.get(`${baseUrl}/alldeals`, { headers });
      console.log(response);
      setAllDeal(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const HotDealPizza = async () => {
    try {
      const response = await axios.get(`${baseUrl}/pizza`, { headers });
      console.log(response);
      setHotDeal(response.data.data);
      setHotDealContent(false);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const HotDealSushi = async () => {
    try {
      const response = await axios.get(`${baseUrl}/sushi`, { headers });
      console.log(response);
      setHotDeal(response.data.data);
      setHotDealContent(false);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const HotDealSalads = async () => {
    try {
      const response = await axios.get(`${baseUrl}/salads`, { headers });
      console.log(response);
      setHotDeal(response.data.data);
      setHotDealContent(false);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const HotDealBurger = async () => {
    try {
      const response = await axios.get(`${baseUrl}/burger`, { headers });
      console.log(response);
      setHotDeal(response.data.data);
      setHotDealContent(false);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const HotDealDeserts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/deserts`, { headers });
      console.log(response);
      setHotDeal(response.data.data);
      setHotDealContent(false);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDeals();
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
      const response = await axios.get(
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
    <>
      <div className="menu">
        <div className="menuHead">
          <p className="menuHead1">Hot Deals</p>
          <div className="menuHeadSub">
            <p className="menuHeadSub1">Home</p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="menuHeadSub2">Deals</p>
          </div>
        </div>
        <div className="menuMainHead">
          <p className="menuMainHead1">Special Offer</p>
          <div className="menuMainHead2">
            <p onClick={() => HotDealPizza()}>PIZZA</p>
            <p onClick={() => HotDealSushi()}>SUSHI</p>
            <p onClick={() => HotDealSalads()}>SALADS</p>
            <p onClick={() => HotDealBurger()}>BURGER</p>
            <p onClick={() => HotDealDeserts()}>DESERTS</p>
          </div>
        </div>
        <div className="menuMain">
          {hotDealContent ? (
            <div className="menuMainContent">
              {allDeal?.map((deal, index) => (
                <div key={index}>
                  <MenuCard
                    menuItem={deal?.menuItem}
                    menuInfo={deal?.menuInfo}
                    menuPrice={deal?.menuPrice}
                    updateCart={() => updateCart(deal)}
                    rating={deal?.menuRating}
                    menuImage={deal?.menuImage}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="menuMainContent">
              {hotDeal?.map((deal, index) => (
                <div key={index}>
                  <MenuCard
                    menuItem={deal?.menuItem}
                    menuInfo={deal?.menuInfo}
                    menuPrice={deal?.menuPrice}
                    updateCart={() => updateCart(deal)}
                    rating={deal?.menuRating}
                    menuImage={deal?.menuImage}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="menuMainExplore">
          <div className="menuMainExplore1">
            <img src={explore1} alt="" />
            <div className="menuMainExplore1Back"></div>
            <div className="menuMainExploreTxt">
              <p className="menuMainExploreTxt1">Explore the new taste</p>
              <p className="menuMainExploreTxt2">
                Enjoy our luscious dishes wherever you want
              </p>
              <button className="menuMainExploreTxt3">ORDER NOW</button>
            </div>
          </div>
          <div className="menuMainExplore2">
            <div className="menuMainExplore2-1">
              <div className="menuMainExplore2-1Head">
                <p className="menuMainExplore2-1Head1">Pizza Hut</p>
                <p className="menuMainExplore2-1Head2">#13,400</p>
              </div>
              <div className="menuMainExplore2-1Line"></div>
              <p className="menuMainExplore2-1Txt">Shrimp, Squid, Pineapple</p>
            </div>
            <div className="menuMainExplore2-2">
              <div className="menuMainExplore2-1Head">
                <p className="menuMainExplore2-1Head1">Pepperoni Pizza</p>
                <p className="menuMainExplore2-1Head2">#14,800</p>
              </div>
              <div className="menuMainExplore2-1Line"></div>
              <p className="menuMainExplore2-1Txt">Shrimp, Squid, Pineapple</p>
            </div>
            <div className="menuMainExplore2-2">
              <div className="menuMainExplore2-1Head">
                <p className="menuMainExplore2-1Head1">Apricot Chicken</p>
                <p className="menuMainExplore2-1Head2">#11,600</p>
              </div>
              <div className="menuMainExplore2-1Line"></div>
              <p className="menuMainExplore2-1Txt">Shrimp, Squid, Pineapple</p>
            </div>
            <div className="menuMainExplore2-2">
              <div className="menuMainExplore2-1Head">
                <p className="menuMainExplore2-1Head1">Summer Pizza</p>
                <p className="menuMainExplore2-1Head2">#9,500</p>
              </div>
              <div className="menuMainExplore2-1Line"></div>
              <p className="menuMainExplore2-1Txt">Shrimp, Squid, Pineapple</p>
            </div>
          </div>
        </div>
        <div className="menuMainExploreButtom">
          <div className="menuMainExploreButtom1">
            <div className="menuMainExploreButtom1Icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div className="menuMainExploreButtom1Txt">
              <p className="menuMainExploreButtom1Txt1">Free Shipping</p>
              <p className="menuMainExploreButtom1Txt2">
                Sign up for updates and get free shipping.
              </p>
            </div>
          </div>
          <div className="menuMainExploreButtom1">
            <div className="menuMainExploreButtom1Icon">
              <i class="fa-solid fa-stopwatch"></i>
            </div>
            <div className="menuMainExploreButtom1Txt">
              <p className="menuMainExploreButtom1Txt1">30 Minutes Delivery</p>
              <p className="menuMainExploreButtom1Txt2">
                Everything you order will quickly delivered to your door.
              </p>
            </div>
          </div>
          <div className="menuMainExploreButtom1">
            <div className="menuMainExploreButtom1Icon">
              <i class="fa-solid fa-pizza-slice"></i>
            </div>
            <div className="menuMainExploreButtom1Txt">
              <p className="menuMainExploreButtom1Txt1">
                Best Quality Guarantee
              </p>
              <p className="menuMainExploreButtom1Txt2">
                Poco is an international chain of family restaurants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
