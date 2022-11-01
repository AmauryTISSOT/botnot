import { Paragraph, TextRun } from "docx";
import { convertMillimetersToTwip } from "docx";

const CourrierAdresse = (adresse) => {
  return new Paragraph({
    indent: { left: convertMillimetersToTwip(62.4) },
    children: [
      new TextRun({
        text: adresse,
        font: "Calibri",
        size: 22, //font size 22 = 11 pt
      }),
    ],
  });
};

export default CourrierAdresse;
