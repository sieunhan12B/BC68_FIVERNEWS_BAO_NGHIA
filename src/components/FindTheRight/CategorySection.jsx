import React from "react";

const CategorySection = () => {
  return (
    <div className="my-6">
      <div className="container">
        {/* Categories Section */}
        <div className="  flex flex-wrap w-full space-x-3 space-y-2  ">
          {[
            {
              name: "Programming & Tech",
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
              className="md:max-lg:w-1/4 p-3 w-[calc(100%/9)]    flex-wrap text-center bg-white text-gray-800 rounded-lg shadow-md"
            >
              <i className={category.icons}></i>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
