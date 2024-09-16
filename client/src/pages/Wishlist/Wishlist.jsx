import React from "react";
import "./wishlist.css";
import wishImage from "../../assets/menu/mockupwishlist-removebg-preview.png";

const Wishlist = () => {
  return (
    <>
      <div className="wishlist">
        <div className="wishlistHead">
          <p className="wishlistHead1">Wishlist</p>
          <div className="wishlistHeadSub">
            <p className="wishlistHeadSub1">Home</p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="wishlistHeadSub2">Wishlist</p>
          </div>
        </div>
        <div className="WishlistMain">
          <img src={wishImage} alt="" />
          <p>Opps, you have no wishlist...</p>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
