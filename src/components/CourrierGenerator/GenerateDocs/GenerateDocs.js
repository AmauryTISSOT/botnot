import React from "react";
import { Packer } from "docx";
import { saveAs } from "file-saver";
import doc from "../Example"
import CourrierForm from "../CourrierComponent/CourrierForm/CourrierForm";

const GenerateDocs = () => {

  const generate = () => {
    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };

  return (
    <>
      <CourrierForm/>
      <button onClick={generate}>Générer</button>
    </>
  );
};

export default GenerateDocs;
