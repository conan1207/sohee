import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" exact className="gnb" activeClassName="active">
          ABOUT
        </NavLink>
        <NavLink to="/projects" className="gnb">
          PROJECT
        </NavLink>
        <NavLink to="/contact" className="gnb">
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
