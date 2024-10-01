import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import FindTheRight from "../../components/FindTheRight/FindTheRight";
import Popular from "../../components/Popular/Popular";
import AWhole from "../../components/AWhole/AWhole";
import FiverrPro from "../../components/FiverrPro/FiverrPro";
import AboutFiver from "../../components/AboutFiver/AboutFiver";
import FiverrLogo from "../../components/FiverrLogo/FiverrLogo";
import MadeOnFiverr from "../../components/MadeOnFiverr/MadeOnFiverr";

const UserTemplate = () => {
  // header , content , footer
  return (
    <>
      <Header />
      <FindTheRight />
      <Popular />
      <AWhole />
      <FiverrPro />
      <AboutFiver />
      <FiverrLogo />
      <MadeOnFiverr />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default UserTemplate;
