import React, { useEffect, useState, useContext } from "react";
import "./searchresult.css";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import FoodCard from "../../components/FoodCard";
import { cartContext } from "../../App";
import { toast } from "sonner";
import poster from "../../assets/widgets_blog2.png";

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState();
  const { carts, setCarts } = useContext(cartContext);

  const baseUrl = "http://localhost:3500/api/v1";
  const { query } = useParams();

  console.log(query);

  const handleSearch = async () => {
    console.log(query);
    console.log("fetching search result");
    try {
      const response = await axios.get(`${baseUrl}/searchmenu/${query}`);
      console.log(response);
      setSearchResult(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(searchResult);

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

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="searchResult">
      <div className="shopHead">
        <p className="shopHead1">Search Results: "{query.toUpperCase()}"</p>
        <div className="searchHeadSub">
          <p className="shopHeadSub1">Home</p>
          <i class="fa-solid fa-angle-right"></i>
          <p className="shopHeadSub1">Menu</p>
          <i class="fa-solid fa-angle-right"></i>
          <p className="shopHeadSub2">
            Search results for "{query.toUpperCase()}"
          </p>
        </div>
      </div>
      <div className="shopMain">
        <div className="shopMainLeft">
          <div className="shopMainLeftHead">
            <p className="shopMainLeftHead1">
              Showing 1 - {searchResult?.lenght} results
            </p>
            <div className="shopMainLeftHead2">
              <div className="shopMainLeftHead2-1">
                <span className="shopMainLeftHead2-1l">
                  <IoGrid />
                </span>
                <span className="shopMainLeftHead2-1r">
                  <FaThList />
                </span>
              </div>
              <div className="shopMainLeftHead2-2">
                <select className="shopMainLeftHead2-2Sel">
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
            <div className="menuContent1">
              {searchResult?.map((result, index) => (
                <div key={index}>
                  <FoodCard
                    updateCart={() => updateCart(result)}
                    menuImage={result.menuImage}
                    item={result?.menuItem}
                    info={result?.menuInfo}
                    price={result?.menuPrice}
                    menu={result}
                    rating={result.menuRating}
                    menuId={result.menuId}
                  />
                </div>
              ))}
            </div>
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
  );
};

export default SearchResult;
