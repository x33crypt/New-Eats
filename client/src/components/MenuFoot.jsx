import React from "react";
import "./menuFoot.css";

const MenuFoot = () => {
  return (
    <div className="menuFoot">
      <div className="menuFoot1">
        <i class="fa-solid fa-shop"></i>
        <p>Shop</p>
      </div>
      <div className="menuFoot1">
        <i class="fa-solid fa-user"></i>
        <p>Account</p>
      </div>
      <div className="menuFoot1">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>Search</p>
      </div>
      <div className="menuFoot1">
        <i class="fa-solid fa-heart"></i>
        <p>Wishlist</p>
      </div>
      <div className="menuFoot5">
        <i class="fa-solid fa-basket-shopping"></i>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default MenuFoot;
