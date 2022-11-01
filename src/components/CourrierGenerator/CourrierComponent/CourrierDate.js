import { Paragraph, TextRun } from "docx";
import { convertMillimetersToTwip } from "docx";

const CourrierDate = () => {
  // French Month Array
  const frenchMonth = [
    "NaN",
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const year = today.getFullYear();

  // return a string with the current french date

  return new Paragraph({
    indent: { left: convertMillimetersToTwip(62.4) },
    children: [
      new TextRun({
        text: `Paris, ${day} ${frenchMonth[month]} ${year}`, // The place should be a variable
        font: "Calibri",
        size: 22, //font size 22 = 11 pt
      }),
    ],
  });
};

export default CourrierDate;
