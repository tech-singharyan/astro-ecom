import React from "react";
import "./../assets/css/components/card.css";

const Card = ({ item }) => {
  return (
    <div className="card1" style={{ backgroundImage: `url(${item?.image})`}}>
      <div className="overlay cardOverlay"></div>
      <div className="textarea">
        <p>{item.tag}</p>
        <h3>{item.title}</h3>
        <div className="actionButton">
          <p>{item.action}</p>
          <item.icon />
        </div>
      </div>
    </div>
  );
};

export default Card;
