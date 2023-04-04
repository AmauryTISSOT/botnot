const checklistList = [
  {
    type: "Urbanisme",
    query: [
      {
        value: "dia",
        question: "Déclaration d'intention d'aliéner (DIA)",
      },
      {
        value: "cu",
        question: "Certificat d'urbanisme (CU)",
      },
    ],
  },
  {
    type: "Divers",
    query: [
      {
        value: "docusign",
        question: "Procuration DocuSign",
      },
      {
        value: "ehf",
        question: "Etat hypothécaire",
      },
      {
        value: "decompte",
        question: "Décompte",
      },
      {
        value: "minute",
        question: "Pochette Minute",
      },
    ],
  },
  {
    type: "Vente",
    query: [
      {
        value: "analyseCompromisAgence",
        question: "Analyse d'un compromis d'agence",
      },
      {
        value: "fixationRdvVente",
        question: "Fixation rendez-vous acte de vente",
      },

      {
        value: "clauseEtude",
        question: "Clauses étude à pointer",
      },
    ],
  },
  {
    type: "Formalités postérieures",
    query: [
      {
        value: "formapuv",
        question: "Formalités postérieure promesse de vente (PUV)",
      },
      {
        value: "formaVente",
        question: "Formalités postérieure acte de vente",
      },
      {
        value: "formaPret",
        question: "Formalités postérieure acte de prêt",
      },
    ],
  },
  {
    type: "Formalités antérieures",
    query: [
      {
        value: "formaAntPuv",
        question: "Formalités antérieures promesse de vente (PUV)"
      },
      {
        value: "formaAntVente",
        question: "Formalités antérieures promesse acte de vente"
      },
      {
        value: "formaAntPret",
        question: "Formalités antérieures acte de prêt"
      },
    ]
  },
];

export default checklistList;
