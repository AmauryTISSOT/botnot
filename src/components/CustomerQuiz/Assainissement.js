import React from "react";
import Checkbox from "./Checkbox";
import TextArea from "./TextArea";

const Assainissement = ({ customerState, setCustomerState }) => {
  return (
    <>
      <h1>ASSAINISSEMENT</h1>
      <div>L'assainissement de votre bien s'effectue-t-il:</div>
      <div>- par un système individuel ?</div>
      <Checkbox
        questionID="assainissementSytemeIndividuel"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <p><i>Indiquez la date de la dernière vidange</i></p>
      <TextArea
        questionID="assainissementDateVidange"
        customerQuiz={customerState}
        setCustomerQuiz={setCustomerState}
      />
      <div>- par un raccordement au "tout à l'égout" ?</div>
      <Checkbox
        questionID="assainissementRaccordementEgout"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>
        Avez-vous reçu une mise en demeure de faire des travaux sur votre
        installation ?
      </div>
      <Checkbox
        questionID="assainissementMiseDemeure"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
    </>
  );
};

export default Assainissement;
