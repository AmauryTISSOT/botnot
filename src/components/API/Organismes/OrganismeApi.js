import React, { useEffect, useState } from "react";

const OrganismeApi = ({ state }) => {
  const [internalState, setInternalState] = useState(undefined);

  // List of "organisme" :
  const [service] = useState([
    "cour_appel",
    "hypotheque",
    "mairie",
    "sie",
    "sip",
    "te",
    "tgi",
    "ti",
    "prefecture",
    "sous_pref",
  ]);

  // cour_appel Cour d’appel
  // hypotheque Service de publicité foncière ex-conservation des hypothèques
  // mairie Mairie
  // sie Service des impôts des entreprises du Centre des finances publiques
  // sip Service des impôts des particuliers du Centre des finances publiques
  // te Tribunal pour enfants
  // tgi Tribunal de grande instance
  // ti Tribunal d’instance
  // prefecture Préfecture
  // sous_pref Sous-préfecture

  useEffect(() => {
    if (state !== undefined) {
      service.forEach((item) => fetchAPI(state.communeInfo.codeCommune, item));
    }
  }, [state, service]);

  // API fetching function
  async function fetchAPI(value, organisme) {
    const url = new URL(
      `https://etablissements-publics.api.gouv.fr/v3/communes/${value}/${organisme}`
    );
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then((response) => response.json())
      .then((apiData) => {
        console.log("request succeeded with JSON response", apiData);
        setInternalState((prev) => ({
          ...prev,
          [organisme]: apiData,
        }));
      })
      .catch((error) => console.log("request failed", error));
  }

  // Function who clean the given string and add <a> tag
  const cleanEmailString = (string) => {
    if (string !== undefined) {
      const cleanString = string.replace("mailto:", "");
      return <a href={`mailto:${cleanString}`}>{cleanString}</a>;
    }
  };

  const displayStateObject = () => {
    return (
      <>
        {internalState !== undefined &&
          Object.values(internalState).map(
            (item, keys) =>
              item !== undefined &&
              item.features.length !== 0 && (
                <div key={keys}>
                  {item.features.map((item1, keys1) => (
                    <div key={keys1}>
                      <h4>{item1.properties.nom}</h4>
                      <div>
                        {item1.properties.adresses.map((item2, keys2) => (
                          <div key={keys2}>
                            {item2.lignes.map((item3, keys3) => (
                              <div key={keys3}>{item3}</div>
                            ))}
                            <div>
                              {item2.codePostal} - {item2.commune.toUpperCase()}
                            </div>
                          </div>
                        ))}
                      </div>
                      { "email" in item1.properties && (
                        <div>
                          email : {cleanEmailString(item1.properties.email)}
                        </div>
                      )}
                      { "telephone" in item1.properties && (
                        <div>tel : {item1.properties.telephone}</div>
                      )}
                      { "url" in item1.properties && (
                        <div>
                          site internet :{" "}
                          <a href={item1.properties.url}>
                            {item1.properties.url}
                          </a>
                        </div>
                      )}

                      <br />
                    </div>
                  ))}
                </div>
              )
          )}
      </>
    );
  };

  return <>{displayStateObject()}</>;
};

export default OrganismeApi;
