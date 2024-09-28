import React from "react";
// import { color_4 } from "../../../tailwind.config";

const Popular = () => {
  return (
    <div className="container ">
      <h2 className="text-6xl my-8">Popular services</h2>

      <div className="flex h-60 w-50 carousel-wrapper gap-8 ">
        {/* P_1 */}
        <div className=" bg-green-600 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">
            Website Development
          </h3>
          <div className="rounded-lg">
            <img src="../../../public/p_1.png" alt="" />
          </div>
        </div>

        {/* P_2 */}
        <div className=" bg-orange-500 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">Logo Design</h3>
          <div className="rounded-lg">
            <img src="../../../public/p_2.png" alt="" />
          </div>
        </div>

        {/* P_3 */}
        <div className=" bg-green-900 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">SEO</h3>
          <div className="rounded-lg">
            <img src="../../../public/p_3.png" alt="" />
          </div>
        </div>

        {/* P_4 */}
        <div className="bg-pink-600 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">
            Architecture & Interior Design
          </h3>
          <div className=" rounded-lg">
            <img src="../../../public/p_4.png" alt="" />
          </div>
        </div>

        {/* P_5 */}
        <div className=" bg-green-500 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">
            Social Media Marketing
          </h3>
          <div className="rounded-lg">
            <img src="../../../public/p_5.png" alt="" />
          </div>
        </div>

        {/* P_6 */}
        <div className=" bg-amber-800 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">Voice Over</h3>
          <div className="rounded-lg">
            <img src="../../../public/p_6.png" alt="" />
          </div>
        </div>

        {/* P_7 */}
        <div className=" bg-green-800 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">
            Software Development
          </h3>
          <div className="rounded-lg">
            <img src="../../../public/p_7.png" alt="" />
          </div>
        </div>

        {/* P_8 */}
        <div className=" bg-red-700 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">
            Date Science & ML
          </h3>
          <div className="rounded-lg">
            <img src="../../../public/p_8.png" alt="" />
          </div>
        </div>

        {/* P_9 */}
        <div className="bg-green-400 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">
            Product Photography
          </h3>
          <div className="rounded-lg">
            <img src="../../../public/p_9.png" alt="" />
          </div>
        </div>

        {/* P_10 */}
        <div className=" bg-green-800 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">
            E-Commerce Marketing
          </h3>
          <div className="rounded-lg">
            <img src="../../../public/p_10.png" alt="" />
          </div>
        </div>

        {/* P_11 */}
        <div className=" bg-pink-500 rounded-lg">
          <h3 className="text-white text-sm font-bold my-5">Video Editing</h3>
          <div className="rounded-lg">
            <img src="../../../public/p_11.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
