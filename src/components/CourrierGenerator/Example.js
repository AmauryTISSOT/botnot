import { Document, Paragraph, TextRun, Header, Footer } from "docx";
import CourrierAdresse from "./CourrierComponent/CourrierAdresse";
import CourrierDate from "./CourrierComponent/CourrierDate";
import { convertMillimetersToTwip } from "docx";

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: convertMillimetersToTwip(38),
            bottom: convertMillimetersToTwip(42.5),
            left:convertMillimetersToTwip(50),
            right: convertMillimetersToTwip(25),
          },
        },
      },
    children: [
      new Paragraph({
        indent: {left: convertMillimetersToTwip(62.4)},
        children: [
          new TextRun({
            text: 'DIRECTION DU LOGEMENT ET DE L\'HABITAT',
            bold: true,
            font: 'Calibri',
            size: 20,
          })
        ]
      }),
      new Paragraph({
        indent: {left: convertMillimetersToTwip(62.4)},
        children: [
          new TextRun({
            text: 'Sous-direction de l\'habitat',
            font: 'Calibri',
            size: 20,
          })
        ]
      }),
    ]  
    
    },
  ],
});

export default doc;
