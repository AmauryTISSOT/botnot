import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NoMatch from "../../pages/NoMatch/NoMatch";
import checkListData from "./ChecklistData/ChecklistData";

const Checklist = () => {
  const { checkListId } = useParams();
  const [checklistItems, setChecklistItems] = useState(
    checkListData[checkListId]
  );

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

  const resetChecklist = () => {
    setChecklistItems(
      checklistItems.map((item) => {
        if (item.checked === true) {
          item.checked = false;
        }
        return item;
      })
    );
  };

  try {
    return (
      <div className="w-screen h-screen flex flex-col items-center">
        <div className="flex justify-center mt-10">
          <ul className="flex flex-col items-start">
            {checklistItems.map((item) => (
              <li key={item.id} className="flex items-center justify-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckboxClick(item.id)}
                />
                <label
                  data-testid={item.id}
                  style={{
                    textDecoration: item.checked ? "line-through" : "none",
                  }}
                  onClick={() => handleCheckboxClick(item.id)}
                >
                  {item.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-10 middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={resetChecklist}>
          Reset
        </button>
      </div>
    );
  } catch (error) {
    console.warn(error.message);
    return <NoMatch />;
  }
};

export default Checklist;
