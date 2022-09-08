import React, { useEffect, useState } from "react";

const OrganismeApi = ({ state }) => {
  const [internalState, setInternalSaste] = useState(undefined);
  const [service, setService] = useState([
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
        // console.log("request succeeded with JSON response", apiData);
        setInternalSaste((prev) => ({
          ...prev,
          [organisme]: apiData,
        }));
      })
      .catch((error) => console.log("request failed", error));
  }

  //   console.log("type",typeof internalState);
    // console.log(internalState)
  //   const abc = []
  //   console.log("true?", Boolean(abc))

  //TODO: loop through lists address
  //TODO: features array can have multiples elements
  //TODO: html for email + remove mailto:
  //TODO: when email, tel or site internet is empty -> change display
  const displayStateObject = () => {
    return (
      <>
        {internalState !== undefined &&
          Object.values(internalState).map(
            (item, keys) =>
              item !== undefined &&
              item.features.length !== 0 && (
                <div key={keys}>
                  <h4>{item.features[0].properties.nom}</h4>
                  <div>{item.features[0].properties.adresses[0].lignes[0]}</div>
                  <div>
                    {item.features[0].properties.adresses[0].codePostal} - {item.features[0].properties.adresses[0].commune.toUpperCase()}</div>
                  <div>email : {item.features[0].properties.email}</div>
                  <div>tel : {item.features[0].properties.telephone}</div>
                  <div>site internet : <a href={item.features[0].properties.url}>{item.features[0].properties.url}</a></div>
                  <br/>
                </div>
              )
          )}
      </>
    );
  };

  //     Object.values(internalState).map((item, keys) =>{
  //       if (item !== undefined && item.features.length !== 0) {
  //       }

  //       }

  //   }
  // Object.values(internalState).map((item, keys) => <div>aze</div>)

  // (item, keys) =>

  //   if (item !== undefined && item.features.length !== 0) {
  //     // console.log(item.features[0].properties.nom);
  //   }
  // );

  // <>

  // </>

  const mockArray = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [4.20533895493, 44.0040245056],
        },
        properties: {
          id: "mairie-30100-01",
          codeInsee: "30100",
          pivotLocal: "mairie",
          nom: "Mairie - Cruviers-Lascours",
          adresses: [
            {
              type: "géopostale",
              lignes: ["Place Albert-Chapelier"],
              codePostal: "30360",
              commune: "Cruviers-Lascours",
              coordonnees: [4.20533895493, 44.0040245056],
            },
          ],
          horaires: [
            {
              du: "lundi",
              au: "vendredi",
              heures: [
                {
                  de: "09:00:00",
                  a: "12:00:00",
                },
              ],
            },
          ],
          email: "mairie.cruvierslascours@gmail.com",
          telephone: "04 66 83 21 55",
          url: "http://www.cruviers-lascours.fr",
          zonage: {
            communes: ["30100 Cruviers-Lascours"],
          },
        },
      },
    ],
  };

  const nom = mockArray.features[0].properties.nom;
  const adresse = mockArray.features[0].properties.adresses[0].lignes[0]; // array
  const codePostal = mockArray.features[0].properties.adresses[0].codePostal;
  const commune = mockArray.features[0].properties.adresses[0].commune;
  const email = mockArray.features[0].properties.email;
  const telephone = mockArray.features[0].properties.telephone;
  const siteInternet = mockArray.features[0].properties.url;

  return <>{displayStateObject()}</>;
};

export default OrganismeApi;
