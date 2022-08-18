import React from "react";

const ContratSurBien = () => {
  return (
    <>
      <h1>CONTRATS EXISTANT SUR LE BIEN</h1>
      <h3>BAIL</h3>
      <div>Le bien sera-t-il libre le jour de la vente ?</div>
      <div>A-t-elle été louée précédemment ?</div>
      <h3>AFFICHAGE</h3>
      <div>Le bien supporte-t-il un contrat d'affichage publicitaire ?</div>
      <h3>DETECTEUR DE FUMEE</h3>
      <div>Le bien est-il équipé d'un détecteur de fumée ?</div>
      <h3>AUTRES CONTRATS</h3>
      <div>
        La maison fait-elle l'objet d'autres contrats (entretien de chaudière,
        ramonage, dératisation, contrat de fourniture de gaz, etc.) ?
      </div>
      <div>Certains équipements font-ils encore l'object de garanties ?</div>
      <h3>PROCEDURES</h3>
      <div>Etes-vous partie à des procédures judiciaires sur votre bien ?</div>
    </>
  );
};

export default ContratSurBien;
