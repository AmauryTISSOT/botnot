import { Paragraph, TextRun } from "docx";
import { convertMillimetersToTwip } from "docx";

const CourrierDate = () => {
  // return a string with the current french date
  const getDateFormatted = () => {
    const months = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ];
    const today = new Date();
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return new Paragraph({
    indent: { left: convertMillimetersToTwip(62.4) },
    style: "classic",
    children: [
      new TextRun({
        text: "Paris, le " + getDateFormatted(), // The place should be a variable
      }),
    ],
  });
};

export default CourrierDate;
