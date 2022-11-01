import { Paragraph, TextRun} from "docx";

const CourrierObjet = (objet) => {
  return new Paragraph({
    children: [
      new TextRun({
        text: "Objet ",
        font: "Calibri",
        size: 22, //font size 22 = 11 pt,
        underline: {},
      }),
      new TextRun({
        text: ": ",
        font: "Calibri",
        size: 22, //font size 22 = 11 pt,
      }),
      new TextRun({
        text: objet,
        font: "Calibri",
        size: 22, //font size 22 = 11 pt,
      }),
    ],
  });
};

export default CourrierObjet;
