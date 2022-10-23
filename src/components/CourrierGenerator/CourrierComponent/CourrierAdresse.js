import { Paragraph, TextRun } from "docx";

const CourrierAdresse = (adresse) => {
  return new Paragraph({
    indent: {left: 4020},
    children: [
      new TextRun({
        text: adresse,
      }),
    ],
  });
};

export default CourrierAdresse;
