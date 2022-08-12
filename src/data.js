const plusValues = [
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
  ]

}









  {
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
