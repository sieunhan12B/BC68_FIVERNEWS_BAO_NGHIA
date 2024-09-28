import React from "react";
// import logo from "../../assets/img/p_1.png";

const aWhole = () => {
  return (
    <div className="container">
      <h2 className=" text-5xl my-14">
        A Whole world of freelance <br /> talent at your fingertips
      </h2>
      <div className=" mx-2 grid grid-cols-4">
        {/* 1 */}
        <div>
          <img src="../../../public/4_1.svg" alt="" />
          <h3 className="mt-4 text-xl">Over 700 categories</h3>
          <h4 className="mt-8">
            Get results from skilled freelancers from all over the world, for
            every task, at any price point.
          </h4>
        </div>

        {/* 2 */}
        <div>
          <img src="../../../public/4_2.svg" alt="" />
          <h3 className="mt-4 text-xl">Clear, transparent pricing</h3>
          <h4 className="mt-8">
            Pay per project or by the hour (Pro). Payments only get released
            when you approve.
          </h4>
        </div>
        {/* 3 */}
        <div>
          <img src="../../../public/4_3.svg" alt="" />
          <h3 className="mt-4 text-xl">Quality work done faster</h3>
          <h4 className="mt-8">
            Filter to find the right freelancers quickly and get great work
            delivered in no time, every time.
          </h4>
        </div>

        {/* 4 */}
        <div>
          <img src="../../../public/4_4.svg" alt="" />
          <h3 className="mt-4 text-xl">24/7 award-winning support</h3>
          <h4 className="mt-8">
            Chat with our team to get your questions answered or resolve any
            issues with your orders.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default aWhole;
