import React from "react";
import Checkbox from "../CheckBox/Checkbox";
import TextArea from "./TextArea/TextArea";

const ContratSurBien = ({ customerState, setCustomerState }) => {
  return (
    <>
      <h1>CONTRATS EXISTANT SUR LE BIEN</h1>
      <h3>BAIL</h3>
      <div>Le bien sera-t-il libre le jour de la vente ?</div>
      <Checkbox
        questionID="contratBienLibre"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>A-t-elle été louée précédemment ?</div>
      <Checkbox
        questionID="contratLocationRecente"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <h3>AFFICHAGE</h3>
      <div>Le bien supporte-t-il un contrat d'affichage publicitaire ?</div>
      <Checkbox
        questionID="contratAffichage"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <h3>DETECTEUR DE FUMEE</h3>
      <div>Le bien est-il équipé d'un détecteur de fumée ?</div>
      <Checkbox
        questionID="contratDetecteurFumee"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <h3>AUTRES CONTRATS</h3>
      <div>
        La maison fait-elle l'objet d'autres contrats (entretien de chaudière,
        ramonage, dératisation, contrat de fourniture de gaz, etc.) ?
      </div>
      <Checkbox
        questionID="contratAutres"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <p><i>Lesquels ?</i></p>
      <TextArea
        questionID="contratAutresNom"
        customerQuiz={customerState}
        setCustomerQuiz={setCustomerState}
      />
      <div>Certains équipements font-ils encore l'object de garanties ?</div>
      <Checkbox
        questionID="contratEquipementGarantie"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <p><i>Lesquels ?</i></p>
      <TextArea
        questionID="contratEquipementNom"
        customerQuiz={customerState}
        setCustomerQuiz={setCustomerState}
      />
      <h3>PROCEDURES</h3>
      <div>Etes-vous partie à des procédures judiciaires sur votre bien ?</div>
      <Checkbox
        questionID="contratProcedure"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
    </>
  );
};

export default ContratSurBien;
