import { Paragraph, convertMillimetersToTwip, ImageRun } from "docx";
import SignatureImg from "../Images/signature.png";
import BlobImage from "src/utils/KeyExists/BlobImage.js";


const CourrierSignature = () => {
  return new Paragraph({
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
  });
};

export default CourrierSignature;
