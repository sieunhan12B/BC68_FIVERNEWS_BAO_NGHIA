import React from "react";
// import "./FreelanceService.css"; // Import your custom styles
// import bg_1 from "../../assets/img/bg_1.png";
//
const FindTheRight = () => {
  return (
    <div className=" container mx-24 relative bg-no-repeat bg-[url('/public/bg_1.png')] text-white h-screen flex flex-col justify-center items-center">
      {/* Hero Headline */}
      <div className=" mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Find the right <span className="text-green-400">freelance</span>{" "}
          <br />
          service, right away
        </h1>
      </div>

      {/* Search Bar */}
      <div className=" w-full max-w-md">
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
        <div className=" mb-28  text-gray-400 mt-2">
          <p>Trusted by:</p>
          <div className="flex space-x-4 mt-3">
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

      {/* Categories Section */}
      <div className=" flex flex-row  max-w-6xl sm:grid-cols-4 gap-4">
        {[
          "Programming & Tech",
          "Graphics & Design",
          "Digital Marketing",
          "Writing & Translation",
          "Video & Animation",
          "AI Services",
          "Music & Audio",
          "Business",
          "Consulting",
        ].map((category) => (
          <div
            key={category}
            className="p-2 bg-white text-gray-800 rounded-lg shadow-md"
          >
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
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
