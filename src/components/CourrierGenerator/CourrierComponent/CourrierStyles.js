import { AlignmentType } from "docx";

const CourrierStyles = () => {
  return {
    paragraphStyles: [
      {
        id: "classic",
        name: "Classic",
        basedOn: "Normal",
        next: "Normal",
        run: {
          size: 22,
          font: "Calibri",
        },
        paragraph: {
          alignment: AlignmentType.JUSTIFIED,
        },
      },
    ],
  };
};

export default CourrierStyles;
