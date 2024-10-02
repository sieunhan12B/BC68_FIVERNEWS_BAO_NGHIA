import { icons } from "antd/es/image/PreviewGroup";
import React from "react";
import CategorySection from "./CategorySection";
// import "./FreelanceService.css"; // Import your custom styles
// import bg_1 from "../../assets/img/bg_1.png";
//
const FindTheRight = () => {
  return (
    <>
      <div className="find-the-right h-[70vh]  ">
        <div className="container h-full">
          <div className=" bg-[url('/public/bg_1.png')] bg-no-repeat rounded-2xl py-12 flex items-center flex-wrap h-full space-y-8  text-white    justify-center ">
            {/* Hero Headline */}
            <div className="w-full h-1/3 text-center">
              <h1 className="text-4xl md:text-5xl  font-bold">
                Find the right <span className="text-green-400">freelance</span>{" "}
                <br />
                service, right away
              </h1>
            </div>

            {/* Search Bar */}
            <div className="w-full h-2/3   max-w-md">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search for any service..."
                  className="w-full px-4 py-3 rounded-full shadow focus:outline-none text-gray-800"
                />
                <button className="absolute right-2 px-4 py-2 bg-green-600 text-white rounded-full">
                  🔍
                </button>
              </div>
              <div className="  text-gray-400 mt-2">
                <p>Trusted by:</p>
                <div className="flex justify-center space-x-4 mt-3">
                  <img
                    className="w-20"
                    src="https://via.placeholder.com/50"
                    alt="Meta"
                  />
                  <img
                    className="w-20"
                    src="https://via.placeholder.com/50"
                    alt="Google"
                  />
                  <img
                    className="w-20"
                    src="https://via.placeholder.com/50"
                    alt="Netflix"
                  />
                  <img
                    className="w-20"
                    src="https://via.placeholder.com/50"
                    alt="PayPal"
                  />
                </div>
              </div>
            </div>

            {/* Trusted by Brands */}
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <footer>
        <p>Trusted by:</p>
        <div className="trusted-logos">
          <img src="meta.png" alt="Meta" />
          <img src="google.png" alt="Google" />
          <img src="netflix.png" alt="Netflix" />
          <img src="pg.png" alt="P&G" />
          <img src="paypal.png" alt="PayPal" />
          <img src="payoneer.png" alt="Payoneer" />
        </div>
      </footer> */
}
//     </div>
//   );
// };

export default FindTheRight;
