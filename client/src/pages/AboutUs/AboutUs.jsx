import React, { useState } from "react";
import "./aboutus.css";
import AboutImg1 from "../../assets/image1-h4.jpg";
import AboutImg2 from "../../assets/image2-h4.jpg";
import AboutImg3 from "../../assets/image3-h4.jpg";
import AboutImg3Bac from "../../assets/vector2-h3.png";
import AboutImg5 from "../../assets/about-imager-5.png";
import AboutImg6 from "../../assets/about-imager-6.png";
import AboutImg7 from "../../assets/about-imager-7.png";
import chef1 from "../../assets/87cbca3b19212fa120d706d8c0be593f.jpg";
import chef2 from "../../assets/4f6e6bd9ed293aa99dfc05afa8fd2b35.jpg";
import chef3 from "../../assets/IMG_5347.webp";

const AboutUs = () => {
  window.scrollTo(0, 0);
  const [showAboutVideo, setShowAboutVideo] = useState(false);

  return (
    <>
      <div className="aboutUs">
        <div className="aboutUsHead">
          <p className="aboutUsHead1">About Us</p>
          <div className="aboutUsHeadSub">
            <p className="aboutUsHeadSub1">Home</p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="aboutUsHeadSub2">About us</p>
          </div>
        </div>
        <div className="aboutUsTop">
          <div className="aboutUsTop1">
            <p className="aboutUsTop1-1">Welcome!</p>
            <p className="aboutUsTop1-2">
              Best burger ideas & traditions from the whole world
            </p>
            <p className="aboutUsTop1-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <p className="aboutUsTop1-4">
              Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
              fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl
              vitae ullamcorper. Proin sed ultrices erat.
            </p>
            <div className="aboutUsTop1-5">
              <button>CONTACT NOW</button>
            </div>
          </div>
          <div className="aboutUsTop2">
            <div className="aboutUsTop2-1">
              <img src={AboutImg1} alt="" />
            </div>
            <div className="aboutUsTop2-2">
              <img className="aboutUsTop2-2a" src={AboutImg2} alt="" />
              <img className="aboutUsTop2-2b" src={AboutImg3} alt="" />
            </div>
          </div>
          <img className="aboutImg3Bac" src={AboutImg3Bac} alt="" />
        </div>
        <div className="aboutUsVideo">
          <div className="aboutUsVideoFade"></div>
          <div className="aboutUsVideoCont">
            <div
              onClick={() => setShowAboutVideo(!showAboutVideo)}
              className="aboutUsVideoCont1"
            >
              <i class="fa-solid fa-play"></i>
            </div>
            <div
              className={
                showAboutVideo ? "showAboutUsVideoDiv" : "exitAboutUsVideoDiv"
              }
            >
              <div className="showAboutUsVideoIcon">
                <i
                  onClick={() => setShowAboutVideo(!showAboutVideo)}
                  class="fa-regular fa-circle-xmark"
                ></i>
              </div>
              <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/sv3TXMSv6Lw?si=6XIn8DgU1fUQd2Uo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <p className="aboutUsVideoCont2">
              Make the thing Anything is Possible
            </p>
            <p className="aboutUsVideoCont3">
              Enjoy our luscious dishes wherever you want
            </p>
            <div className="aboutUsVideoCont4">
              <button>ORDER NOW</button>
            </div>
          </div>
        </div>
        <div className="aboutUsMenu">
          <div className="aboutUsMenu1">
            <div className="aboutUsMenu1L">
              <p className="aboutUsMenu1L1">Our Quality</p>
              <p className="aboutUsMenu1L2">Chicken</p>
              <p className="aboutUsMenu1L3">
                Quality is our #1 ingredient. That’s why our Chicken Wings,
                Chicken Bites and Grilled Chicken Topping are made from chickens
                raised without antibiotics and fed an all vegetable-grain diet,
                with no animal by-products. Plus, our Bites are made with 100%
                chicken breast meat.
              </p>
              <div className="aboutUsMenu1L5">
                <button>ORDER NOW</button>
              </div>
            </div>
            <div className="aboutUsMenu1r">
              <img src={AboutImg5} alt="" />
            </div>
          </div>
          <div className="aboutUsMenu2">
            <div className="aboutUsMenu2r">
              <img src={AboutImg6} alt="" />
            </div>
            <div className="aboutUsMenu1L">
              <p className="aboutUsMenu1L1">Our Quality</p>
              <p className="aboutUsMenu1L2">Burger</p>
              <p className="aboutUsMenu1L3">
                Some of the world’s best cheese is made close to home! All our
                deliciously melty Mozzarella is made with 100% Canadian milk.
                We’re proud to support Canadian dairy farmers.
              </p>
              <div className="aboutUsMenu1L5">
                <button>ORDER NOW</button>
              </div>
            </div>
          </div>
          <div className="aboutUsMenu3">
            <div className="aboutUsMenu1L">
              <p className="aboutUsMenu1L1">Our Quality</p>
              <p className="aboutUsMenu1L2">Pizza Douch</p>
              <p className="aboutUsMenu1L3">
                Quality is our #1 ingredient. That’s why our Chicken Wings,
                Chicken Bites and Grilled Chicken Topping are made from chickens
                raised without antibiotics and fed an all vegetable-grain diet,
                with no animal by-products. Plus, our Bites are made with 100%
                chicken breast meat.
              </p>
              <div className="aboutUsMenu1L5">
                <button>ORDER NOW</button>
              </div>
            </div>
            <div className="aboutUsMenu3r">
              <img src={AboutImg7} alt="" />
            </div>
          </div>
        </div>
        <div className="aboutUsChef">
          <div className="aboutUsChefHead">
            <p className="aboutUsChefHead1">always Quality</p>
            <p className="aboutUsChefHead2">Our Talented Chefs</p>
          </div>
          <div className="aboutUsChefMain">
            <div className="aboutUsChefMain1">
              <div className="aboutUsChefMain1Img">
                <img src={chef1} alt="" />
              </div>
              <div className="aboutUsChefMain1Txt">
                <p className="aboutUsChefMain1Txt1">WILLIAM SMITH</p>
                <p className="aboutUsChefMain1Txt2">
                  Everything We Pizza, We Pizza With Love. Designer Fastfood.
                </p>
                <div className="aboutUsChefMain1Lable">CHEF</div>
              </div>
              <p className=""></p>
            </div>
            <div className="aboutUsChefMain1">
              <div className="aboutUsChefMain1Img">
                <img src={chef2} alt="" />
              </div>
              <div className="aboutUsChefMain1Txt">
                <p className="aboutUsChefMain1Txt1">HILDA BACI</p>
                <p className="aboutUsChefMain1Txt2">
                  Everything We Pizza, We Pizza With Love. Designer Fastfood.
                </p>
                <div className="aboutUsChefMain1Lable">CHEF</div>
              </div>
              <p className=""></p>
            </div>
            <div className="aboutUsChefMain1">
              <div className="aboutUsChefMain1Img">
                <img src={chef3} alt="" />
              </div>
              <div className="aboutUsChefMain1Txt">
                <p className="aboutUsChefMain1Txt1">DAVID OLUSOGA</p>
                <p className="aboutUsChefMain1Txt2">
                  Everything We Pizza, We Pizza With Love. Designer Fastfood.
                </p>
                <div className="aboutUsChefMain1Lable">CHEF</div>
              </div>
              <p className=""></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
