import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import FindTheRight from "../../components/FindTheRight/FindTheRight";
import Popular from "../../components/Popular/Popular";
import AWhole from "../../components/AWhole/AWhole";
import FiverrPro from "../../components/FiverrPro/FiverrPro";

const UserTemplate = () => {
  // header , content , footer
  return (
    <>
      <Header />
      <FindTheRight />
      <Popular />
      <AWhole />
      <FiverrPro />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default UserTemplate;
