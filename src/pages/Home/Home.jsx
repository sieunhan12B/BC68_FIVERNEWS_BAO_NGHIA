import React from "react";
import FindTheRight from "../../components/FindTheRight/FindTheRight";
import Popular from "../../components/Popular/Popular";
import FiverrPro from "../../components/FiverrPro/FiverrPro";
import AboutFiver from "../../components/AboutFiver/AboutFiver";
import FiverrLogo from "../../components/FiverrLogo/FiverrLogo";
import MadeOnFiverr from "../../components/MadeOnFiverr/MadeOnFiverr";
import AWhole from "../../components/AWhole/AWhole";
import CategorySection from "../../components/FindTheRight/CategorySection";

const Home = () => {
  return (
    <>
      <FindTheRight />
      <CategorySection />
      <Popular />
      <AWhole />
      <FiverrPro />
      <AboutFiver />/
      <FiverrLogo />
      <MadeOnFiverr />
    </>
  );
};

export default Home;
