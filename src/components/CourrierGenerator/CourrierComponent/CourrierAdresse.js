import { Paragraph, TextRun } from "docx";
import { convertMillimetersToTwip } from "docx";
import GetMairieAddress from "../../API/GetMairieAddress/GetMairieAddress";

const CourrierAdresse = async (postalType, postalData) => {
  if (postalType === "mairie") {
    const postalObject = await GetMairieAddress(
      postalData.address.postalCode,
      postalData.address.townName
    );
    return [
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(62.4) },
        children: [
          new TextRun({
            text: "Mairie",
          }),
        ],
      }),
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(62.4) },
        children: [
          new TextRun({
            text: postalObject.rue,
          }),
        ],
      }),
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(62.4) },
        children: [
          new TextRun({
            text: `${postalObject.codePostal} - ${postalObject.commune}`,
          }),
        ],
      }),
    ];
  } else
    return new Paragraph({
      style: "classic",
      indent: { left: convertMillimetersToTwip(62.4) },
      children: [
        new TextRun({
          text: postalType,
        }),
      ],
    });
};

export default CourrierAdresse;
