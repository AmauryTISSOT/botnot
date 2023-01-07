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
        id: "test3",
        label: "testing label-3",
        value: ["oui", "non"],
      },
      {
        type: "select",
        id: "test4",
        label: "testing label-3",
        value: ["option one", "option two"],
      },
    ],
    mailString:
      "This is a test. The variable 1 is {{test1}}. The variable 2 is {{test2}}. The variable 3 is {{test3}} ",
  },
};

export default EmailData;
