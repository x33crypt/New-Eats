import HomePage from "./pages/Home/HomePage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import { Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist/Wishlist";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
