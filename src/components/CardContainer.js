import React from "react";
import "./../assets/css/components/cardContainer.css";

const CardContainer = ({ children }) => {
  return (
    <div className="cardContainer">
      <div>
        <h2>Shop by Category</h2>
        <p>Browse all category</p>
      </div>
      <div className="cardiv">{children}</div>
    </div>
  );
};

export default CardContainer;
