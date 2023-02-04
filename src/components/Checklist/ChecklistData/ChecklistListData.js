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
    ],
  },
  {
    type: "Vente",
    query: [
      {
        value: "formapuv",
        question: "Formalités suite à la signature de la promesse de vente",
      },
      {
        value: "analyseCompromisAgence",
        question: "Analyse d'un compromis d'agence",
      },
      {
        value: "formaVente",
        question: "Formalités postérieure acte de vente",
      }
    ]
  }
];

export default checklistList;
