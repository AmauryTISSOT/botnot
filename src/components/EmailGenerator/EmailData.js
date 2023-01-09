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
        valueObj: [
          {
            subLabel: "oui",
            value: "yes",
          },
          {
            subLabel: "non",
            value: "no",
          },
        ],
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
      "Vos réf. : {{refPret}} \n\n Bonjour,\n\n Je vous prie de trouver ci-joint une demande de déblocage concernant le prêt cité en référence.\n Je vous remercie de m’indiquer les dates suivantes : \n-	Date de première échéance, \n-	Date de dernière échéance, \n-	Date de péremption de l’inscription. \n\nDans l’attente de vous lire, \nSincères salutations",
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
      "- Nom du vendeur : {{vendeurName}}\n - Immeuble : {{adresse}}\n - N° de(s) lot(s) : {{numeroLot}}\n - Nom de l’acquéreur : {{acquereurName}}\n - Date du compromis : {{date}}\n\n Bonjour,\n\n Je me permets de venir vers vous concernant une vente dans la copropriété située {{adresse}}.\n\n En l’espèce, {{vendeurName}} vend(ent) à {{acquereurName}}, le(s) lot(s) : {{numeroLot}}.\n\n Un rendez-vous de signature de l’avant contrat est fixé pour le {{date}}.\n\n Vous voudrez bien me faire parvenir les documents suivants pour cette date :\n •	les procès-verbaux des assemblées générales des trois dernières années,\n •	le montant des charges du budget prévisionnel et des charges hors budget prévisionnel dues par le vendeur sur les deux exercices précédant la vente,\n •	les sommes pouvant rester dues par le vendeur au syndicat des copropriétaires et les sommes qui seront dues au syndicat par l'acquéreur,\n •	l'état global des impayés des charges au sein du syndicat,\n •	la quote-part du fonds de travaux attachée au lot principal vendu,\n •	le carnet d'entretien de l'immeuble,\n •	le diagnostic technique global,\n •	la fiche synthétique technique copropriété,\n •	la copie du règlement de copropriété et l'état descriptif de division ainsi que tous leurs modificatifs éventuels publiés.\n\n Vous remerciant par avance,\n\n Dans l’attente,\n\n Sincères salutations",
  },
  envoiDecompteAcquereur: {
    input: [
      {
        type: "text",
        id: "date",
        label: "Date du rendez-vous de signature",
        placeholder: "18 août 2023",
      },
      {
        type: "text",
        id: "hour",
        label: "Heure du rendez-vous",
        placeholder: "16h30",
      },
      {
        type: "text",
        id: "price",
        label: "Montant du virement à effectuer",
        placeholder: "315.000,00", //TODO: html input for price (with 0,00 € format)
      },
    ],
    mailString:
      "Bonjour,\n\n Je vous confirme le rendez-vous pour la signature de la vente citée en référence au {{date}} à {{hour}} en l'office notarial.\n\n Je vous prie de bien vouloir trouver ci-joint le bilan financier de votre acquisition.\n\n Aussi je vous remercie en conséquence de bien vouloir faire établir par votre banque un virement d'un montant de {{price}} euros à porter au crédit de mon compte au minimum deux jours avant la date de signature.\n J'attire votre attention sur le fait que l’envoi d’un virement, lorsqu’il ne résulte pas d'un prêt bancaire, doit être accompagné d’une attestation de provenance de fonds établie par la banque émettrice du virement.\n Je vous invite à vous rapprocher rapidement de votre établissement bancaire car il lui est nécessaire d'avoir un certain délai pour procéder à ce mode de paiement.\n Le mode de règlement par virement nous est imposé par l'article 37 de la loi numéro 2011-331 du 28 Mars 2011, à l'exclusion de tout autre mode de paiement.\n\n Enfin, je vous remercie de bien vouloir, pour le rendez-vous envisagé de signature, vous munir des documents suivants :\n - une pièce d’identité en cours de validité,\n - un relevé d’identité bancaire (RIB),\n - un carnet de chèque / carte bancaire pour régler les éventuels proratas.\n\n En vous remerciant,\n\n Sincères salutations",
  },
};

export default EmailData;
