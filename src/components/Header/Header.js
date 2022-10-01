import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import NavItem from "../NavItem/NavItem";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

function Header() {
  return (
    <div className="header">
      <div className="logo">BotNot</div>
      <NavBar>
        <NavItem name={"test1"} />
        <NavItem name={"test2"}>
          <DropDownMenu />
        </NavItem>
        <NavItem name={"test3"} />
      </NavBar>
    </div>
  );
}

export default Header;
