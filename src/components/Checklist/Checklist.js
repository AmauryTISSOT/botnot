import React, { useState } from "react";
import "./Checklist.css"

const Checklist = ({data}) => {
  const [checklistItems, setChecklistItems] = useState(data);

  const handleCheckboxClick = (id) => {
    setChecklistItems(
      checklistItems.map((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
        return item;
      })
    );
  };

  return (
    <div className="checklist-wrap">
      <ul className="checklist-container">
        {checklistItems.map((item) => (
          <li key={item.id} className="checklist-list">
            <input
              className="checkbox"
              type="checkbox"
              onClick={() => handleCheckboxClick(item.id)}
            />
            <label
              data-testid={item.id}
              style={{ textDecoration: item.checked ? "line-through" : "none" }}
            >
              {item.text}
            </label>
          </li>
        ))}
      </ul>
      <button
        className="retour-button"
        onClick={() => window.location.reload()}
      >
        Retour
      </button>
    </div>
  );
};

export default Checklist;
