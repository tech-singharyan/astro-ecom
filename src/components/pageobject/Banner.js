import React from "react";
import "./../assets/css/components/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <div className="text">
        <h2 style={{ color: "white" }}>Collection is here </h2>
        <p style={{ color: "white" }}>
          The time is now for it to be okay to be great.People in this world
          shun people for being great.For a bright color. For satnd out..
        </p>
        <button style={{ color: "white" }}>Explore</button>
      </div>
    </div>
    
  );
};

export default Banner;
