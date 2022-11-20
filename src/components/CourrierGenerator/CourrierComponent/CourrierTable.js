import {
  Table,
  TableRow,
  TableCell,
  Paragraph,
  ShadingType,
  TextRun,
} from "docx";
import keyExists from "../../../utils/KeyExists/KeysExists";


// arraDate example : 
// [
//     {
//       // prefixe: "001",
//       section: "AZ",
//       numero: "206",
//       lieudit: "LE BOIS",
//       surface: "00ha 01ca 23a",
//     }
//   ]

const CourrierTable = (arrayData) => {
  //TODO: surface total
  //TODO: table indent

  //handle arrayData error
  if (!Array.isArray(arrayData)) {
    throw console.error("array Data is not an array !");
  }

  // check if prefixe keys exist in arrayDate
  const prefixeKeysTitle = (element) => {
    if (keyExists(element, "prefixe")) {
      return new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                bold: true,
                text: "Prefixe",
              }),
            ],
          }),
        ],
        shading: {
          // couleur
          fill: "#D3D3D3",
          type: ShadingType.REVERSE_DIAGONAL_STRIPE,
          color: "auto",
        },
      });
    }
  };

  // first row of the table
  let rowsArray = [
    new TableRow({
      children: [
        prefixeKeysTitle(arrayData),

        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  bold: true,
                  text: "Section",
                }),
              ],
            }),
          ],
          shading: {
            // couleur
            fill: "#D3D3D3",
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: "auto",
          },
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  bold: true,
                  text: "N°",
                }),
              ],
            }),
          ],
          shading: {
            // couleur
            fill: "#D3D3D3",
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: "auto",
          },
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  bold: true,
                  text: "Lieudit",
                }),
              ],
            }),
          ],
          shading: {
            // couleur
            fill: "#D3D3D3",
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: "auto",
          },
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  bold: true,
                  text: "Surface",
                }),
              ],
            }),
          ],
          shading: {
            // couleur
            fill: "#D3D3D3",
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: "auto",
          },
        }),
      ],
    }),
  ];

  // generate newColumns | arguments = string
  const newColumns = (element) => {
    if (keyExists(element, "prefixe")) {
      return new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph(element.prefixe)],
          }),
          new TableCell({
            children: [new Paragraph(element.section)],
          }),
          new TableCell({
            children: [new Paragraph(element.numero)],
          }),
          new TableCell({
            children: [new Paragraph(element.lieudit)],
          }),
          new TableCell({
            children: [new Paragraph(element.surface)],
          }),
        ],
      });
    } else
      return new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph(element.section)],
          }),
          new TableCell({
            children: [new Paragraph(element.numero)],
          }),
          new TableCell({
            children: [new Paragraph(element.lieudit)],
          }),
          new TableCell({
            children: [new Paragraph(element.surface)],
          }),
        ],
      });
  };

  // main function loop
  arrayData.forEach((element) => {
    rowsArray.push(newColumns(element));
  });

  // change the width of columns if prefixe exist
  const prefixColumnWidths = (element) => {
    if (keyExists(element[0], "prefixe")) {
      return [900, 900, 700, 2000, 1400];
    } else return [900, 700, 2000, 1400];
  };

  return new Table({
    columnWidths: prefixColumnWidths(arrayData), 
    rows: rowsArray,
  });
};

export default CourrierTable;
