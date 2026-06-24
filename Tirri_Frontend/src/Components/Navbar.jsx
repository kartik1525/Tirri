import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="tirri.png"
          alt="logo"
          className="logo"
        />
        <h2>Tirri</h2>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          
          <input type="text" placeholder="Search" />
        </div>

        <button className="create-btn">
          Create
        </button>
      </div>
    </nav>
  );
};

export default Navbar;