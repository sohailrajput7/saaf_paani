import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import Roles from "../../constants/Roles";

const Navbar = () => {
  const authUser = useSelector((state) => state.auth.authUser);

  const userIs = (role) => {
    return role === authUser?.role;
  };

  return (
    <div className="container-fluid nav_bg ">
      <div className="row">
        <div className="col-12 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-dark n  ">
            <NavLink exact className="navbar-brand" to="/">
              Saaf Pani
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/"
                    exact
                  >
                    Home{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/aboutUs"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/contactUs"
                  >
                    Contact Us
                  </NavLink>
                </li>
                {!authUser && (
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/login"
                    >
                      <Button variant="contained" color="primary">
                        Login
                      </Button>
                    </NavLink>
                  </li>
                )}

                {authUser && userIs(Roles.USER) && (
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/order"
                    >
                      Place Order
                    </NavLink>
                  </li>
                )}
                {authUser && (
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/logout"
                    >
                      <Button variant="contained" color="primary">
                        Logout
                      </Button>
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
