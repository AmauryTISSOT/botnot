import { Link } from "react-router-dom";
import courrierListData from "../CourrierData/CourrierListData";

const CourrierSelect = () => {
  return (
    <>
      <h1>Sélectionner un type de courrier</h1>
      <div className="question-container">
        {Object.values(courrierListData).map((courrier) => (
          <div className="question-list" key={courrier.type.toString()}>
            <h2>{courrier.type}</h2>
            <ul className="question-link-list">
              {courrier.query.map((courrier1, number1) => (
                <Link
                  key={number1}
                  id={courrier1.value}
                  data-testid="courrier-element"
                  className="email-link"
                  to={`/outils/courrierGenerator/${courrier1.value}`}
                >
                  {courrier1.question}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourrierSelect;
