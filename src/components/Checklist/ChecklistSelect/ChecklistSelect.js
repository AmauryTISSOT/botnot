import React, { useState } from "react";
import Checklist from "../Checklist";
import checkListData from "../ChecklistData/ChecklistData";

const ChecklistSelect = ({ checklistList }) => {
  const [checklistSelected, setEmailSelected] = useState("");
  const [checklistClicked, setQuestionClicked] = useState(false);

  const clickHandler = (event) => {
    setEmailSelected(event.target.id);
    setQuestionClicked(true);
  };

  const checklistSelector = () => {
    return (
      <>
        <h1>Sélectionner un type de checklist</h1>
        <div className="question-container">
          {Object.values(checklistList).map((checklist) => (
            <div className="question-list" key={checklist.type.toString()}>
              <h2>{checklist.type}</h2>
              <ul className="question-link-list">
                {checklist.query.map((checklist1, number1) => (
                  <li
                    key={number1}
                    id={checklist1.value}
                    data-testid="question-element"
                    onClick={clickHandler}
                    className="email-link"
                  >
                    {checklist1.question}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      {checklistClicked ? (
        <Checklist data={checkListData[checklistSelected]} />
      ) : (
        checklistSelector()
      )}
    </>
  );
};

export default ChecklistSelect;
