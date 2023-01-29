import { Link } from "react-router-dom";
import checklistList from "../ChecklistData/ChecklistListData";

const ChecklistSelect = () => {
  return (
    <>
      <h1>Sélectionner un type de checklist</h1>
      <div className="question-container">
        {Object.values(checklistList).map((checklist) => (
          <div className="question-list" key={checklist.type.toString()}>
            <h2>{checklist.type}</h2>
            <ul className="question-link-list">
              {checklist.query.map((checklist1, number1) => (
                <Link
                  key={number1}
                  id={checklist1.value}
                  data-testid="question-element"
                  className="email-link"
                  to={`/outils/checklistGenerator/${checklist1.value}`}
                >
                  {checklist1.question}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChecklistSelect;
