import "./nav.css";
import { Link } from "react-router-dom";

const NavTwo = () => {
  return (
    <>
      <div className="buttomNav">
        <div className="buttomNavL">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"./shop"}>
            <p>Menu</p>
          </Link>
          <Link to={"./menu"}>
            <p>Deals</p>
          </Link>
          <Link to={"./orders"}>
            <p>Orders</p>
          </Link>
          <Link to={"./blogs"}>
            <p>Blog</p>
          </Link>
          <Link to={"./about-us"}>
            <p>About</p>
          </Link>
          <Link to={"./contact"}>
            <p>Contact</p>
          </Link>
        </div>
        <div className="buttomNavR">
          <div className="buttomNavR1">
            <i class="fa-solid fa-phone"></i>
            <p>24/7 Support center</p>
          </div>
          <p className="buttomNavR2">0800-343-2110</p>
        </div>
      </div>
    </>
  );
};

export default NavTwo;
