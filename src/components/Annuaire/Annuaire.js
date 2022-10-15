import React, { useState } from "react";
import CodeInsee from "../API/CodeInsee/CodeInsee";
import OrganismeApi from "../API/Organismes/OrganismeApi";
import "./Annuaire.css";

const Annuaire = () => {
  const [annuaireState, setAnnuaireState] = useState(undefined);

  return (
    <div className="annuaire-container">
      <div className="annuaire-form">
        <CodeInsee setState={setAnnuaireState} />
        {console.log("annuaire", annuaireState)}
      </div>

      {annuaireState !== undefined && (
        <div className="annuaire-selected-commune">
          Commune selectionnée : {annuaireState.communeInfo.codePostal} -{" "}
          {annuaireState.communeInfo.nomCommune.toUpperCase()}
        </div>
      )}

      <h3>Liste des adresses pour cette commune :</h3>
      <div className="annuaire-grid">
        <OrganismeApi state={annuaireState} />
      </div>
    </div>
  );
};

export default Annuaire;
