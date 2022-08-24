import React from "react";

const CustomerQuizSummary = () => {
  const data = [
    "situationTerrainLotissement",

    "situationTerrainAssociationSyndicale",

    "situationTerrainCoproHorizontale",

    "situationTerrainBornage",

    "EtatSolActivitePolluante",

    "EtatSolActivitePolluantePasse",

    "EtatSolActivitePolluanteVoisinage",

    "EtatSolCarriere",

    "EtatSolZoneInondable",

    "servitude",

    "assainissementSytemeIndividuel",

    "assainissementRaccordementEgout",

    "assainissementMiseDemeure",

    "situationBatimentConstructionInitiale",

    "situationBatimentConstructionInitiale10ans",

    "situationBatimentConstructionInitialeDommageOuvrage",

    "situationBatimentTravauxPost",

    "situationBatimentTravauxPostAutorisation",

    "contratBienLibre",

    "contratLocationRecente",

    "contratAffichage",

    "contratDetecteurFumee",

    "contratAutres",

    "contratEquipementGarantie",

    "contratProcedure",

    "avantageFiscal",

    "chauffageCuveMazout",

    "chauffageDeVille",

    "chauffageCiterne",

    "chauffageCiterneProprietaire",

    "chauffageCiterneLocataire",

    "pretHypotheque",

    "pretCreditRelais",

    "pretProcedure",

    "plusValuesResidencePrincipale",

    "plusValueRemploi",

    "plusValueRetraiteInvalide",

    "plusValueTravaux",
  ];

  return (
    <>
      <h1>Situation du terrain</h1>
      <h1>Etat du sous-sol - pollutions</h1>
      <h1>Servitudes</h1>
      <h1>Assainissement</h1>
      <h1>Situation du bâtiment</h1>
      <h1>Contrats existant sur le bien</h1>
      <h1>Avantage fiscal</h1>
      <h1>Chauffage</h1>
      <h1>Récupération des eaux de pluie</h1>
      <h1>Prêts - hypothèques</h1>
      <h1>Plus-values</h1>
      <h1>Sinistre</h1>
    </>
  );
};

export default CustomerQuizSummary;
