import React from "react";
// import { color_4 } from "../../../tailwind.config";
import { Carousel } from "react-responsive-carousel";

const Popular = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-4xl md:text-4xl font-bold ">
          Popular services
        </h2>
        <Carousel>
          <div className="flex md:flex-wrap w-full justify-items-center  mt-2">
            <div className="flex h-30 w-30  gap-4 ">
              {/* P_1 */}
              <div className=" bg-green-600 rounded-lg ">
                <h3 className="text-white text-sm font-bold my-5">
                  Website Development
                </h3>
                <div className="rounded-lg">
                  <img src="./p_1.png" alt="" />
                </div>
              </div>

              {/* P_2 */}
              <div className=" bg-orange-500 rounded-lg">
                <h3 className="text-white text-sm font-bold my-5">
                  Logo Design
                </h3>
                <div className="rounded-lg">
                  <img src="./p_2.png" alt="" />
                </div>
              </div>

              {/* P_3 */}
              <div className=" bg-green-900 rounded-lg">
                <h3 className="text-white text-sm font-bold my-5">SEO</h3>
                <div className="rounded-lg">
                  <img src="./p_3.png" alt="" />
                </div>
              </div>

              {/* P_4 */}
              <div className="bg-pink-600 rounded-lg">
                <h3 className="text-white text-sm font-bold my-5">
                  Architecture & Interior Design
                </h3>
                <div className=" rounded-lg">
                  <img src="./p_4.png" alt="" />
                </div>
              </div>

              {/* P_5 */}
              <div className=" bg-green-500 rounded-lg">
                <h3 className="text-white text-sm font-bold my-5">
                  Social Media Marketing
                </h3>
                <div className="rounded-lg">
                  <img src="./p_5.png" alt="" />
                </div>
              </div>

              {/* P_6 */}
              <div className=" bg-amber-800 rounded-lg">
                <h3 className="text-white text-sm font-bold my-5">
                  Voice Over
                </h3>
                <div className="rounded-lg">
                  <img src="./p_6.png" alt="" />
                </div>
              </div>

              {/* P_7 */}
              <div className=" bg-green-800 rounded-lg">
                <h3 className="text-white text-sm font-bold my-5">
                  Software Development
                </h3>
                <div className="rounded-lg">
                  <img src="./p_7.png" alt="" />
                </div>
              </div>

              {/* P_8 */}
              <div className=" bg-red-700 rounded-lg">
                <h3 className="text-white text-sm font-bold my-5">
                  Date Science & ML
                </h3>
                <div className="rounded-lg">
                  <img src="./p_8.png" alt="" />
                </div>
              </div>

              {/* P_9 */}
              <div className="bg-green-400 rounded-lg">
                <h3 className="text-white text-sm font-bold my-5">
                  Product Photography
                </h3>
                <div className="rounded-lg">
                  <img src="./p_9.png" alt="" />
                </div>
              </div>

              {/* P_10 */}
              <div className=" bg-green-800 rounded-lg">
                <h3 className="text-white text-sm font-bold my-5">
                  E-Commerce Marketing
                </h3>
                <div className="rounded-lg">
                  <img src="./p_10.png" alt="" />
                </div>
              </div>

              {/* P_11 */}
              <div className=" bg-pink-500 rounded-lg">
                <h3 className="text-white text-sm font-bold my-5">
                  Video Editing
                </h3>
                <div className="rounded-lg">
                  <img src="./p_11.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Popular;
