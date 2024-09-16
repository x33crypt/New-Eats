import React, { useEffect, useState, useContext } from "react";
import "./shop.css";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import axios from "axios";
import FoodCard from "../../components/FoodCard";
import { toast } from "sonner";
import { cartContext, userIdContext } from "../../App";
import poster from "../../assets/widgets_blog2.png";

const Shop = () => {
  //window.scrollTo(0, 0);
  const [filterPrice, setFilterPrice] = useState(0);
  const [allMenu, setAllMenu] = useState();
  const [sorting, setSorting] = useState();
  const [menuContent, setMenuContant] = useState(true);
  const { carts, setCarts } = useContext(cartContext);
  const { userId, setUserId } = useContext(userIdContext);

  const baseUrl = "http://localhost:3500/api/v1";

  const getAllMenu = async () => {
    try {
      const response = await axios.get(`${baseUrl}/allmenus`);
      setAllMenu(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

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
    const Id = { userId };

    try {
      const response = await axios.post(`${baseUrl}/getcartmenus`, Id);
      console.log("getting all cart");
      setCarts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Default sorting") {
      setMenuContant(true);
    }
    if (selectedValue === "Sort by popularity") {
      sortByPorpularity();
    }
    if (selectedValue === "Sort by average rating") {
      sortByAveragerating();
    }
    if (selectedValue === "Sort by latest") {
      sortByLatest();
    }
    if (selectedValue === "Sort by price: low to high") {
      sortByLowToHigh();
    }
    if (selectedValue === "Sort by price: high to low") {
      sortByHighToLow();
    }
  };

  //Not Done
  const sortByPorpularity = async () => {
    try {
      const response = await axios.get(`${baseUrl}/sortbyporpularity`);
      setSorting(response.data.data);
      toast.success(response.data.message);
      setMenuContant(false);
    } catch (err) {
      console.log(err);
    }
  };

  const sortByAveragerating = async () => {
    try {
      const response = await axios.get(`${baseUrl}/sortbyaveragerating`);
      setSorting(response.data.data);
      toast.success(response.data.message);
      setMenuContant(false);
    } catch (err) {
      console.log(err);
    }
  };

  const sortByLatest = async () => {
    try {
      const response = await axios.get(`${baseUrl}/sortbylatest`);
      setSorting(response.data.data);
      toast.success(response.data.message);
      setMenuContant(false);
    } catch (err) {
      console.log(err);
    }
  };

  const sortByLowToHigh = async () => {
    try {
      const response = await axios.get(`${baseUrl}/sortbylowtohigh`);
      setSorting(response.data.data);
      toast.success(response.data.message);
      setMenuContant(false);
    } catch (err) {
      console.log(err);
    }
  };

  const sortByHighToLow = async () => {
    try {
      const response = await axios.get(`${baseUrl}/sortbyhightolow`);
      setSorting(response.data.data);
      toast.success(response.data.message);
      setMenuContant(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllMenu();
  }, []);

  return (
    <>
      <div className="shop">
        <div className="shopHead">
          <p className="shopHead1">Menu</p>
          <div className="shopHeadSub">
            <p className="shopHeadSub1">Home</p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="shopHeadSub2">Menu</p>
          </div>
        </div>
        <div className="shopMain">
          <div className="shopMainLeft">
            <div className="shopMainLeftHead">
              <p className="shopMainLeftHead1">Showing 1 - 27 results</p>
              <div id="shopmaindfilter">
                <i class="fa-solid fa-toggle-off"></i>
                <p>Filter</p>
              </div>
              <div className="shopMainLeftHead2">
                <div id="shopmaindisplay" className="shopMainLeftHead2-1">
                  <span className="shopMainLeftHead2-1l">
                    <IoGrid />
                  </span>
                  <span className="shopMainLeftHead2-1r">
                    <FaThList />
                  </span>
                </div>

                <div className="shopMainLeftHead2-2">
                  <select
                    onChange={(event) => handleSortChange(event)}
                    className="shopMainLeftHead2-2Sel"
                  >
                    <option value={"Default sorting"}>Default sorting</option>
                    <option value={"Sort by popularity"}>
                      Sort by popularity
                    </option>
                    <option value={"Sort by average rating"}>
                      Sort by average rating
                    </option>
                    <option value={"Sort by latest"}>Sort by latest</option>
                    <option value={"Sort by price: low to high"}>
                      Sort by price: low to high
                    </option>
                    <option value={"Sort by price: high to low"}>
                      Sort by price: high to low
                    </option>
                  </select>
                  <i class="fa-solid fa-angle-down"></i>
                </div>
              </div>
            </div>

            <div className="shopMainLeftCont">
              {menuContent ? (
                <div className="menuContent1">
                  {allMenu?.map((menu, index) => (
                    <div key={index}>
                      <FoodCard
                        updateCart={() => updateCart(menu)}
                        menuImage={menu.menuImage}
                        item={menu?.menuItem}
                        info={menu?.menuInfo}
                        price={menu?.menuPrice}
                        menu={menu}
                        rating={menu.menuRating}
                        menuId={menu.menuId}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="menuContent1">
                  {sorting?.map((menu, index) => (
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
              )}
            </div>
          </div>
          <div className="shopMainRight">
            <div className="shopMainRightCate">
              <p className="shopMainRightCateHead">Categories</p>
              <div className="shopMainRightCateMain">
                <div className="shopMainRightCateMain1">
                  <div className="shopMainRightCateMain1Sub">
                    <i class="fa-solid fa-burger"></i>
                    <p>Burgers</p>
                  </div>
                  <p className="shopMainRightCateMain1-2">(9)</p>
                </div>
                <div className="shopMainRightCateMain1">
                  <div className="shopMainRightCateMain1Sub">
                    <i class="fa-solid fa-pizza-slice"></i>
                    <p>Pizza</p>
                  </div>
                  <p className="shopMainRightCateMain1-2">(6)</p>
                </div>
                <div className="shopMainRightCateMain1">
                  <div className="shopMainRightCateMain1Sub">
                    <i class="fa-solid fa-utensils"></i>
                    <p>Pasta</p>
                  </div>
                  <p className="shopMainRightCateMain1-2">(3)</p>
                </div>
                <div className="shopMainRightCateMain1">
                  <div className="shopMainRightCateMain1Sub">
                    <i class="fa-solid fa-drumstick-bite"></i>
                    <p>Chicken</p>
                  </div>
                  <p className="shopMainRightCateMain1-2">(6)</p>
                </div>
                <div className="shopMainRightCateMain1">
                  <div className="shopMainRightCateMain1Sub">
                    <i class="fa-solid fa-cookie-bite"></i>
                    <p>Fries</p>
                  </div>
                  <p className="shopMainRightCateMain1-2">(4)</p>
                </div>
                <div className="shopMainRightCateMain1">
                  <div className="shopMainRightCateMain1Sub">
                    <i class="fa-solid fa-ice-cream"></i>
                    <p>Desserts</p>
                  </div>
                  <p className="shopMainRightCateMain1-2">(12)</p>
                </div>
                <div className="shopMainRightCateMain1">
                  <div className="shopMainRightCateMain1Sub">
                    <i class="fa-solid fa-martini-glass-citrus"></i>
                    <p>Cold Drinks</p>
                  </div>
                  <p className="shopMainRightCateMain1-2">(20)</p>
                </div>
                <div className="shopMainRightCateMain1">
                  <div className="shopMainRightCateMain1Sub">
                    <i class="fa-solid fa-mug-hot"></i>
                    <p>Hot Drinks</p>
                  </div>
                  <p className="shopMainRightCateMain1-2">(5)</p>
                </div>

                <div className="shopMainRightCateMain1">
                  <div className="shopMainRightCateMain1Sub">
                    <i class="fa-solid fa-bolt"></i>
                    <p>Uncategories</p>
                  </div>
                  <p className="shopMainRightCateMain1-2">(0)</p>
                </div>
              </div>
            </div>
            <div className="shopMainRightSearch">
              <div className="shopMainRightSearchInput">
                <input type="text" placeholder="Search products..." />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="shopMainRightFilterP">
              <p className="shopMainRightFilterPHead">Filter by price</p>
              <div className="shopMainRightFilterPMain">
                <input
                  type="range"
                  min={300}
                  max={20000}
                  value={filterPrice}
                  onChange={(e) => setFilterPrice(e.target.value)}
                />
                <p>Price: #0 - #{filterPrice}</p>
                <button>FILTER</button>
              </div>
            </div>
            <div className="shopMainRightFilterS">
              <p className="shopMainRightFilterSHead">Filter by size</p>
              <div className="shopMainRightFilterSMain">
                <p>L</p>
                <p>M</p>
                <p>S</p>
                <p>X</p>
              </div>
            </div>
            <div className="searchResultRightPoster">
              <p className="searchResultRightPoster1">Super Delicious</p>
              <p className="searchResultRightPoster2">Chicken</p>
              <p className="searchResultRightPoster3">call us now</p>
              <p className="searchResultRightPoster4 ">0800-343-2110</p>
              <div className="searchResultRightPoster5">
                <img src={poster} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
