import React, { useState } from "react";

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
    <div>
      <ul>
        {checklistItems.map((item) => (
          <li key={item.id}>
            <input
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
};

export default Checklist;
