import React from "react";

const SituationBatiment = ({customerState, setCustomerState}) => {
  return (
    <>
      <h1>SITUATION DU BATIMENT</h1>
      <h2>CONSTRUCTION</h2>
      <div>Avez-vous fait construire le bâtiment vendu ?</div>
      <div>Ces travaux sont-ils achevès depuis moins de 10 ans ?</div>
      <div>
        Si oui, avez-vous souscrit une assurance dommage-ouvrage couvrant la
        garantie décénnale ?
      </div>
      <h2>TRAVAUX POSTERIEURS A LA CONSTRUCTION</h2>
      <div>
        Avez-vous effectué des travaux postérieurs à la construction qui
        auraient modifié l'aspect extérieur de l'immeuble ou qui ont pu
        augmenter la surface de la maison ou changer l'affectation de certaines
        parties ?
      </div>
      <div>
        Ces travaux ont-ils fait l'objet d'un permis de constuire ou d'une
        déclaration de travaux ?
      </div>
    </>
  );
};

export default SituationBatiment;
