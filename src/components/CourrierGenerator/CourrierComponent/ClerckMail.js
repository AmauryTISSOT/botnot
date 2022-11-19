import { Paragraph, TextRun, convertMillimetersToTwip } from "docx";

const ClerkMail = (email) => {
  return new Paragraph({
    indent: { left: -convertMillimetersToTwip(20) },
    style: 'classic',
    children: [
      new TextRun({
        text: email,
      }),
    ],
  });
};

export default ClerkMail;
