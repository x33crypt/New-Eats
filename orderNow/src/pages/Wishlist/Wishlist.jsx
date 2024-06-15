import React from "react";
import "./wishlist.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Wishlist = () => {
  return (
    <>
      <Nav />
      <div className="wishlist">
        <div className="wishlistHead">
          <p className="wishlistHead1">Wishlist</p>
          <div className="wishlistHeadSub">
            <p className="wishlistHeadSub1">Home</p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="wishlistHeadSub2">Wishlist</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
