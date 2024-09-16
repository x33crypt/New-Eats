import React from "react";
import "./contact.css";

const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <div className="contact">
      <div className="contactHead">
        <p className="contactHead1">Contact Us</p>
        <div className="contactHeadSub">
          <p className="contactHeadSub1">Home</p>
          <i class="fa-solid fa-angle-right"></i>
          <p className="contactHeadSub2">Contact us</p>
        </div>
      </div>
      <div className="contactMain">
        <div className="contactMainHead">
          <p className="contactMainHead1">Call us or visit place</p>
          <p className="contactMainHead2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="contactMainMid">
          <div className="contactMainMid1">
            <i class="fa-solid fa-mobile"></i>
            <p className="contactMainMid1-1">Phone:</p>
            <p className="contactMainMid1-2">0800-343-2110</p>
            <p className="contactMainMid1-2">0701-999-7841</p>
          </div>
          <div className="contactMainMid2">
            <i class="fa-solid fa-location-dot"></i>
            <p className="contactMainMid2-1">Address:</p>
            <p className="contactMainMid2-2">
              Opposit palm mall, tanke, ilorin, kwara state.
            </p>

            <p className="contactMainMid2-2">
              No 17, obama lane, ikeja, lagos state.
            </p>
          </div>
          <div className="contactMainMid3">
            <i class="fa-regular fa-envelope"></i>
            <p className="contactMainMid3-1">Email:</p>
            <p className="contactMainMid3-2">contact@mreats.com</p>
            <p className="contactMainMid3-2">Customers_support@mreats.com</p>
          </div>
        </div>
        <div className="contactMainButtom">
          <div className="contactMainButtomMain">
            <div className="contactMainButtomMainL">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.009803949396!2d4.5840280735223775!3d8.498426597071541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d52f9bcd7bd%3A0xfd0ee1076fd1f45a!2sPalms%20Mall%2C%20Ilorin!5e0!3m2!1sen!2sng!4v1718952738412!5m2!1sen!2sng"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contactMainButtomMainR">
              <form>
                <div className="contactMainButtomMainRHead">
                  <p className="contactMainButtomMainRHead1">
                    Send us a message
                  </p>
                  <p className="contactMainButtomMainRHead2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="contactMainButtomMainRMain">
                  <input
                    className="contactMainButtomMainRMain1"
                    type="text"
                    placeholder="Your name"
                  />
                  <input
                    className="contactMainButtomMainRMain2"
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    className="contactMainButtomMainRMain3"
                    type="text"
                    placeholder="Subject"
                  />
                  <textarea
                    className="contactMainButtomMainRMain4"
                    name=""
                    id=""
                    placeholder="Comment"
                  />
                  <div className="contactMainButtomMainRMain5">
                    <button>SUBMIT</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
