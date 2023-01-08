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
  demandePretEtatDate: {
    input: [
      {
        type: "text",
        id: "adresse",
        label: "Adresse de la copropriété",
        placeholder: "35 rue de l'Eglise - 75007 PARIS",
      },
      {
        type: "text",
        id: "vendeurName",
        label: "Nom du vendeur",
        placeholder: "M. Patrick DUPONT",
      },
      {
        type: "text",
        id: "acquereurName",
        label: "Nom de l'acquéreur",
        placeholder: "Mme Marie JEAN",
      },
      {
        type: "text",
        id: "numeroLot",
        label: "Numéro des lots",
        placeholder: "243, 512",
      },
      {
        type: "text",
        id: "date",
        label: "Date de signature du compromis", //TODO: html date input
        placeholder: "12 janvier 2023",
      },
    ],
    mailString:
      "- Nom du vendeur : {{vendeurName}}\n - Immeuble : {{adresse}}\n - N° de(s) lot(s) : {{numeroLot}}\n - Nom de l’acquéreur : {{acquereurName}}\n - Date du compromis : {{date}}\n\nChère Madame, Cher Monsieur,\n\n Je me permets de venir vers vous concernant une vente dans la copropriété située {{adresse}}.\n\n En l’espèce, {{vendeurName}} vend(ent) à {{acquereurName}}, le(s) lot(s) : {{numeroLot}}.\n\n Un rendez-vous de signature de l’avant contrat est fixé pour le {{date}}.\n\n Vous voudrez bien me faire parvenir les documents suivants pour cette date :\n •	les procès-verbaux des assemblées générales des trois dernières années,\n •	le montant des charges du budget prévisionnel et des charges hors budget prévisionnel dues par le vendeur sur les deux exercices précédant la vente,\n •	les sommes pouvant rester dues par le vendeur au syndicat des copropriétaires et les sommes qui seront dues au syndicat par l'acquéreur,\n •	l'état global des impayés des charges au sein du syndicat,\n •	la quote-part du fonds de travaux attachée au lot principal vendu,\n •	le carnet d'entretien de l'immeuble,\n •	le diagnostic technique global,\n •	la fiche synthétique technique copropriété,\n •	la copie du règlement de copropriété et l'état descriptif de division ainsi que tous leurs modificatifs éventuels publiés.\n\n Vous remerciant par avance,\n\n Dans l’attente,\n\n Sincères salutations",
  },
};

export default EmailData;
