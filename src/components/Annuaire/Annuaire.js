import React, { useState } from "react";
import CodeInsee from "../API/CodeInsee";

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
    </>
  );
};

export default Annuaire;
