import { Paragraph, TextRun } from "docx";
import { convertMillimetersToTwip } from "docx";
import keyExists from "../../../utils/KeyExists/KeysExists";
import GetMairieAddress from "../../API/GetMairieAddress/GetMairieAddress";
import CourrierFixedAddress from "./CourrierData/CourrierFixedAddress";

const CourrierAdresse = async (postalType, postalData, courrierValue) => {
  
  const createParagraph = (text) => {
    return new Paragraph({
      style: "classic",
      indent: { left: convertMillimetersToTwip(62.4) },
      children: [
        new TextRun({
          text,
        }),
      ],
    });
  };
  // return a fixed address if courrierValue is in CourrierFixedAddress
  if (keyExists(CourrierFixedAddress, courrierValue.toString())) {
    return CourrierFixedAddress[courrierValue].map((element) =>
      createParagraph(element)
    );
  }

  // return the mairie address from API
  if (postalType === "mairie") {
    const postalObject = await GetMairieAddress(
      postalData.address.postalCode,
      postalData.address.townName
    );
    return [
      createParagraph("Mairie"),
      createParagraph(postalObject.rue),
      createParagraph(`${postalObject.codePostal} - ${postalObject.commune}`),
    ];
  } else return createParagraph(postalType);
};

export default CourrierAdresse;
