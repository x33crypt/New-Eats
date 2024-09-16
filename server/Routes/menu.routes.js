const {
  getAllMenu,
  sortByLowToHigh,
  sortByHighToLow,
  sortByAverageRating,
  sortBylatest,
  getAllBlog,
  getAllDeals,
  getHotDealPizza,
  getHotDealSalads,
  getHotDealSushi,
  getHotDealBurger,
  getHotDealDesert,
  getMenu,
  addMenuToCart,
  getCartMenu,
  getUserQuary,
  deleteCart,
  checkOutCart,
  getRelatedMenu,
  PrevUpdateCart,
} = require("../controllers/menu.controller");
const express = require("express");
const protect = require("../middlewares/protect");

const menuRoutes = express.Router();

//Get all menu
menuRoutes.get("/searchmenu/:query", getUserQuary);
menuRoutes.get("/menu/:id", getMenu);
menuRoutes.post("/addmenutocart", addMenuToCart);
menuRoutes.post("/relatedmenu/:category", getRelatedMenu);
menuRoutes.post("/deletecart", deleteCart);
menuRoutes.post("/getcartmenus", getCartMenu);
menuRoutes.get("/allmenus", getAllMenu);
menuRoutes.get("/allblogs", getAllBlog);
menuRoutes.get("/alldeals", protect, getAllDeals);
menuRoutes.get("/pizza", protect, getHotDealPizza);
menuRoutes.get("/sushi", protect, getHotDealSushi);
menuRoutes.get("/salads", protect, getHotDealSalads);
menuRoutes.get("/burger", protect, getHotDealBurger);
menuRoutes.get("/deserts", protect, getHotDealDesert);
menuRoutes.get("/sortbylowtohigh", sortByLowToHigh);
menuRoutes.get("/sortbyhightolow", sortByHighToLow);
menuRoutes.get("/sortbyaveragerating", sortByAverageRating);
menuRoutes.get("/sortbylatest", sortBylatest);
menuRoutes.post("/prevupdatecart", PrevUpdateCart);
menuRoutes.post("/quarycheckoutcart", protect, getCartMenu);
menuRoutes.post("/checkoutcart", checkOutCart);

module.exports = menuRoutes;
