import { Document } from "docx";

import CourrierBoilerplate from "./CourrierComponent/CourrierBoilerplate";

const doc = new Document(
  CourrierBoilerplate(
    "adresse",
    "nom du clerc",
    "mail du clerc",
    "objet du courrier",
    "XXXXX",
    [{ text: "text du body" }]
  )
);

export default doc;
