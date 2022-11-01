import { convertMillimetersToTwip } from "docx";

const MiseEnPage = (top, bottom, left, right) => {
  return {
    page: {
      margin: {
        top: convertMillimetersToTwip(top),
        bottom: convertMillimetersToTwip(bottom),
        left: convertMillimetersToTwip(left),
        right: convertMillimetersToTwip(right),
      },
    },
  };
};

export default MiseEnPage;
