import { Paragraph } from "docx";

// function for blank space
const EmptySpacing = (number) => {
  const arr = [];
  const paraSpace = new Paragraph({ children: [] });

  let n = 1;

  if (number >= 1) {
    n = number;
  }

  for (let index = 0; index < n; index++) {
    arr.push(paraSpace);
  }

  return arr;
};

export default EmptySpacing;
