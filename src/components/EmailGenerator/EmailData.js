const EmailData = {
  test: {
    input: [
      {
        type: "text",
        id: "test1",
        label: "testing label-1",
        placeholder: "0,00 €",
      },
      {
        type: "radio",
        id: "test2",
        label: "testing label-2",
        value: ["oui", "non"],
      },
      {
        type: "select",
        id: "test3",
        label: "testing label-3",
        value: ["option one", "option two"],
      },
    ],
    mailString:
      "This is a test. The variable 1 is {{test1}}. The variable 2 is {{test2}}. The variable 3 is {{test3}} ",
  },
  deblocagePret: {
    input: [
      {
        type: "text",
        id: "refPret",
        label: "Référence du pret",
        placeholder: "prêt n°AB132",
      },
    ],
    mailString:
      "Vos réf. : {{refPret}} \n\nChère Madame, Cher Monsieur,\n\n Je vous prie de trouver ci-joint une demande de déblocage concernant le prêt cité en référence.\n Je vous remercie de m’indiquer les dates suivantes : \n-	Date de première échéance, \n-	Date de dernière échéance, \n-	Date de péremption de l’inscription. \n\nDans l’attente de vous lire, \nSincères salutations",
  },
};

export default EmailData;
