import { Document, Paragraph, TextRun, Header, Footer, Spacing } from "docx";
import CourrierAdresse from "./CourrierComponent/CourrierAdresse";
import CourrierDate from "./CourrierComponent/CourrierDate";
import { convertMillimetersToTwip } from "docx";
import MiseEnPage from "./CourrierComponent/MiseEnPage";
import EmptySpacing from "./CourrierComponent/EmptySpacing";
import FollowedBy from "./CourrierComponent/FollowedBy";
import ClerkMail from "./CourrierComponent/ClerckMail";
import CourrierObjet from "./CourrierComponent/CourrierObjet";

const doc = new Document({
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
          children: [
            new TextRun({
              text: "Dossier suivi par :",
              font: "Calibri",
              size: 22,
            }),
          ],
        }),
        FollowedBy("Amaury Tissot"),
        ClerkMail("email@paris.notaires.fr"),
        CourrierObjet("TEST OBJET"),
        EmptySpacing(),
        EmptySpacing(),
      ],
    },
  ],
});

export default doc;
