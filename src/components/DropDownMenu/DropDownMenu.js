import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./DropDownMenu.css";

function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const DropdownItem = (props) => {
    return (
      <div
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}
      </div>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem goToMenu="menu1">Menu1</DropdownItem>
          <DropdownItem goToMenu="menu2">Menu2</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "menu1"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main">
            <h2>Retour</h2>
          </DropdownItem>
          <DropdownItem>1</DropdownItem>
          <DropdownItem>2</DropdownItem>
          <DropdownItem>3</DropdownItem>
          <DropdownItem>4</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "menu2"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main">
            <h2>Retour</h2>
          </DropdownItem>
          <DropdownItem>A</DropdownItem>
          <DropdownItem>B</DropdownItem>
          <DropdownItem>C</DropdownItem>
          <DropdownItem>D</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropDownMenu;
