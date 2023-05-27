import React from "react";
import NavBar from "./NavBar/NavBar";
import NavItem from "./NavItem/NavItem";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { Link } from "react-router-dom";
import Darkmode from "./DarkModeButton/Darkmode";

function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        BotNot <i className="version"> Alpha v.1</i>
      </Link>
      <NavBar>
        <div className="header-menu-container">
          <NavItem name={"Accueil"} to="/" />
          <NavItem name={"Outils"}>
            <DropDownMenu />
          </NavItem>
          <NavItem name={"A propos"} to="/about" />
        </div>
        <Darkmode />
      </NavBar>
    </div>
  );
}

export default Header;
