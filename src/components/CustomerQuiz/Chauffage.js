import React from "react";
import Checkbox from "./Checkbox";
import TextArea from "./TextArea";

const Chauffage = ({ customerState, setCustomerState }) => {
  return (
    <>
      <h1>CHAUFFAGE</h1>
      <div>Le bien : </div>
      <div>- possède t-il une cuve à mazout ?</div>
      <Checkbox
        questionID="chauffageCuveMazout"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>- est-il raccordé au gaz de ville ?</div>
      <Checkbox
        questionID="chauffageDeVille"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>- est-il raccordé à une citerne à gaz ?</div>
      <Checkbox
        questionID="chauffageCiterne"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>- êtes-vous propriétaire de la citerne à gaz ?</div>
      <Checkbox
        questionID="chauffageCiterneProprietaire"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>- êtes-vous locataire de la citerne ?</div>
      <Checkbox
        questionID="chauffageCiterneLocataire"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <p>Le cas échéant, indiquez les coordonnées de la société :</p>
      <TextArea
        questionID="chauffageCiterneCoordonnee"
        customerQuiz={customerState}
        setCustomerQuiz={setCustomerState}
      />
    </>
  );
};

export default Chauffage;
