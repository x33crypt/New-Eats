import React from "react";
import AlwaysQuality from "../../components/AlwaysQuality";
import Combo from "../../components/Combo";
import Footer from "../../components/Footer";
import HotFresh from "../../components/HotFresh";
import Nav from "../../components/Nav";
import OurMenu from "../../components/OurMenu";
import OurService from "../../components/OurService";
import SpecialTaste from "../../components/SpecialTaste";
import TopBody from "../../components/TopBody";

const HomePage = () => {
  return (
    <>
      <Nav />
      <TopBody />
      <Combo />
      <HotFresh />
      <OurMenu />
      <AlwaysQuality />
      <SpecialTaste />
      <OurService />
      <Footer />
    </>
  );
};

export default HomePage;
