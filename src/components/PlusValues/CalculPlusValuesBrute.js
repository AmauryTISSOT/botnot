import React from "react";

const CalculPlusValuesBrute = ({parentState}) => {

  const date1 = new Date(parentState.dateAcquisition);
  const date2 = new Date(parentState.dateVente);
  const dureeDetention = Math.floor((date1 - date2) / 31536000000);

  return(
    <>
    <label>Prix de vente ou Indemnité d'expropriation</label>
    <label>A déduire : Frais et taxes supportés
lors de la cession (commission d'agence...)</label>
<label>A déduire : Prix d'acquisition ou valeur vénale</label>

    </>
  )
};



export default CalculPlusValuesBrute;
