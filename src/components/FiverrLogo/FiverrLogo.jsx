import React from "react";

const FiverrLogo = () => {
  return (
    // <div className="md:flex">
    <div className="md:shrink-0">
      <div className=" bg-pink-100 container ">
        <h2 className="text-xl font-semibold mt-4 mx-10">fiverr logo maker.</h2>
        <div className=" flex flex-row mt-4 mx-10">
          <div className="left gap-10">
            <h3 className="text-2xl">Make an incredible logo in seconds</h3>{" "}
            <br />
            <h4>Pre-designed by top talent. Just add your touch.</h4>
            <button className="mt-6  bg-black text-white text-sm rounded-lg p-2 ">
              Try Fiverr Loggo Maker
            </button>
          </div>{" "}
          <div className="md:flex">
            <div className="right mx-40">
              <img src="./logo-maker-lohp.png " alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default FiverrLogo;
