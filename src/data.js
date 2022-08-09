const plusValues = [
  {
    title: "Plus-values immobilières",
    root: {
      id: "plusValuesResidencePrincipale",
      type: "binary",
      logic: "root",
      pointer: "tree",
      question: "Le bien vendu constitue-t-il votre résidence principale ?",
    },
    tree: [
      {
        id: "plusValuesRemploiPrix",
        type: "binary",
        logic: "tree",
        pointer: [NaN],
        question:
          "Le vendez-vous pour remployer le prix dans l'achat de votre résidence principale ?",
      },

      {
        id: "plusValuesInvalide",
        type: "binary",
        logic: "tree",
        pointer: [NaN],
        question: "Etes-vous retraité ou invalide ?",
      },

      {
        id: "plusValuesAmelioration",
        type: "binary",
        logic: "tree",
        pointer: [NaN],
        question:
          "Avez-vous effectué des travaux de surélévation, construction ou d'amélioration ?",
      },
    ],
  },
];

export default plusValues;
