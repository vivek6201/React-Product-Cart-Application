import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="w-11/12 flex justify-between max-w-[1080px] mx-auto items-center py-5 z-20">
        <NavLink to={"/"}>
          <div className="flex items-center uppercase">
            <img src={logo} className="w-10" />
            <p>Shopsy</p>
          </div>
        </NavLink>
        <div className="flex gap-x-5 ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/cart"}>
            <FaShoppingCart size={22} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
