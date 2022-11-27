import { Paragraph, TextRun, Tab, convertMillimetersToTwip } from "docx";
import CourrierTable from "../CourrierTable";
import EmptySpacing from "../EmptySpacing";
import keyExists from "/home/amaury/repos/botnot/src/utils/KeyExists/KeysExists.js";

// Function argument should be an array
const CourrierBody = (courrierData, clientData) => {
  const returnArray = [];

  const indentKey = (element) => {
    if (keyExists(element, "indent")) {
      return { left: convertMillimetersToTwip(element.indent) };
    } else return {};
  };

  const bulletPointKey = (element) => {
    if (keyExists(element, "bulletPoint")) {
      return { reference: "my-unique-bullet-points", level: 0 };
    } else return {};
  };

  const tabKey = (element) => {
    if (keyExists(element, "tab")) {
      if (element.tab === true) {
        return [new Tab(), element.text];
      }
    } else return [element.text];
  };

  const boldKey = (element) => {
    if (keyExists(element, "bold")) {
      if (element.bold === true) {
        return true;
      }
    } else return false;
  };

  const italicKey = (element) => {
    if (keyExists(element, "italic")) {
      if (element.italic === true) {
        return true;
      }
    } else return false;
  };

  const underlineKey = (element) => {
    if (keyExists(element, "underline")) {
      if (element.underline === true) {
        return true;
      }
    } else return false;
  };

  const pushedParagraph = (element) => {
    return new Paragraph({
      style: "classic",
      indent: indentKey(element),
      numbering: bulletPointKey(element),
      children: [
        new TextRun({
          children: tabKey(element),
          bold: boldKey(element),
          underline: underlineKey(element),
          italics: italicKey(element),
        }),
        new TextRun(element.textRun === undefined ? {} : element.textRun),
      ],
    });
  };

  courrierData.forEach((element) => {
    if (element.text === "tableauCadastre") {
      returnArray.push(CourrierTable(clientData));
      if (keyExists(element, "lineBreak")) {
        if (element.lineBreak === true) {
          returnArray.push(...EmptySpacing());
        }
      }
    } else {
      returnArray.push(pushedParagraph(element));
      if (keyExists(element, "lineBreak")) {
        if (element.lineBreak === true) {
          returnArray.push(...EmptySpacing());
        }
      }
    }
  });

  return returnArray;
};

export default CourrierBody;
