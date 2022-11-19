import { Paragraph, TextRun, convertMillimetersToTwip } from "docx";

const FollowedBy = (ClerkName) => {
  return [
    new Paragraph({
      indent: { left: -convertMillimetersToTwip(20) },
      style: "classic",
      children: [
        new TextRun({
          text: "Dossier suivi par :",
          // font: "Calibri",
          // size: 22,
        }),
      ],
    }),
    new Paragraph({
      indent: { left: -convertMillimetersToTwip(20) },
      style: "classic",
      children: [
        new TextRun({
          text: ClerkName,
          break: 1,
        }),
      ],
    }),
  ];
};

export default FollowedBy;
