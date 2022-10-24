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
            header: convertMillimetersToTwip(50),
            footer: convertMillimetersToTwip(30),
            left:convertMillimetersToTwip(5),
            right: convertMillimetersToTwip(5),
          },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              text: "Header text",
              indent: {
                left: -400,
              },
            }),
            new Paragraph({
              text: "Some more header text",
              indent: {
                left: -600,
              },
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              text: "Footer text",
              indent: {
                left: -400,
              },
            }),
          ],
        }),
      },
      children: [new Paragraph("Hello World")],
    },
  ],
});

export default doc;
