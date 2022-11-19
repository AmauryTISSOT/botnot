import {
  Document,
  Paragraph,
  TextRun,
  Tab,
  convertMillimetersToTwip,
  ImageRun,
} from "docx";

import CourrierAdresse from "./CourrierComponent/CourrierAdresse";
import CourrierDate from "./CourrierComponent/CourrierDate";
import MiseEnPage from "./CourrierComponent/MiseEnPage";
import EmptySpacing from "./CourrierComponent/EmptySpacing";
import FollowedBy from "./CourrierComponent/FollowedBy";
import ClerkMail from "./CourrierComponent/ClerckMail";
import CourrierObjet from "./CourrierComponent/CourrierObjet";
import BulletPointConfig from "./BulletPointConfig";
import CourrierStyles from "./CourrierStyles";
import CourrierHeader from "./CourrierHeader";
import CourrierFooter from "./CourrierFooter";
import CourrierSignature from "./CourrierSignature";

//Image import

const blobImage = async (ImagePath) => {
  const blob = await fetch(ImagePath).then((r) => r.blob());
  return blob;
};

const doc = new Document({
  numbering: BulletPointConfig(),
  styles: CourrierStyles(),
  sections: [
    {
      properties: MiseEnPage(38, 42.5, 50, 25),
      headers: CourrierHeader(),
      footers: CourrierFooter(),
      children: [
        EmptySpacing(),
        EmptySpacing(),
        EmptySpacing(),
        EmptySpacing(),

        CourrierAdresse(
          "Direction du logement et de l'habitat \n 66 Bis Rue du Président Wilson \n 92300 LEVALOIS PERRET"
        ), //variable
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

        FollowedBy("Amaury Tissot"), //variable

        ClerkMail("email@paris.notaires.fr"), //variable

        EmptySpacing(),
        EmptySpacing(),

        CourrierObjet("TEST OBJET"), //variable

        EmptySpacing(),
        EmptySpacing(),

        // Text body below this line

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

        //TODO: Should be a function
        new Paragraph({
            style: "classic",
            indent: { left: convertMillimetersToTwip(62.4) },
            text: "Maître XXXXXXX", //variable
          }),
          
        
        CourrierSignature(),
          
      ],
    },
  ],
});

export default doc;
