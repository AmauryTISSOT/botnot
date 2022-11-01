import { Paragraph, TextRun } from "docx";

const DHLBody = () => {
  return new Paragraph({
    style: "classic",
    children: [
      new TextRun({
        text: "Madame, Monsieur,Je me permets de venir vers vous dans le cadre du dossier visé en référence.",
      }),
    ],
  });
};

export default DHLBody;


//TODO: find a way to add several paragraph