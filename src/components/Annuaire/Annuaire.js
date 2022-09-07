import React, { useState } from "react";
import CodeInsee from "../API/CodeInsee";
import OrganismeApi from "../API/OrganismeApi";

const Annuaire = () => {
  const [annuaireState, setAnnuaireState] = useState(undefined);

  return (
    <>
      <CodeInsee setState={setAnnuaireState} />
      {console.log("annuaire", annuaireState)}

      {annuaireState !== undefined && (
        <div>
          Commune selectionnée : {annuaireState.communeInfo.codePostal} -{" "}
          {annuaireState.communeInfo.nomCommune.toUpperCase()}
        </div>
      )}

      <h3>Liste des adresses pour cette commune :</h3>
      <OrganismeApi state={annuaireState}/>
    </>
  );
};

export default Annuaire;
