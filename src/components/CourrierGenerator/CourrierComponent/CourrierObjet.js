import { Paragraph, TextRun } from "docx";
import courrierListData from "../CourrierComponent/CourrierData/CourrierListData";

const CourrierObjet = (objet) => {

    // get the "courrier objet" in the courrierListData
  const getCourrierObject = (value) => {
    for (let i = 0; i < courrierListData.length; i++) {
      for (let j = 0; j < courrierListData[i].query.length; j++) {
        // Check if the value of the current index of the query array is equal to the value argument
        if (courrierListData[i].query[j].value === value) {
          return courrierListData[i].query[j].question;
        }
      }
    }
  };

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
        text: getCourrierObject(objet),
      }),
    ],
  });
};

export default CourrierObjet;
