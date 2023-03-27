import { Packer } from "docx";
import { saveAs } from "file-saver";
import { Document } from "docx";
import CourrierBoilerplate from "../CourrierComponent/CourrierBoilerplate";
import courrierListData from "../CourrierComponent/CourrierData/CourrierListData";

const GenerateDocs = async (
  postalType = "à compléter",
  courrierValue = "",
  courrierSelected = "",
  bienImmo = "",
  etatCivil = ""
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
        array[i].textRun = bienImmo.address.rawAddress;
      }
    }
  };

  const findIndexWithNomVendeur = (array) => {
    let vendeurSex = "M.";
    if (etatCivil.sex === "female") {
      vendeurSex = "Mme";
    }
    let nomVendeurString = `${vendeurSex} ${etatCivil.name[0]} ${etatCivil.birthName}`;
    for (let i = 0; i < array.length; i++) {
      if (array[i].textRun === "nomVendeur") {
        array[i].textRun = nomVendeurString;
      }
    }
  };

  console.log("courrierSelected:", courrierSelected);
  findIndexWithAddress(courrierSelected);
  findIndexWithNomVendeur(courrierSelected);

  // generate docx files
  const doc = new Document(
    await CourrierBoilerplate(
      postalType,
      clerkName,
      clerkEmail,
      courrierValue,
      notaryName,
      courrierSelected,
      bienImmo //TODO: should handle other data ex: etat civil
    )
  );

  Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, `${getCourrierObject(courrierValue)}.docx`);
    console.log("Document created successfully");
  });
};

export default GenerateDocs;
