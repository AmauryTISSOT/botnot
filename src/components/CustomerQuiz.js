import React, { useState } from "react";
import Assainissement from "./CustomerQuiz/Assainissement";
import AvantageFiscal from "./CustomerQuiz/AvantageFiscal";
import Chauffage from "./CustomerQuiz/Chauffage";
import ContratSurBien from "./CustomerQuiz/ContratSurBien";
import EtatSolPollution from "./CustomerQuiz/EtatSolPollution";
import PlusValues from "./CustomerQuiz/PlusValues";
import Pret from "./CustomerQuiz/Pret";
import Servitude from "./CustomerQuiz/Servitude";
import SituationBatiment from "./CustomerQuiz/SituationBatiment";
import SituationTerrain from "./CustomerQuiz/SituationTerrain";

const CustomerQuiz = () => {

  const [customerQuizState, setCustomerQuizState] = useState("")

  return (
    <div className="App">
      <SituationTerrain customerState={customerQuizState} setCustomerState={setCustomerQuizState} />
      <EtatSolPollution customerState={customerQuizState} setCustomerState={setCustomerQuizState}/>
      <Servitude customerState={customerQuizState} setCustomerState={setCustomerQuizState}/>
      <Assainissement customerState={customerQuizState} setCustomerState={setCustomerQuizState}/>
      <SituationBatiment customerState={customerQuizState} setCustomerState={setCustomerQuizState}/>
      <ContratSurBien customerState={customerQuizState} setCustomerState={setCustomerQuizState}/>
      <AvantageFiscal customerState={customerQuizState} setCustomerState={setCustomerQuizState}/>
      <Chauffage customerState={customerQuizState} setCustomerState={setCustomerQuizState}/>
      <Pret customerState={customerQuizState} setCustomerState={setCustomerQuizState}/>
      <PlusValues customerState={customerQuizState} setCustomerState={setCustomerQuizState}/>
    </div>
  );
};

export default CustomerQuiz;
