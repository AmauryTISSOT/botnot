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
        type: "text",
        id: "test2",
        label: "testing label-2",
        placeholder: "500,00 €",
      },
      {
        type: "radio",
        id: "test3",
        label: "testing label-3",
        value: ["oui", "non"]
      },
    ],
    mailString:
      "This is a test. The variable 1 is {{test1}}. The variable 2 is {{test2}}. The variable 3 is {{test3}} ",
  },

};

export default EmailData;
