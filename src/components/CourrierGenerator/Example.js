import {
  Document,
  Table,
  TableRow,
  TableCell,
  Paragraph,
  ShadingType,
  TextRun,
} from "docx";

import CourrierBoilerplate from "./CourrierComponent/CourrierBoilerplate";
import CourrierTable from "./CourrierComponent/CourrierTable";
import { demandeCU, DTH } from "./CourrierComponent/CourrierData/CourrierData";
const mockData = [

  {
    // prefixe: "001",
    section: "AZ",
    numero: "206",
    lieudit: "LE BOIS",
    surface: "00ha 01ca 23a",
  }
]
 ;

const table = CourrierTable(mockData);

const doc = new Document(
  CourrierBoilerplate(
    "adresse",
    "nom du clerc",
    "mail du clerc",
    "objet du courrier",
    "XXXXX",
    demandeCU,
    mockData
  )
  // {
  //   sections: [
  //     {
  //       children: [table],
  //     },
  //   ],
  // }
);

export default doc;
