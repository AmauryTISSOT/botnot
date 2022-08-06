const plusValues = [
  {
    question: "Le bien vendu constitue-t-il votre résidence principale ?",
    answer: ["oui", "non"],
    logic: {
      "oui": "Pas de plus-values exigible.",
      "non": {
        question: [
          "Le vendez-vous pour remployer le prix dans l'achat de votre résidence principale ?",
          "Etes-vous retraité ou invalide ?",
          "Avez-vous effectué des travaux de surélévation, construction ou d'amélioration ?",
        ],
      },
    },
  },
];

export default plusValues;
