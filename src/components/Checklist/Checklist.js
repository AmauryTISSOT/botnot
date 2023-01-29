import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NoMatch from "../../pages/NoMatch/NoMatch";
import "./Checklist.css"
import checkListData from "./ChecklistData/ChecklistData";

const Checklist = () => {
  const {checkListId} = useParams();
  const [checklistItems, setChecklistItems] = useState(checkListData[checkListId]);

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

  try {
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
      </div>
    );
  } catch (error) {
    console.warn(error.message)
    return <NoMatch/>
  }
};

export default Checklist;
