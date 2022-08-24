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
      <div>{data.length}</div>
    </>
  );
};

export default CustomerQuizSummary;
