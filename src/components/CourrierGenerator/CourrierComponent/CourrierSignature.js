import { Paragraph, convertMillimetersToTwip, ImageRun } from "docx";
import SignatureImg from "../Images/signature.png";
import BlobImage from "/home/amaury/repos/botnot/src/utils/KeyExists/BlobImage.js"

const CourrierSignature = (notaryName) => {
  return [
    new Paragraph({
      style: "classic",
      indent: { left: convertMillimetersToTwip(62.4) },
      text: `Maître ${notaryName}`, //variable
    }),

    new Paragraph({
      indent: { left: convertMillimetersToTwip(62.4) },

      children: [
        new ImageRun({
          data: BlobImage(SignatureImg),
          transformation: {
            width: 300,
            height: 150,
          },
        }),
      ],
    }),
  ];
};

export default CourrierSignature;
