import React from "react";
import Checkbox from "../CheckBox/Checkbox";

const EtatSolPollution = ({customerState, setCustomerState}) => {
  return (
    <>
      <h1>ETAT DU SOUS-SOL - POLLUTION</h1>
      <div>Avez-vous exploité des activités polluantes sur le terrain ?</div>
      <Checkbox questionID="EtatSolActivitePolluante" customerQuizState={customerState} setCustomerQuizState={setCustomerState}/>
      <div>
        A votre connaissance, des activités polluantes ont-elles été effectuées
        sur le terrain par le passé ?
      </div>
      <Checkbox questionID="EtatSolActivitePolluantePasse" customerQuizState={customerState} setCustomerQuizState={setCustomerState}/>
      <div>
        Avez-vous connaissance d'activités polluantes dans le voisinage ?
      </div>
      <Checkbox questionID="EtatSolActivitePolluanteVoisinage" customerQuizState={customerState} setCustomerQuizState={setCustomerState}/>
      <div>
        Avez-vous connaissance de carrières souterraines à l'aplomb de votre
        terrain ?
      </div>
      <Checkbox questionID="EtatSolCarriere" customerQuizState={customerState} setCustomerQuizState={setCustomerState}/>
      <div>Votre maison est-elle située en zone inondable ?</div>
      <Checkbox questionID="EtatSolZoneInondable" customerQuizState={customerState} setCustomerQuizState={setCustomerState}/>
    </>
  );
};

export default EtatSolPollution;
