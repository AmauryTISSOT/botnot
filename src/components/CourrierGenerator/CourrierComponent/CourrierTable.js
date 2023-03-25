import {
  Table,
  TableRow,
  TableCell,
  Paragraph,
  ShadingType,
  TextRun,
  AlignmentType,
} from "docx";

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

  //handle arrayData error
  if (!Array.isArray(arrayData)) {
    throw console.error("array Data is not an array !");
  }

  // return false if prefixe : NaN
  function isPrefixeNaN(obj) {
    for (let i = 0; i < obj.length; i++) {
      if (isNaN(obj[i].prefixe)) {
        return false;
      }
    }
    return true;
  }

  // check if prefixe keys exist in arrayDate
  const prefixeKeysTitle = (element) => {
    if (isPrefixeNaN(element)) {
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
    if (isPrefixeNaN(arrayData)) {
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
    } else {
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
    }
  };

  // main function loop
  arrayData.forEach((element) => {
    rowsArray.push(newColumns(element));
  });

  // change the width of columns if prefixe exist
  const prefixColumnWidths = (element) => {
    if (isPrefixeNaN(element)) {
      return [900, 900, 600, 2500, 1600];
    } else return [900, 600, 2500, 1600];
  };

  return new Table({
    alignment: AlignmentType.CENTER,
    columnWidths: prefixColumnWidths(arrayData),
    rows: rowsArray,
  });
};

export default CourrierTable;
