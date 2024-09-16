import React, { useEffect, useState } from "react";
import "./adminsignin.css";
import backImg from "../../assets/pexels-photo-2983022.jpeg";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AdminSignin = () => {
  window.scrollTo(0, 0);
  const [adminDetails, setAdminDetails] = useState({
    ID: "",
    password: "",
  });
  const [isSigningIn, setIsSigningIn] = useState(false);

  const baseUrl = "http://localhost:3500/api/v1";

  const handleAdminDetails = (e) => {
    setAdminDetails({ ...adminDetails, [e.target.name]: e.target.value });
  };

  console.log(adminDetails);
  const navigateTo = useNavigate();

  const handleAdminSignin = async (e) => {
    e.preventDefault();
    console.log(adminDetails);
    setIsSigningIn(true);
    try {
      const response = await axios.post(`${baseUrl}/signinadmin`, adminDetails);
      console.log(response);
      setIsSigningIn(false);
      toast.success(response.data.message);
      navigateTo("/admin-dashboard");
    } catch (err) {
      console.log(err);
      setIsSigningIn(false);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="adminSignIn">
      <img src={backImg} />
      <form onSubmit={handleAdminSignin} className="adminSignInForm">
        <div className="adminSignInFormHead">Welcome back!</div>
        <div className="adminSignInForm1">
          <p>
            Admin ID<span>*</span>
          </p>
          <input
            onChange={handleAdminDetails}
            type="text"
            name="ID"
            placeholder="ID"
          />
        </div>
        <div className="adminSignInForm2">
          <p>
            Password <span>*</span>
          </p>
          <input
            onChange={handleAdminDetails}
            type="text"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="adminSignInForm3">
          <button>{isSigningIn ? "LOGGING IN..." : "LOGIN"}</button>
        </div>
        <p className="adminSignInForm4">Lost your password?</p>
      </form>
    </div>
  );
};

export default AdminSignin;
