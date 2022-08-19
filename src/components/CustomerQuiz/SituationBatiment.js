import React from "react";
import Checkbox from "./Checkbox";

const SituationBatiment = ({ customerState, setCustomerState }) => {
  return (
    <>
      <h1>SITUATION DU BATIMENT</h1>
      <h2>CONSTRUCTION</h2>
      <div>Avez-vous fait construire le bâtiment vendu ?</div>
      <Checkbox
        questionID="situationBatimentConstructionInitiale"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>Ces travaux sont-ils achevés depuis moins de 10 ans ?</div>
      <Checkbox
        questionID="situationBatimentConstructionInitiale10ans"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>
        Si oui, avez-vous souscrit une assurance dommage-ouvrage couvrant la
        garantie décénnale ?
      </div>
      <Checkbox
        questionID="situationBatimentConstructionInitialeDommageOuvrage"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <h2>TRAVAUX POSTERIEURS A LA CONSTRUCTION</h2>
      <div>
        Avez-vous effectué des travaux postérieurs à la construction qui
        auraient modifié l'aspect extérieur de l'immeuble ou qui ont pu
        augmenter la surface de la maison ou changer l'affectation de certaines
        parties ?
      </div>
      <Checkbox
        questionID="situationBatimentTravauxPost"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>
        Ces travaux ont-ils fait l'objet d'un permis de constuire ou d'une
        déclaration de travaux ?
      </div>
      <Checkbox
        questionID="situationBatimentTravauxPostAutorisation"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
    </>
  );
};

export default SituationBatiment;
