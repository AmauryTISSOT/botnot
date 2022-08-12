export const plusValues = [
  {
    title: "Plus-values immobilières",
    quiz: [
      {
        id: "plusValuesResidencePrincipale",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question: "Le bien vendu constitue-t-il votre résidence principale ?",
      },
      {
        id: "plusValuesRemploiPrix",
        type: "binary",
        logic: "tree",
        access: ["plusValuesResidencePrincipale"],
        question:
          "Le vendez-vous pour remployer le prix dans l'achat de votre résidence principale ?",
      },

      {
        id: "plusValuesInvalide",
        type: "binary",
        logic: "tree",
        access: ["plusValuesResidencePrincipale"],
        question: "Etes-vous retraité ou invalide ?",
      },

      {
        id: "plusValuesAmelioration",
        type: "binary",
        logic: "tree",
        access: ["plusValuesResidencePrincipale"],
        question:
          "Avez-vous effectué des travaux de surélévation, construction ou d'amélioration ?",
      },
    ],
  },
];

// Mock data for development
export const MockData = [
  {
    title: "MockData",
    quiz: [
      {
        id: "MockRootId1",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        pointer: "tree",
        question: "Root question 1 ?",
      },
      {
        id: "MockRootId2",
        type: "binary",
        logic: "root",
        access: ["keystone"],
        question: "Root question 2 ?",
      },
      {
        id: "MockRootId3",
        type: "binary",
        logic: "root",
        access: ["MockRootId1"],
        question: "Root question 3 ?",
      },
      {
        id: "MockTreeId1",
        type: "binary",
        logic: "tree",
        access: ["MockRootId1", "MockRootId3"],
        question: "Tree question 1 ?",
      },
      {
        id: "MockTreeId2",
        type: "binary",
        logic: "tree",
        access: ["MockRootId2"],
        question: "Tree question 2 ?",
      },
      {
        id: "MockTreeId3",
        type: "binary",
        logic: "tree",
        access: ["MockRootId1"],
        question: "Tree question 3 ?",
      },
    ],
  },
];

