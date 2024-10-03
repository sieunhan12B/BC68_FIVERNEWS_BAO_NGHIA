import React from "react";

const CategorySection = () => {
  return (
    <div className="mt-6 mb-24">
      <div className="container">
        {/* Categories Section */}
        <div className="   flex flex-wrap w-full max-lg:gap-x-12  max-lg:gap-y-16      ">
          {/* md:max-lg:w-1/4 p-3 w-[calc(100%/9)] max-xl:w-[cal(100%/5)]  */}
          {/* <div className="  flex flex-wrap w-full space-x-3 space-y-2  "> */}
          {[
            {
              name: "Program & Tech",
              icons: "fa-brands fa-itch-io",
            },
            {
              name: "Graphics & Design",
              icons: "fa-brands fa-itunes-note",
            },
            {
              name: "Digital Marketing",
              icons: "fa-brands fa-itch-io",
            },
            {
              name: "Writing & Translation",
              icons: "fa-solid fa-person-walking-with-cane",
            },
            {
              name: "Video & Animation",
              icons: "fa-solid fa-circle-info",
            },
            {
              name: "AI Services",
              icons: "fa-solid fa-wheelchair",
            },
            {
              name: "Music & Audio",
              icons: "fa-solid fa-universal-access",
            },
            {
              name: "Video & Animation",
              icons: "fa-solid fa-circle-info",
            },

            // "Consulting",
          ].map((category) => (
            <div
              key={category}
              className=" p-1 w-[calc(100%/8)] max-lg:w-1/5 max-lg:p-0    flex-wrap gap-5 max-lg:gap-16  bg-white text-gray-800 rounded-lg "
            >
              <div className="shadow-lg p-5 max-lg:p-0  w-full h-full  rounded-lg">
                <div className="max-lg:w-full max-lg:h-full max-lg:flex max-lg:py-2 items-center justify-center">
                  <i
                    className={` max-lg:w-1/2 max-lg:h-1/2    ${category.icons}`}
                  ></i>
                </div>

                <p className="max-lg:text-lg   font-semibold max-lg:text-center ">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
