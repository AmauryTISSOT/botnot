import { Packer } from "docx";
import { saveAs } from "file-saver";
import { Document } from "docx";
import CourrierBoilerplate from "../CourrierComponent/CourrierBoilerplate";
import courrierListData from "../CourrierComponent/CourrierData/CourrierListData";

const GenerateDocs = (
  postalAddress = "à compléter",
  courrierValue = "",
  courrierSelected = "",
  clientObject = ""
) => {
  const courrierConstant = {
    clerkName: "Amaury TISSOT",
    clerkEmail: "amaury.tissot.75329@paris.notaires.fr",
    notaryName: "Thomas MESA-SPARBE",
  };

  // destructuring courrierConstant
  const { clerkName, clerkEmail, notaryName } = courrierConstant;

  // get the "courrier objet" in the courrierListData
  const getCourrierObject = (value) => {
    for (let i = 0; i < courrierListData.length; i++) {
      for (let j = 0; j < courrierListData[i].query.length; j++) {
        // Check if the value of the current index of the query array is equal to the value argument
        if (courrierListData[i].query[j].value === value) {
          return courrierListData[i].query[j].question;
        }
      }
    }
  };

  const findIndexWithAddress = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].textRun === "adresseBien") {
        console.log("i:", i);
        console.log("array i", array[i]);
        console.log("clientObject", clientObject)
        array[i].textRun = clientObject.address.rawAddress
      }
    }
  };

  console.log("courrierSelected:", courrierSelected);
  findIndexWithAddress(courrierSelected);

  // generate docx files
  const doc = new Document(
    CourrierBoilerplate(
      postalAddress,
      clerkName,
      clerkEmail,
      getCourrierObject(courrierValue),
      notaryName,
      courrierSelected,
      clientObject.cadastre  //TODO: passer le .cadastre au niveau inférieur + voir pour handle d'autres data ex: etat civil
    )
  );

  Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, `${getCourrierObject(courrierValue)}.docx`);
    console.log("Document created successfully");
  });
};

export default GenerateDocs;
