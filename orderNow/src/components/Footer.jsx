import React from "react";
import "./footer.css";
import mobileApp from "../assets/mobile_app.png";
import logo from "../assets/logo_svg.svg";
import FooterPay from "../assets/footer_img1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerUp">
        <div className="footerUpTxt">
          <p className="footerUpTxt1">
            Get <span>10%</span> off your order!
          </p>
          <p className="footerUpTxt2">
            Enter your email and receive a 10% discount on your next order!
          </p>
        </div>
        <div className="footerUp2">
          <div className="footerUp2Div">
            <input type="text" placeholder="Enter your email..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footerMid">
        <div className="footerMid1">
          <p className="footerMidHead">CONTACT US</p>
          <p className="footerMid1-2">Find a location nearest you.</p>
          <div className="footerMid1-3">
            <p>See Our Stores</p>
          </div>
          <p className="footerMid1-4">+1 718-904-4450</p>
          <p className="footerMid1-5">Customers_support@poko.com</p>
        </div>
        <div className="footerMid2">
          <p className="footerMidHead">OUR COMPANY</p>
          <p className="footerMid2-1">
            <span>Address:</span> 570 8th Ave, New York, NY 10018 United States
          </p>
          <p className="footerMid2-2">
            <span>Hours:</span> 9:30am - 6:30pm
          </p>
          <p className="footerMid2-3">Monday to Friday</p>
        </div>
        <div className="footerMid3">
          <p className="footerMidHead">USEFUL LINKS</p>
          <p className="footerMid3-1">New Products</p>
          <p className="footerMid3-2">Best Sellers</p>
          <p className="footerMid3-2">Bundle & Save</p>
          <p className="footerMid3-2">Online Gift Card</p>
          <p className="footerMid3-2">Discount</p>
        </div>
        <div className="footerMid4">
          <p className="footerMidHead">MY ACCOUNT</p>
          <p className="footerMid3-1">My Profile</p>
          <p className="footerMid3-2">My Order History</p>
          <p className="footerMid3-2">My Wish List</p>
          <p className="footerMid3-2">Order Tracking</p>
          <p className="footerMid3-2">Shopping Cart</p>
        </div>
        <div className="footerMid4">
          <p className="footerMidHead">INSTALL APP</p>
          <p className="footerMid3-1">From App Store or Google Play</p>
          <img className="mobileApp" src={mobileApp} alt="" />
          <div className="footerMid4-2">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className="footerButtom">
        <div className="footerButtom1">
          <div className="footerButtomLine1"></div>
          <div className="logoDiv">
            <img className="logo" src={logo} />
          </div>
          <div className="footerButtomLine2"></div>
        </div>
        <div className="footerButtom2">
          <p>
            Copyright © 2024 <span>Pocofood</span>. All Rights Reserved.
          </p>
          <img src={FooterPay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
