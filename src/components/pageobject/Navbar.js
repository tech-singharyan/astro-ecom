import React from "react";
import "./../assets/css/components/navbar.css";
import { FaOpencart, FaSearch } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { WiMoonAltWaningGibbous3 } from "react-icons/wi";
import { FaRegFaceSurprise } from "react-icons/fa6";

const Navbar = () => {
  return (
    <section>
      <div className="innerContainer">
        <h4>Astro Ecommerce</h4>
        <div className="iconContainer">
            <FaOpencart />
            <IoMdHeart />
            <WiMoonAltWaningGibbous3 />
            <FaRegFaceSurprise />
        </div>
      </div>
      <hr style={{margin: '0px', border: '1px solid grey'}} />
      <div className="innerContainer">
        <ul>
          <li>
            <a>Store</a>
          </li>
          <li>
            <a>Designers</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
        </ul>
        <div className="searchbar">
             <FaSearch />
                <input type="text" placeholder="Search..." />
                 </div>
      </div>
    </section>
  );
};

export default Navbar;
