import { Paragraph, TextRun } from "docx";

const CourrierObjet = (objet) => {
  return new Paragraph({
    style: "classic",
    children: [
      new TextRun({
        text: "Objet ",
        underline: {},
      }),
      new TextRun({
        text: ": ",
      }),
      new TextRun({
        text: objet,
      }),
    ],
  });
};

export default CourrierObjet;
