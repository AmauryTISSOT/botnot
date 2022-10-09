import React from "react";
import "./Header.css";
import NavBar from "./NavBar/NavBar";
import NavItem from "./NavItem/NavItem";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">BotNot</Link>
      <NavBar>
        <NavItem name={"Accueil"} to="/" />
        <NavItem name={"Outils"}>
          <DropDownMenu />
        </NavItem>
        <NavItem name={"A propos"} to="/about" />
      </NavBar>
    </div>
  );
}

export default Header;
