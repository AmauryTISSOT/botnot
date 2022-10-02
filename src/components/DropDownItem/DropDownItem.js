import React from 'react'

const DropDownItem = (props) => {
    return (
        <div
          className="menu-item"
          onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}
        >
          {props.children}
        </div>
      );
}

export default DropDownItem