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
import TextArea from "./CustomerQuiz/TextArea";

const CustomerQuiz = () => {

  const [customerQuizState, setCustomerQuizState] = useState("")

  return (
    <div className="App">
      <TextArea/>
      <SituationTerrain />
      <EtatSolPollution />
      <Servitude />
      <Assainissement />
      <SituationBatiment />
      <ContratSurBien />
      <AvantageFiscal />
      <Chauffage />
      <Pret />
      <PlusValues />
    </div>
  );
};

export default CustomerQuiz;
