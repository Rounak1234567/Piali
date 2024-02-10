import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
      <img src="https://i.ibb.co/cc6Jf5K/Untitled-5.png" alt="logo"/>
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
};
