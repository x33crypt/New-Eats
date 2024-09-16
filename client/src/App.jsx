import HomePage from "./pages/Home/HomePage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import { Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist/Wishlist";
import AboutUs from "./pages/AboutUs/AboutUs";
import Menu from "./pages/Menu/Menu";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer";
import NavTwo from "./components/NavTwo";
import NavOne from "./components/NavOne";
import Contact from "./pages/Contact/Contact";
import Order from "./pages/Order/Order";
import Blog from "./pages/Blogs/Blog";
import AdminSignin from "./pages/AdminSignin/AdminSignin";
import { Toaster } from "sonner";
import AdminDash from "./pages/AdminDashboard/AdminDash";
import MenuPrev from "./pages/MenuPreview/MenuPrev";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
import SearchResult from "./pages/SearchResult/SearchResult";
import CheckOut from "./pages/CheckOut/CheckOut";
import MenuFoot from "./components/MenuFoot";

export const userContext = createContext();
export const cartContext = createContext();
export const tokenContext = createContext();
export const cartTotalContext = createContext();
export const userIdContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [carts, setCarts] = useState([]);
  const [cartTotal, setCartTotal] = useState();
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || undefined
  );
  const [userId, setUserId] = useState(
    localStorage.getItem("userId") || undefined
  );

  useEffect(() => {
    setUserToken(localStorage.getItem("token"));
  }, [userToken]);

  // console.log(userToken);

  const baseUrl = import.meta.env.VITE_API_URL;

  const getCartMenus = async () => {
    const Id = { userId };

    try {
      const response = await axios.post(`${baseUrl}/getcartmenus`, Id);
      setCarts(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCartMenus();
  }, []);

  return (
    <>
      <Toaster position="top-right" font-size="50px" />
      <userIdContext.Provider value={{ userId, setUserId }}>
        <userContext.Provider value={{ user, setUser }}>
          <cartTotalContext.Provider value={{ cartTotal, setCartTotal }}>
            <tokenContext.Provider value={{ userToken, setUserToken }}>
              <cartContext.Provider value={{ carts, setCarts }}>
                <NavOne />
                <NavTwo />
                <Routes>
                  <Route path="/admin-dashboard" element={<AdminDash />} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/sign-up" element={<SignUpPage />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/orders" element={<Order />} />
                  <Route path="/blogs" element={<Blog />} />
                  <Route path="/adminsignin" element={<AdminSignin />} />
                  <Route path="/menupreview/:id" element={<MenuPrev />} />
                  <Route
                    path="/searchresult/:query"
                    element={<SearchResult />}
                  />
                  <Route path="/checkout" element={<CheckOut />} />
                </Routes>
                <Footer />
                <MenuFoot />
              </cartContext.Provider>
            </tokenContext.Provider>
          </cartTotalContext.Provider>
        </userContext.Provider>
      </userIdContext.Provider>
    </>
  );
}

export default App;
