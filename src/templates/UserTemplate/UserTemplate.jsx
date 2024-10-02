import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const UserTemplate = () => {
  // header , content , footer
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default UserTemplate;
