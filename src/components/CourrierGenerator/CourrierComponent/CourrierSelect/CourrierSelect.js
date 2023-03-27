import { useState } from "react";
import courrierListData from "../CourrierData/CourrierListData";
import GenerateDocs from "../../GenerateDocs/GenerateDocs";
import courrierDataObject from "../CourrierData/CourrierData";

const CourrierSelect = ({ etatCivil, bienImmo }) => {
  // TODO: create a download folder with the selected queries

  const [selectedQueries, setSelectedQueries] = useState([]);

  const handleCheckboxChange = (event) => {
    const queryValue = event.target.value;
    setSelectedQueries((prevSelectedQueries) => {
      if (prevSelectedQueries.includes(queryValue)) {
        return prevSelectedQueries.filter((value) => value !== queryValue); // If the selected query is already in the 'selectedQueries' array, remove it
      } else {
        return [...prevSelectedQueries, queryValue];
      }
    });
  };

  const handleGenerateClick = () => {
    console.log("Selected queries:", selectedQueries);
    console.log("bienImmo", bienImmo);
    selectedQueries.forEach((element) => {
      GenerateDocs(
        "mairie",
        element,
        courrierDataObject[element],
        bienImmo,
        etatCivil
      );
    });

    console.log("etatCivil", etatCivil);
  };

  return (
    <div>
      {courrierListData.map((category) => (
        <div key={category.type}>
          <h3>{category.type}</h3>
          <ul>
            {category.query.map((query) => (
              <li key={query.value}>
                <label>
                  {query.question}
                  <input
                    type="checkbox"
                    value={query.value}
                    checked={selectedQueries.includes(query.value)}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleGenerateClick}>Générer</button>
    </div>
  );
};

export default CourrierSelect;
