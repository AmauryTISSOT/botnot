import { Paragraph, TextRun } from "docx";
import { convertMillimetersToTwip } from "docx";

const CourrierAdresse = (adresse) => {
  return new Paragraph({
    style: 'classic',
    indent: { left: convertMillimetersToTwip(62.4) },
    children: [
      new TextRun({
        text: adresse
      }),
    ],
  });
};

export default CourrierAdresse;
