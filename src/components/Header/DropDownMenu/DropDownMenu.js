import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import DropDownItem from "../DropDownItem/DropDownItem";
import "./DropDownMenu.css";

const DropDownMenu = (props) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);


  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcHeight = (element) => {
    const height = element.offsetHeight;
    setMenuHeight(height);
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
        <div className="menu" data-testid="main">
          <DropDownItem setActiveMenu={setActiveMenu} goToMenu="menu1">
            Check-list
          </DropDownItem>
          <DropDownItem setActiveMenu={setActiveMenu} goToMenu="menu2">
            Annuaire
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "menu1"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu" data-testid="menu1">
          <DropDownItem setActiveMenu={setActiveMenu} goToMenu="main">
            Retour
          </DropDownItem>
          <DropDownItem>
            <Link to="/outils/customerquiz">Questionnaire client</Link>
          </DropDownItem>
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
          <div className="menu" data-testid="menu2">
            <DropDownItem setActiveMenu={setActiveMenu} goToMenu="main">
              Retour
            </DropDownItem>
            <DropDownItem>
              <Link to="/outils/annuaire">Service public</Link>
              
            </DropDownItem>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropDownMenu;
