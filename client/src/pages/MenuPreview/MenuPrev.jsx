import React, { useEffect, useState, useContext } from "react";
import "./menuprev.css";
import menuPrevImg from "../../assets/52-1.png";
import paymentCard from "../../assets/trust-symbols.png";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import FoodCard from "../../components/FoodCard";
import { cartContext, userIdContext } from "../../App";
import { toast } from "sonner";

const MenuPrev = () => {
  const [prevCartUnit, setPrevCartUnit] = useState(1);
  const [menuPreview, setMenuPreview] = useState();
  const [relatedMenu, setRelatedMenu] = useState();
  const { carts, setCarts } = useContext(cartContext);
  const { userId, setUserId } = useContext(userIdContext);

  const handleAddPrevCartUnit = () => {
    setPrevCartUnit((prevUnit) => prevUnit + 1);
  };

  const handleSubtractPrevCartUnit = () => {
    setPrevCartUnit((prevUnit) => prevUnit - 1);
  };

  const baseUrl = "http://localhost:3500/api/v1";
  const { id } = useParams();

  const getMenuPreview = async () => {
    try {
      const response = await axios.get(`${baseUrl}/menu/${id}`);
      console.log(response);
      setMenuPreview(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMenuPreview();
  }, []);

  const category = menuPreview?.menuCategory;

  const getRelatedMenu = async () => {
    try {
      console.log(category);
      const response = await axios.post(`${baseUrl}/relatedmenu/${category}`);
      console.log(response);
      setRelatedMenu(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRelatedMenu();
  }, [menuPreview]);

  console.log(menuPreview);
  console.log(relatedMenu);

  const updateCart = async (menu) => {
    try {
      const response = await axios.post(`${baseUrl}/addmenutocart`, menu);
      console.log("updating your cart");
      getCarts();
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const getCarts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getcartmenus`);
      console.log("getting all cart");
      setCarts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCartValues = {
    menu: menuPreview,
    quantity: prevCartUnit,
    Id: userId,
  };

  const PrevUpdateCart = async () => {
    console.log(menuPreview);
    console.log(prevCartUnit);
    try {
      const response = await axios.post(
        `${baseUrl}/prevupdatecart`,
        addCartValues
      );
      console.log("updating your cart");
      getCarts();
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.success(error.response.data.message);
    }
  };

  return (
    <div className="menuPrev">
      <div className="menuPrevHead">
        <div className="menuPrevHead1">
          <small> Home</small>
          <i class="fa-solid fa-angle-right"></i>
          <p>{menuPreview?.menuCategory}</p>
          <i class="fa-solid fa-angle-right"></i>
          <span>{menuPreview?.menuItem}</span>
        </div>
      </div>
      <div className="menuPrevMain">
        <div className="menuPrevMainL">
          <img src={menuPreview?.menuImage} alt="" />
        </div>
        <div className="menuPrevMainR">
          <div className="menuPrevMainRTop">
            <p className="menuPrevMainRTop1">{menuPreview?.menuItem}</p>
            <div className="menuPrevMainRTop2">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < menuPreview?.menuRating
                      ? "foodCardStar"
                      : "foodCardStar2"
                  }
                />
              ))}
              <p className="menuPrevMainRTop2-1">(5 Customer Reviews)</p>
            </div>
            <p className="menuPrevMainRTop3">{menuPreview?.menuInfo}</p>
            <p className="menuPrevMainRTop4">{`#${parseInt(
              menuPreview?.menuPrice
            ).toLocaleString()}`}</p>
          </div>
          <div className="menuPrevMainRMid">
            <div className="menuPrevMainRMid1">
              <div
                onClick={() => handleSubtractPrevCartUnit(menuPreview)}
                className="menuPrevMainRMid1Icon"
              >
                <i class="fa-solid fa-minus"></i>
              </div>
              <p>{prevCartUnit}</p>
              <div
                onClick={() => handleAddPrevCartUnit()}
                className="menuPrevMainRMid1Icon"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="menuPrevMainRMid2">
              <button onClick={PrevUpdateCart}>
                <i class="fa-solid fa-basket-shopping"></i>
                <p>ADD TO CART</p>
              </button>
            </div>
            <div className="menuPrevMainRMid3">
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
          <div className="menuPrevMainRBottom">
            <ul>
              <li>Free global shipping on all orders</li>
              <li>30 days easy returns if you change your mind</li>
              <li>Order before noon for same day dispatch</li>
            </ul>
          </div>
          <div className="menuPrevMainRBottom2">
            <p>Guaranteed Safe Checkout</p>
            <img src={paymentCard} alt="" />
          </div>
        </div>
      </div>
      <div className="menuPrevMainMid">
        <div className="menuPrevMainMidHead">
          <p className="menuPrevMainMidHead1">Description</p>
          <p className="menuPrevMainMidHead2">Reviews (5)</p>
        </div>
        <div className="menuPrevMainMain">
          <p className="menuPrevMainMain1">
            Although the legendary Double Burger really needs no introduction,
            please allow us… Tucked in between three soft buns are two all-beef
            patties, cheddar cheese, ketchup, onion, pickles and iceberg
            lettuce. Hesburger’s own paprika and cucumber mayonnaise add the
            crowning touch. Oh baby!
          </p>
          <p className="menuPrevMainMain2">
            <span>Ingredients: </span>
            Dr. Praeger’s Black Bean Burger, Focaccia bun, Balsamic Vinaigrette,
            Pesto, Tomato, Swiss Cheese
          </p>
          <div className="menuPrevMainMain3">
            <div className="menuPrevMainMain3-1">
              <p>{menuPreview?.menuItem}</p>
              <small>28 cm size</small>
            </div>
            <div className="menuPrevMainMain3-2">
              <div className="menuPrevMainMain3-2Div1">
                <p>728</p>
                <small>Energy/Kj</small>
              </div>
              <div className="menuPrevMainMain3-2Div1">
                <p>1054</p>
                <small>Energy/Kcal</small>
              </div>
              <div className="menuPrevMainMain3-2Div1">
                <p>68</p>
                <small>Fat/g</small>
              </div>
              <div className="menuPrevMainMain3-2Div1">
                <p>25</p>
                <small>Gluxit/g</small>
              </div>
              <div className="menuPrevMainMain3-2Div1">
                <p>48</p>
                <small>Sugar/g</small>
              </div>
              <div className="menuPrevMainMain3-2Div1">
                <p>548</p>
                <small>Protein/g</small>
              </div>
            </div>
          </div>
          <div className="menuPrevMainMain4">
            <div className="menuPrevMainMain4-1">
              <p>Allergies</p>
            </div>
            <div className="menuPrevMainMain4-2">
              <div className="menuPrevMainMain4-2Div1">
                <small>Egg</small>
              </div>
              <div className="menuPrevMainMain4-2Div1">
                <small>Milk protein</small>
              </div>
              <div className="menuPrevMainMain4-2Div1">
                <small>Sesame</small>
              </div>
              <div className="menuPrevMainMain4-2Div1">
                <small>lactose</small>
              </div>
              <div className="menuPrevMainMain4-2Div1">
                <small>Gluten</small>
              </div>
              <div className="menuPrevMainMain4-2Div1">
                <small>Mustard</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menuPrevBottom">
        <div className="menuPrevBottomHead">
          <p>YOU MAY ALSO LIKE</p>
        </div>
        <div className="menuPrevBottomMain">
          {relatedMenu?.slice(0, 4).map((menu, index) => (
            <div key={index}>
              <FoodCard
                updateCart={updateCart}
                item={menu?.menuItem}
                info={menu?.menuInfo}
                price={menu?.menuPrice}
                menu={menu}
                rating={menu?.menuRating}
                menuImage={menu.menuImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPrev;
