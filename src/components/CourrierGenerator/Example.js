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
  ImageRun,
} from "docx";
import CourrierAdresse from "./CourrierComponent/CourrierAdresse";
import CourrierDate from "./CourrierComponent/CourrierDate";
import { convertMillimetersToTwip } from "docx";
import MiseEnPage from "./CourrierComponent/MiseEnPage";
import EmptySpacing from "./CourrierComponent/EmptySpacing";
import FollowedBy from "./CourrierComponent/FollowedBy";
import ClerkMail from "./CourrierComponent/ClerckMail";
import CourrierObjet from "./CourrierComponent/CourrierObjet";
import signatureImg from "./GenerateDocs/signature.png"


const blobImage = async () => {
  const blob = await fetch(signatureImg
  ).then((r) => r.blob());
  return blob;
};

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
        EmptySpacing(),

        new Paragraph({
          style: "classic",
          numbering: {
            reference: "my-unique-bullet-points",
            level: 0,
          },
          children: [
            new TextRun({
              text: "INSALUBRITE : ",
              bold: true,
            }),
            new TextRun({
              text: "Si l'immeuble fait l'objet de mesures d'insalubrité prises en application des articles 1331-22 et suivants du Code de la santé publique.",
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
              text: "PERIL & INSECURITE : ",
              bold: true,
            }),
            new TextRun({
              text: "Si l'immeuble fait l'objet d'arrêtés municipaux pris en application des articles L.511-1 à L511-7, R511-1 à R511-12, L129-1 à L129-7, R129-1 à R129-9 du Code de la construction et de l'habitation.",
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
              text: "EXPOSITION AU PLOMB & LUTTE CONTRE LE SATURNISME : ",
              bold: true,
            }),
            new TextRun({
              text: "Si l'immeuble fait l'objet de mesures de protection contre l'exposition au plomb.",
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
              text: "LUTTE CONTRE LES TERMITES : ",
              bold: true,
            }),
            new TextRun({
              text: "Si l'immeuble est situé dans une zone contaminée par les termites ou susceptible de l'être en application des dispositions du Code de la Construction et de l'Habitation.",
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
              text: "ASSAINISSEMENT : ",
              bold: true,
            }),
            new TextRun({
              text: "Si l'immeuble est raccordé au système d'assainissement de la ville de Paris",
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
              text: "RAVALEMENT : ",
              bold: true,
            }),
            new TextRun({
              text: "Si l'immeuble fait l'objet d'arrêtés municipaux pris en mesure de ravalement en application des articles 132-1 et suivants du Code de la Construction et de l'Habitation.",
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
                "Vous remerciant par avance de l’attention bienveillante que vous porterez à ma demande, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.",
              ],
            }),
          ],
        }),
        EmptySpacing(),

        new Paragraph({
          style: "classic",
          indent: { left: convertMillimetersToTwip(62.4) },
          text: "Maître XXXXXXX",
        }),

        new Paragraph({
          indent: { left: convertMillimetersToTwip(62.4) },

          children: [
            new ImageRun({
              data: blobImage(),
              transformation: {
                width: 300,
                height: 150,
              },
            }),
          ],
        }),
      ],
    },
  ],
});

export default doc;
