import React from "react";
import "./ourservice.css";
import ourServiceButtom1 from "../assets/gallery1.jpg";
import ourServiceButtom2 from "../assets/gallery2.jpg";
import ourServiceButtom3 from "../assets/gallery3.jpg";
import ourServiceButtom4 from "../assets/img4-h3.jpg";
import ourServiceButtom5 from "../assets/gallery5.jpg";
import ourServiceButtom6 from "../assets/gallery7.jpg";
import ourServiceButtom7 from "../assets/gallery6.jpg";
import ourServiceButtom8 from "../assets/gallery8.jpg";

const OurService = () => {
  return (
    <div className="ourService">
      <div className="ourServiceHead">
        <p className="ourServiceHeadTitle1">Our Services</p>
        <p className="ourServiceHeadTitle2">Why choose us?</p>
      </div>
      <div className="ourServiceMain">
        <div className="ourService1">
          <div className="ourService1-1">
            <i class="fa-solid fa-credit-card"></i>
          </div>
          <div className="ourService1-2">
            <p className="ourService1Txt1">Accept Card</p>
            <p className="ourService1Txt2">
              We accept all major credit and debit cards for a hassle-free
              payment experience.
            </p>
          </div>
        </div>
        <div className="ourService2">
          <div className="ourService2-1">
            <i class="fa-regular fa-calendar"></i>
          </div>
          <div className="ourService2-2">
            <p className="ourService2Txt1">Online Booking</p>
            <p className="ourService2Txt2">
              Reserve your table online in seconds with our seamless online
              booking system. Simple, fast, and secure.
            </p>
          </div>
        </div>
        <div className="ourService3">
          <div className="ourService3-1">
            <i class="fa-solid fa-truck-fast"></i>
          </div>
          <div className="ourService3-2">
            <p className="ourService3Txt1">Home Delivery</p>
            <p className="ourService3Txt2">
              Craving your favorites at home? Enjoy fast and reliable delivery
              straight to your door.
            </p>
          </div>
        </div>
        <div className="ourService4">
          <div className="ourService4-1">
            <i class="fa-solid fa-shop"></i>
          </div>
          <div className="ourService4-2">
            <p className="ourService4Txt1">Best Location</p>
            <p className="ourService4Txt2">
              Located in the heart of the city, our restaurant is easily
              accessible and perfect for any occasion.
            </p>
          </div>
        </div>
      </div>
      <div className="ourServiceButtom">
        <div className="ourServiceButtom1">
          <img src={ourServiceButtom1} alt="" />
        </div>
        <div className="ourServiceButtom1">
          <img src={ourServiceButtom2} alt="" />
        </div>
        <div className="ourServiceButtom1">
          <img src={ourServiceButtom3} alt="" />
        </div>
        <div className="ourServiceButtom1">
          <img src={ourServiceButtom4} alt="" />
        </div>
      </div>
      <div className="ourServiceButtom2">
        <div className="ourServiceButtom1">
          <img src={ourServiceButtom5} alt="" />
        </div>
        <div className="ourServiceButtom1">
          <img src={ourServiceButtom6} alt="" />
        </div>
        <div className="ourServiceButtom1">
          <img src={ourServiceButtom7} alt="" />
        </div>
        <div className="ourServiceButtom1">
          <img src={ourServiceButtom8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurService;
