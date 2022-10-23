import { Document, Paragraph, TextRun } from "docx";
import CourrierAdresse from "./CourrierComponent/CourrierAdresse";
import CourrierDate from "./CourrierComponent/CourrierDate"

const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          text: "Paragraph with spacing before",
          spacing: {
            before: 200,
          },
        }),
        new Paragraph({
          text: CourrierDate(),
          spacing: {
            before: 400,
          },
        }),

        new Paragraph({
          children: [
            new TextRun({
              text: "break",
              break: 2,
            }),
          ],
        }),
        CourrierAdresse('test Adresse')
      ],
    },
  ],
});

export default doc;
