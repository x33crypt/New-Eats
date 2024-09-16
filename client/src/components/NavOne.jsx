import React, { useState, useContext, useEffect } from "react";
import "./nav.css";
import "./navQuary.css";
import { Link } from "react-router-dom";
import logo from "../assets/a2292b9a504c54106dc9dedc87b18263-removebg-preview.png";
import free from "../assets/pngwing.com.png";
import gift from "../assets/gift-svgrepo-com.svg";
import axios from "axios";
import { toast } from "sonner";
import { MdAdminPanelSettings } from "react-icons/md";
import userImg from "../assets/menu/ea705f179973fb53e751136a6a8cb5f6.jpg";
import { useNavigate } from "react-router-dom";
import {
  cartContext,
  tokenContext,
  cartTotalContext,
  userContext,
  userIdContext,
} from "../App";

const NavOne = () => {
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [showMenuCart, setShowMenuCart] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [userQuary, setUserQuary] = useState([]);
  const { cartTotal, setCartTotal } = useContext(cartTotalContext);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const { carts, setCarts } = useContext(cartContext);
  const { userToken, setUserToken } = useContext(tokenContext);
  const { user, setUser } = useContext(userContext);
  const { userId, setUserId } = useContext(userIdContext);

  // console.log(user);
  // console.log(userId);

  const headers = {
    Authorization: `Bearer ${userToken}`,
  };
  const handleSigninChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const baseUrl = "http://localhost:3500/api/v1";
  const navigateTo = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log(loginDetails);
    setIsSigningIn(true);
    try {
      const response = await axios.post(`${baseUrl}/signin`, loginDetails);
      console.log(response);
      setIsSigningIn(false);
      setSignedIn(true);
      toast.success(response.data.message);
      const token = response.data?.token;
      setUserToken(localStorage.setItem("token", token));
      setUser(response.data.user);
      const Id = response.data.user.customerId;
      setUserId(localStorage.setItem("userId", Id));
      navigateTo("./");
      setShowLoginCard(false);
      setTimeout(() => {
        getCarts();
      }, 3000);
    } catch (err) {
      console.log(err);
      setIsSigningIn(false);
      setSignedIn(false);
      setShowLoginCard(true);
      toast.error(err.response.data.message);
    }
  };

  const getTotal = () => {
    const prices = carts?.map(
      (product) => parseInt(product.menuPrice) * product.menuQuantity
    );
    const total = prices?.reduce((acc, curr) => acc + curr, 0);
    setCartTotal(total);
  };

  useEffect(() => {
    carts && getTotal();
    handlecartStatus();
  }, [carts]);

  const cartNumber = carts.length;
  // console.log(cartNumber);

  const handleDeleteCart = async (menu) => {
    const deleteValues = {
      menu: menu,
      Id: userId,
    };
    try {
      console.log("deleting from cart");
      const response = await axios.post(`${baseUrl}/deletecart`, deleteValues);
      console.log(response);
      getCarts();
    } catch (error) {
      console.log(error);
    }
  };

  const getCarts = async () => {
    const Id = { userId };

    try {
      const response = await axios.post(`${baseUrl}/getcartmenus`, Id);
      console.log("getting all cart");
      setCarts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlecartStatus = () => {
    if (carts.length > 0) {
      setIsCartEmpty(false);
    }
    if (carts.length == 0) {
      setIsCartEmpty(true);
    }
  };

  const handleSearchInput = (e) => {
    setUserQuary({ ...userQuary, [e.target.name]: e.target.value });
    if (e.target.value == "") {
      navigateTo(`./`);
    }
  };

  const query = userQuary.searchInput;

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    navigateTo(`./searchresult/${query}`);
    console.log("redirecting to search result");
  };

  const handleCheckOutQuary = async () => {
    console.log("headers :", headers);
    try {
      const response = await axios.post(
        `${baseUrl}/quarycheckoutcart`,
        {},
        {
          headers,
        }
      );
      navigateTo("./checkout");
      setShowMenuCart(false);
      console.error(response);
    } catch (error) {
      console.log(error);
      toast.success("Login to checkout cart !");
    }
  };

  return (
    <div>
      <div
        className={`cartDiv ${
          showMenuCart ? "showShoppingCart" : "exitShoppingCart"
        }`}
        cartDiv
      >
        <div
          onClick={() => setShowMenuCart(!showMenuCart)}
          className="cartShadow"
        ></div>
        <div className="shoppingCart">
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
          <div>
            {isCartEmpty ? (
              <div className="emptyCartDiv">
                <p className="emptyCart">No products in the cart.</p>
              </div>
            ) : (
              <>
                <div className="cartMajor">
                  <div className="cartItemMain">
                    {carts?.map((cart, index) => (
                      <div key={index} className="CartItem">
                        <div className="CartItem1 ">
                          <i
                            onClick={() => handleDeleteCart(cart)}
                            class="fa-regular fa-circle-xmark"
                          ></i>
                        </div>
                        <div className="CartItem2">
                          <img src={cart.menuImage} alt="" />
                        </div>
                        <div className="CartItem3">
                          <p className="CartItem3-1">{cart.menuItem}</p>
                          <p className="CartItem3-2">
                            {cart.menuQuantity} x{" "}
                            <span>
                              {parseInt(cart.menuPrice).toLocaleString()}{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="cartCalculator">
                    <div className="cartCalculator1">
                      <small>SUBTOTAL:</small>
                      <p>{`#${cartTotal.toLocaleString()}`}</p>
                    </div>
                    <div className="cartCalculator2">
                      <button onClick={handleCheckOutQuary}>CHECKOUT</button>
                    </div>
                    <div className="cartCalculator3">
                      <button>VIEW CART</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={`userCard ${showLoginCard ? "showCard" : "closeCard"}`}>
        <div className="userCard1"></div>
        <div className="userCard2">
          <form onSubmit={handleSignin}>
            <div className="userCard2-1">
              <p className="userCard2-1Txt1">Sign in</p>
              <Link to="/sign-up">
                <p className="userCard2-1Txt2">Create an Account</p>
              </Link>
            </div>
            <div className="userCard2-2">
              <div className="userCard2-2Div">
                <p>
                  Username or email <span>*</span>
                </p>
              </div>

              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleSigninChange}
              />
            </div>

            <div className="userCard2-2">
              <div className="userCard2-2Div">
                <p>
                  Password <span>*</span>
                </p>
              </div>

              <input
                type="text"
                placeholder="Password"
                name="password"
                onChange={handleSigninChange}
              />
            </div>
            <div className="userCard2-3">
              <button>{isSigningIn ? "LOGGING IN..." : "LOG IN"}</button>
            </div>
            <div className="userCard2-4">
              <p className="userCard2-4-1">Lost your password?</p>
              <Link to={"/adminsignin"}>
                <div className="userCard2-4-2">
                  <p className="userCard2-4ii">Log in admin</p>
                  <MdAdminPanelSettings className="userCard2-4i" />
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="navBar">
        <div className="leftNav">
          <img src={logo} alt="" />
        </div>
        <div className="midNav1">
          <form onSubmit={handleSubmitSearch}>
            <div className="midNav1Search">
              <input
                id="navSearch"
                type="text"
                placeholder="Search menu..."
                name="searchInput"
                onChange={handleSearchInput}
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </form>
        </div>
        <div className="midNav2">
          <div className="midNav2L">
            <div className="midNav2L1">
              <img src={free} alt="" />
            </div>
            <div className="midNav2L2">
              <p className="midNav2L2-1">Free Delivery</p>
              <p className="midNav2L2-2">Details & restrictions</p>
            </div>
          </div>
          <div className="midNav2R">
            <div className="midNav2R1">
              <img src={gift} alt="" />
            </div>
            <div className="midNav2R2">
              <p className="midNav2R2-1">Daily Offer</p>
              <p className="midNav2R2-2">Discount 20% off</p>
            </div>
          </div>
        </div>
        <div className="rightNav">
          <span
            title="Login/Sign-Up"
            onClick={() => setShowLoginCard(!showLoginCard)}
            className={signedIn ? "rightNavUser2" : "rightNavUser"}
          >
            <i className="fa-solid fa-user"></i>
          </span>
          <Link to={"/profile"}>
            <span className={signedIn ? "rightNavUserImg" : "rightNavUserImg2"}>
              <img src={userImg} alt="" />
            </span>
          </Link>

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
            <p className="rightNavCartCount">{cartNumber}</p>
            <i className="fa-solid fa-basket-shopping"></i>
          </span>
        </div>
        <div className="navBarQ">
          <div className="navBarQ1">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div className="navBarQ2">
            <img src={logo} alt="" />
          </div>
          <div className="navBarQ3">
            <i class="fa-solid fa-phone-flip fa-shake"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavOne;
