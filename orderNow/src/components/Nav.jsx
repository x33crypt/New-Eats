import React, { useState } from "react";
import "./nav.css";
import logo from "../assets/logo_svg.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [showMenuOption, setShowMenuOption] = useState(false);
  const [showMenuCart, setShowMenuCart] = useState(false);

  if (showMenuOption === true) {
    if (showMenuCart === true) {
      setShowMenuCart(false);
    }
    if (showLoginCard === true) {
      setShowLoginCard(false);
    }
  }

  if (showMenuCart === true) {
    if (showMenuOption === true) {
      setShowMenuOption(false);
    }
    if (showLoginCard === true) {
      setShowLoginCard(false);
    }
  }

  if (showLoginCard === true) {
    if (showMenuOption === true) {
      setShowMenuOption(false);
    }
    if (showMenuCart === true) {
      setShowMenuCart(false);
    }
  }

  return (
    <>
      <div
        className={`shoppingCart ${
          showMenuCart ? "showShoppingCart" : "exitShoppingCart"
        }`}
      >
        <div className="shoppingCart2">
          <p className="shoppingCart1-1">SHOPPING CART</p>
          <div
            onClick={() => setShowMenuCart(!showMenuCart)}
            className="shoppingCart1-2"
          >
            <p>CLOSE</p>
            <div className="shoppingCart1-2mark">
              <span className="shoppingCart1-2mark1">
                <i class="fa-solid fa-xmark"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="shoppingCart3">
          <p>No product in the cart</p>
        </div>
      </div>
      <div className={`userCard ${showLoginCard ? "openNav" : "closeNav"}`}>
        <div className="userCard1"></div>
        <div className="userCard2">
          <div className="userCard2-1">
            <p className="userCard2-1Txt1">Sign in</p>
            <Link to="/sign-up">
              <p className="userCard2-1Txt2">Create an Account</p>
            </Link>
          </div>
          <div className="userCard2-2">
            <p>
              Username or email <span>*</span>
            </p>
            <input type="text" placeholder="Username" />
          </div>
          <div className="userCard2-2">
            <p>
              Password <span>*</span>
            </p>
            <input type="text" placeholder="Password" />
          </div>
          <div className="userCard2-3">
            <button>LOGIN</button>
          </div>
          <p className="userCard2-4">Lost your password?</p>
        </div>
      </div>
      <div
        className={`navOption ${
          showMenuOption ? "showNavOption" : "exitNavOption"
        }`}
      >
        <div className="navOption1">
          <div className="navOption1-1">
            <i
              onClick={() => setShowMenuOption(!showMenuOption)}
              class="fa-solid fa-xmark"
            ></i>
          </div>
          <div className="navOption1-2">
            <Link to={"/"}>
              <p>Home</p>
            </Link>
          </div>
          <div className="navOption1-3">
            <Link>
              <p>Menu</p>
            </Link>
          </div>
          <div className="navOption1-3">
            <Link>
              <p>Shop</p>
            </Link>
          </div>
          <div className="navOption1-3">
            <Link>
              <p>Orders</p>
            </Link>
          </div>
          <div className="navOption1-5">
            <Link>
              <p>Blog</p>
            </Link>
          </div>
          <div className="navOption1-4">
            <Link to={"/about-us"}>
              <p>About</p>
            </Link>
          </div>
          <div className="navOption1-6">
            <Link>
              <p>Contact</p>
            </Link>
          </div>
        </div>
        <div className="navOption2"></div>
      </div>
      <div className="navBar">
        <div
          onClick={() => setShowMenuOption(!showMenuOption)}
          className="leftNav"
        >
          <i className="fa-solid fa-bars"></i>
          <p>Menu</p>
        </div>
        <div className="midNav">
          <img src={logo} alt="" />
        </div>
        <div className="rightNav">
          <span
            onClick={() => setShowLoginCard(!showLoginCard)}
            className="rightNavUser"
          >
            <i className="fa-solid fa-user"></i>
          </span>

          <span className="rightNavLike">
            <Link to={"/wishlist"}>
              <p className="rightNavLikeCount">0</p>
              <i className="fa-solid fa-heart"></i>
            </Link>
          </span>
          <span
            onClick={() => {
              setShowMenuCart(!showMenuCart);
            }}
            className="rightNavCart"
          >
            <p className="rightNavCartCount">0</p>
            <i className="fa-solid fa-basket-shopping"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
