import React from "react";
import Checkbox from "./Checkbox";
import TextArea from "./TextArea";

const SituationTerrain = ({ customerState, setCustomerState }) => {
  return (
    <>
      <h1>SITUATION DU TERRAIN</h1>
      <div>Votre maison dépend-elle d'un lotissement ?</div>
      <Checkbox
        questionID="situationTerrainLotissement"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <div>Si oui, existe-t-il une association syndicale qui fonctionne ?</div>
      <Checkbox
        questionID="situationTerrainAssociationSyndicale"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <p><i>
        Si tel est le cas, précisé ici les noms et coordonnées du président de
        l'association
      </i></p>
      <TextArea
        questionID="situationTerrainCoordonneeAssociation"
        customerQuiz={customerState}
        setCustomerQuiz={setCustomerState}
      />

      <div>Votre maison dépend-elle d'une copropriété horizontale ?</div>
      <Checkbox
        questionID="situationTerrainCoproHorizontale"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
      <p><i>Si oui, il convient de nous indiquer les noms et adresses du syndic</i></p>
      <TextArea
        questionID="situationTerrainCoproHorizontaleNomSyndic"
        customerQuiz={customerState}
        setCustomerQuiz={setCustomerState}
      />

      <div>
        Votre terrain a-t-il fait l'objet d'un procès verbal de bornage ?
      </div>
      <Checkbox
        questionID="situationTerrainBornage"
        customerQuizState={customerState}
        setCustomerQuizState={setCustomerState}
      />
    </>
  );
};

export default SituationTerrain;
