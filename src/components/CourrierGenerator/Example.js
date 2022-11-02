import {
  Document,
  Paragraph,
  TextRun,
  Header,
  Footer,
  Spacing,
  AlignmentType,
  Tab,
  LevelFormat,
  convertInchesToTwip,
} from "docx";
import CourrierAdresse from "./CourrierComponent/CourrierAdresse";
import CourrierDate from "./CourrierComponent/CourrierDate";
import { convertMillimetersToTwip } from "docx";
import MiseEnPage from "./CourrierComponent/MiseEnPage";
import EmptySpacing from "./CourrierComponent/EmptySpacing";
import FollowedBy from "./CourrierComponent/FollowedBy";
import ClerkMail from "./CourrierComponent/ClerckMail";
import CourrierObjet from "./CourrierComponent/CourrierObjet";

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "my-unique-bullet-points",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "\u2022",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: {
                  left: convertInchesToTwip(0.5),
                  hanging: convertInchesToTwip(0.25),
                },
              },
            },
          },
        ],
      },
    ],
  },

  styles: {
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
  },
  sections: [
    {
      properties: MiseEnPage(38, 42.5, 50, 25),
      children: [
        CourrierAdresse(
          "Direction du logement et de l'habitat \n 66 Bis Rue du Président Wilson \n 92300 LEVALOIS PERRET"
        ),
        EmptySpacing(),
        CourrierDate(),
        EmptySpacing(),
        new Paragraph({
          indent: { left: -convertMillimetersToTwip(20) },
          style: "classic",
          children: [
            new TextRun({
              text: "Dossier suivi par :",
              // font: "Calibri",
              // size: 22,
            }),
          ],
        }),
        FollowedBy("Amaury Tissot"),
        ClerkMail("email@paris.notaires.fr"),
        EmptySpacing(),
        EmptySpacing(),
        CourrierObjet("TEST OBJET"),
        EmptySpacing(),
        EmptySpacing(),

        new Paragraph({
          style: "classic",
          children: [
            new TextRun({
              children: [new Tab(), "Madame, Monsieur,"],
            }),
          ],
        }),
        EmptySpacing(),

        new Paragraph({
          style: "classic",
          children: [
            new TextRun({
              children: [
                new Tab(),
                "Je me permets de venir vers vous dans le cadre du dossier visé en référence, portant sur un immeuble situé à PARIS (XXXXX).",
              ],
            }),
          ],
        }),
        EmptySpacing(),

        new Paragraph({
          style: "classic",
          children: [
            new TextRun({
              children: [
                new Tab(),
                "Aussi, je vous saurais-je gré de bien vouloir me confirmer par retour de courrier les dipositions relatives à l'immeuble concernant :",
              ],
            }),
          ],
        }),
        new Paragraph({
          style: "classic",
          numbering: {
            reference: "my-unique-bullet-points",
            level: 0,
          },
          children: [
            new TextRun({
              text: "INSALUBRITE",
              bold: true,
            }),
          ],
        }),
      ],
    },
  ],
});

export default doc;
