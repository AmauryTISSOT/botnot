import CourrierBody from "./CourrierBody";
import { Paragraph, TextRun, Tab, convertMillimetersToTwip } from "docx";
import EmptySpacing from "../EmptySpacing";

describe("CourrierBody function testing", () => {
  test("should return text", () => {
    const mockData = [{ text: "text123" }];
    expect(CourrierBody(mockData)).toStrictEqual([
      new Paragraph({
        style: "classic",
        indent: {},
        numbering: {},
        children: [
          new TextRun({
            children: ["text123"],
            bold: false,
            underline: false,
            italics: false,
          }),
        ],
      }),
    ]);
  });

  test("should work with tab", () => {
    const mockData = [{ text: "text123", tab: true }];
    expect(CourrierBody(mockData)).toStrictEqual([
      new Paragraph({
        style: "classic",
        indent: {},
        numbering: {},
        children: [
          new TextRun({
            children: [new Tab(), "text123"],
            bold: false,
            underline: false,
            italics: false,
          }),
        ],
      }),
    ]);
  });

  test("should work with indent", () => {
    const mockData = [{ text: "text123", tab: true, indent: 100 }];
    expect(CourrierBody(mockData)).toStrictEqual([
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(100) },
        numbering: {},
        children: [
          new TextRun({
            children: [new Tab(), "text123"],
            bold: false,
            underline: false,
            italics: false,
          }),
        ],
      }),
    ]);
  });

  test("should work with bold", () => {
    const mockData = [{ text: "text123", tab: true, indent: 100, bold: true }];
    expect(CourrierBody(mockData)).toStrictEqual([
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(100) },
        numbering: {},
        children: [
          new TextRun({
            children: [new Tab(), "text123"],
            bold: true,
            underline: false,
            italics: false,
          }),
        ],
      }),
    ]);
  });

  test("should work with italic", () => {
    const mockData = [
      { text: "text123", tab: true, indent: 100, bold: true, italic: true },
    ];
    expect(CourrierBody(mockData)).toStrictEqual([
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(100) },
        numbering: {},
        children: [
          new TextRun({
            children: [new Tab(), "text123"],
            bold: true,
            underline: false,
            italics: true,
          }),
        ],
      }),
    ]);
  });

  test("should work with underline", () => {
    const mockData = [
      {
        text: "text123",
        tab: true,
        indent: 100,
        bold: true,
        italic: true,
        underline: true,
      },
    ];
    expect(CourrierBody(mockData)).toStrictEqual([
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(100) },
        numbering: {},
        children: [
          new TextRun({
            children: [new Tab(), "text123"],
            bold: true,
            underline: true,
            italics: true,
          }),
        ],
      }),
    ]);
  });

  test("should work with bulletpoint", () => {
    const mockData = [
      {
        text: "text123",
        tab: true,
        indent: 100,
        bold: true,
        italic: true,
        underline: true,
        bulletPoint: true,
      },
    ];
    expect(CourrierBody(mockData)).toStrictEqual([
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(100) },
        numbering: { reference: "my-unique-bullet-points", level: 0 },
        children: [
          new TextRun({
            children: [new Tab(), "text123"],
            bold: true,
            underline: true,
            italics: true,
          }),
        ],
      }),
    ]);
  });

  test("should work with lineBreak", () => {
    const mockData = [
      {
        text: "text123",
        tab: true,
        indent: 100,
        bold: true,
        italic: true,
        underline: true,
        bulletPoint: true,
        lineBreak: true,
      },
    ];
    expect(CourrierBody(mockData)).toStrictEqual([
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(100) },
        numbering: { reference: "my-unique-bullet-points", level: 0 },
        children: [
          new TextRun({
            children: [new Tab(), "text123"],
            bold: true,
            underline: true,
            italics: true,
          }),
        ],
      }),
      ...EmptySpacing(),
    ]);
  });

  test("should work with multiple object", () => {
    const mockData = [
      {
        text: "text123",
        tab: true,
        indent: 100,
        bold: true,
        italic: true,
        underline: true,
        bulletPoint: true,
        lineBreak: true,
      },
      {
        text: "text456",
        tab: true,
        indent: 100,
        bold: true,
        italic: true,
        underline: true,
        bulletPoint: true,
        lineBreak: true,
      },
    ];
    expect(CourrierBody(mockData)).toStrictEqual([
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(100) },
        numbering: { reference: "my-unique-bullet-points", level: 0 },
        children: [
          new TextRun({
            children: [new Tab(), "text123"],
            bold: true,
            underline: true,
            italics: true,
          }),
        ],
      }),
      ...EmptySpacing(),
      new Paragraph({
        style: "classic",
        indent: { left: convertMillimetersToTwip(100) },
        numbering: { reference: "my-unique-bullet-points", level: 0 },
        children: [
          new TextRun({
            children: [new Tab(), "text456"],
            bold: true,
            underline: true,
            italics: true,
          }),
        ],
      }),
      ...EmptySpacing(),
    ]);
  });
});
