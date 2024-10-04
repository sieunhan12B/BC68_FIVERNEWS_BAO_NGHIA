import React from "react";
import color from "../../../tailwind.config";

const Guides = () => {
  return (
    <div className="Guides">
      <div className="container mx-auto">
        <h2 className="mt-8 text-4xl font-semibold">Guides to help you grow</h2>
        <div className="mt-6 grid grid-cols-3 gap-3 ">
          {/* 1 */}
          <div>
            <img className="rounded-md" src="./G_1.jpeg" alt="" />
            <h3 className="mt-2 font-semibold"> Start a side business</h3>
          </div>
          {/* 2 */}
          <div>
            <img className="rounded-md" src="./G_2.jpg" alt="" />
            <h3 className="mt-2 font-semibold">Ecommerce business Ideas</h3>
          </div>
          {/* 1 */}
          <div>
            <img className="rounded-md" src="./G_3.jpg" alt="" />
            <h3 className="mt-2 font-semibold">
              {" "}
              Start an online business and work from home
            </h3>
          </div>
        </div>
      </div>

      {/* Freelance services at your fingertips */}
      <div className="bg-pink-950 h-200 mx-10 mt-10 relative rounded-xl flex flex-col items-center justify-center">
        <h2 className="text-white text-center text-6xl mt-8 ">
          Freelance services at your fingertips!
        </h2>
        <button className="bg-white text-xl font-semibold  text-center h-10 my-12 items-center  justify-center rounded-lg p-2 ">
          Join Fiverr
        </button>
      </div>
    </div>
  );
};

export default Guides;
