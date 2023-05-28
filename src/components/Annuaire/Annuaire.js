import React, { useState } from "react";
import CodeInsee from "../API/CodeInsee/CodeInsee";
import OrganismeApi from "../API/Organismes/OrganismeApi";

const Annuaire = () => {
  const [annuaireState, setAnnuaireState] = useState(undefined);

  return (
    <div className="w-full h-full overflow-auto flex items-center justify-center flex-col py-8 px-36 ">
      <div className="px-3 py-1 my-3 border border-slate-600 rounded border-solid bg">
        <CodeInsee setState={setAnnuaireState} />
        {console.log("annuaire", annuaireState)}
      </div>

      {annuaireState !== undefined && (
        <div className="pb-8 text-xl font-bold">
          Commune selectionnée : {annuaireState.communeInfo.codePostal} -{" "}
          {annuaireState.communeInfo.nomCommune.toUpperCase()}
        </div>
      )}

      <h3>Liste des adresses pour cette commune :</h3>
      <div className="w-full">
        <OrganismeApi state={annuaireState} />
      </div>
    </div>
  );
};

export default Annuaire;
