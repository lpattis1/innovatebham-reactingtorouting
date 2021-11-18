import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-5 navbar mb-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <img
            src="https://i.imgur.com/dwDIVTe.png"
            alt=""
            className="logo img-fluid"
          />
        </div>
        <div className="links-container d-flex align-items-center">
          <NavLink
            activeClassName="active-link"
            className="nav-link"
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="active-link"
            className="nav-link"
            exact
            to="/films"
          >
            Films
          </NavLink>

          <NavLink
            activeClassName="active-link"
            className="nav-link"
            exact
            to="/favorites"
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
