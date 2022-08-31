import React, { useEffect, useState } from "react";

const CodePostalApi = ({ codePostalProp }) => {
  const [listeCommune, setListeCommune] = useState([]);

  useEffect(() => {
    fetch(`https://apicarto.ign.fr/api/codes-postaux/communes/${codePostalProp}`)
      .then((response) => {
        if (response.status === 200) return response.json();
        else throw new Error("Invalid response");
      })
      .then((data) => {
        data.forEach((element) => {
          setListeCommune((oldArray) => [
            ...oldArray,
            element.nomCommune.toUpperCase(),
          ]);
        });
      })
      .catch(error => setListeCommune(["invalid"]))
  }, [codePostalProp]);

  return (
    <>
      <div>
        {listeCommune.map((item, keys) => (
          <div key={keys}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default CodePostalApi;
