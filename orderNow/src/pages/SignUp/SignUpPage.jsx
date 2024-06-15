import React from "react";
import "./signuppage.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import burger from "../../assets/h7_burger.png";
import Off from "../../assets/30off.png";
import backImg1 from "../../assets/h8_banner-img3.png";

const SignUpPage = () => {
  return (
    <>
      <Nav />
      <div className="SignUpPage">
        <img className="SignUpPageBack1" src={backImg1} alt="" />
        <div className="SignUpPage1">
          <div className="SignUpPage1Head">
            <p className="SignUpPage1Head1">LET'S EAT!</p>
            <p className="SignUpPage1Head2">
              Our mission is to serve a fresh, flavorfull burger made from the
              finest American beef, while becoming a real part of the
              neighborhood in which we open.
            </p>
          </div>
          <img className="SignUpPage1Off" src={Off} alt="" />
          <img className="SignUpPage1Burger" src={burger} alt="" />
          <div className="SignUpPage1Count">
            <div className="SignUpPage1CountMain">
              <div className="SignUpPage1CountDiv">
                <p className="SignUpPage1CountDiv1">29</p>
                <p className="SignUpPage1CountDiv2">Days</p>
              </div>
              <div className="SignUpPage1CountDiv">
                <p className="SignUpPage1CountDiv1">15</p>
                <p className="SignUpPage1CountDiv2">Hours</p>
              </div>
              <div className="SignUpPage1CountDiv">
                <p className="SignUpPage1CountDiv1">36</p>
                <p className="SignUpPage1CountDiv2">Mins</p>
              </div>
              <div className="SignUpPage1CountDiv">
                <p className="SignUpPage1CountDiv1">08</p>
                <p className="SignUpPage1CountDiv2">Sec</p>
              </div>
            </div>
          </div>
        </div>
        <div className="SignUpPage2">
          <div className="SignUpPage2Form">
            <div className="SignUpPage2FormHead">
              <p>Sign Up</p>
            </div>
            <div className="SignUpPage2FormMain">
              <div className="SignUpPage2FormMain1">
                <div className="SignUpPage2FormMain1-1">
                  <p>First Name</p>
                  <input type="text" placeholder="John" />
                </div>
                <div className="SignUpPage2FormMain1-2">
                  <p>Last Name</p>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="SignUpPage2FormMain2">
                <p>Username</p>
                <input type="text" placeholder="johnDoe300" />
              </div>
              <div className="SignUpPage2FormMain3">
                <p>Email address</p>
                <input type="text" placeholder="johndoe@gmail.com" />
              </div>
              <div className="SignUpPage2FormMain4">
                <p>Password</p>
                <input type="text" placeholder="123456789" />
              </div>
              <div className="SignUpPage2FormMain5">
                <input type="checkbox" />
                <p>Accept Terms & Conditions</p>
              </div>
              <div className="SignUpPage2FormMain6">
                <button>Finish</button>
              </div>
            </div>
            <div className="SignUpPage2FormMain7">
              <div className="SignUpPage2FormMain7-1"></div>
              <div className="SignUpPage2FormMain7-2">
                <p>or</p>
              </div>
              <div className="SignUpPage2FormMain7-3"></div>
            </div>
            <div className="SignUpPage2FormMain8">
              <i class="fa-brands fa-google"></i>
              <p>Sign up with Google</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
