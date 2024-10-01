import React from "react";

const FiverrPro = () => {
  return (
    <div className="container">
      {/* Fiverr pro */}
      <div className="  flex flex-row bg-green-900 mt-4 text-white">
        <div className="m-8">
          <h2 className="text-2xl my-6 font-bold">fiverrpro.</h2>
          <h3 className="text-4xl my-6 font-semibold">
            New e-Commerce project management service made for your business
          </h3>
          <h4 className="mt-3">
            An experienced e-Commerce project manager will plan, coordinate, and
            execute your project. Overseeing a team of e-Commerce experts,
            they'll handle everything from site building, design and content to
            optimization, marketing strategies, and UGC videos.
            <div>
              <h5 className="font-semibold mt-3">
                To get started, you should have:
              </h5>
              <ul className="mt-3">
                <li>
                  An e-Commerce project requiring expertise in various fields
                </li>
                <li>A budget exceeding $1000</li>
                <li>A desire to get things done, without the hassle</li>
              </ul>
            </div>
            <button className="bg-orange-500 rounded text-lg font-bold p-3 m-4">
              Get started
            </button>
          </h4>
        </div>
        <div className="mt-40">
          <img src="./X1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FiverrPro;
