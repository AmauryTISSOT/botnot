import { Paragraph } from "docx";

const EmptySpacing = () => {
  return new Paragraph({
    children: [], // Just newline without text
  });
};

export default EmptySpacing;
