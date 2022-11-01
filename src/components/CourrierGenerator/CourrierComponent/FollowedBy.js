import { Paragraph, TextRun, convertMillimetersToTwip } from "docx";

const FollowedBy = (ClerkName) => {
  return new Paragraph({
    indent: { left: -convertMillimetersToTwip(20) },

    children: [
      new TextRun({
        text: ClerkName,
        font: "Calibri",
        size: 22, //font size 22 = 11 pt,
        break: 1,
      }),
    ],
  });
};

export default FollowedBy;
