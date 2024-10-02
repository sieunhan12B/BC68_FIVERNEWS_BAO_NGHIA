import React from "react";
import video from "../../assets/img/video_55.mp4";

const AboutFiver = () => {
  return (
    <div className="container mt-6">
      <h2 className="text-2xl font-semibold">
        What they're saying about Fiverr
      </h2>
      <div className=" mt-4 flex flex-row">
        <div className="left">
          <img src={video} alt="" />
          <img src="./about.fiver.jpg" alt="" />
        </div>
        <div className="right mx-20">
          <h3>Caitlin Tormey, Chief Commercial Officer Company | NAADAM</h3>
          <h4 className="mt-4">
            "We've used Fiverr for Shopify web development, graphic design, and
            backend web development. Working with Fiverr makes my job a little
            easier every day."
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutFiver;
