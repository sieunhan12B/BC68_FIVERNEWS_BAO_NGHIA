import { icons } from "antd/es/image/PreviewGroup";
import React from "react";
import CategorySection from "./CategorySection";
import { Netflix } from "../Icon/Netflix";
import IconGoogle from "../Icon/IconGoogle";
import IconPaypal from "../Icon/IconPaypal";
import IconPayonner from "../Icon/IconPayonner";
import IconPg from "../Icon/IconPg";
// import "./FreelanceService.css"; // Import your custom styles
// import bg_1 from "../../assets/img/bg_1.png";
//
const FindTheRight = () => {
  return (
    <>
      <div className="find-the-right       ">
        <div className="container w-full h-96  bg-[url('/public/bg_1.png')] bg-no-repeat bg-cover rounded-2xl flex    justify-center  ">
          <div className=" flex flex-col justify-end max-md:justify-center         gap-10  text-white      ">
            {/* Hero Headline */}
            <div className="w-full  text-center  ">
              <h1 className="text-5xl    font-semibold">
                Find the right <span className="text-green-400">freelance</span>{" "}
                <br />
                service, right away
              </h1>
            </div>

            {/* Search Bar */}
            <div className="w-full    ">
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
            </div>

            <div className="  flex max-md:hidden  items-center gap-12 mb-8   text-gray-400 ">
              <p>Trusted by:</p>
              <div className="flex justify-center  gap-12   mt-3">
                <Netflix />
                <IconGoogle />
                <IconPayonner />
                <IconPg />
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
