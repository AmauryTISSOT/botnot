import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenerateDocs from "../../GenerateDocs/GenerateDocs";
import "./CourrierSelect.css";

// data must be an array;
const CourrierSelect = ({ data }) => {
  const [courrierSelected, setCourrierSelected] = useState("");
  const [courrierClicked, setCourrierClicked] = useState(false);

  const clickHandler = (event) => {
    setCourrierSelected(event.target.id);
    setCourrierClicked(true);
  };

  const courrierSelector = () => {
    return (
      <>
        <h1>Sélectionner un modèle de courrier</h1>
        <div>
          {Object.values(data).map((courrier) => (
            <div key={courrier.type.toString()}>
              <h2>{courrier.type}</h2>
              <ul>
                {courrier.query.map((courrier2, number1) => (
                  <li
                    key={number1}
                    id={courrier2.value}
                    data-testid="courrier-element"
                    onClick={clickHandler}
                  >
                    {courrier2.question}
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
      {courrierClicked ? (
        <GenerateDocs value={courrierSelected} />
      ) : (
        courrierSelector()
      )}
    </>
  );
};

export default CourrierSelect;
