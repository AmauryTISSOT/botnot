import { Paragraph, TextRun, convertMillimetersToTwip } from "docx";

const ClerkMail = (email) => {
  return new Paragraph({
    indent: { left: -convertMillimetersToTwip(20) },
    children: [
      new TextRun({
        text: email,
        font: "Calibri",
        size: 22, //font size 22 = 11 pt,
      }),
    ],
  });
};

export default ClerkMail;
