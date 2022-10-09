import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import DossierName from "./DossierName";
import user from "@testing-library/user-event";

const MockComponent = () => {
  const [mockState, setMockState] = useState("");

  return (
    <>
      <DossierName setState={setMockState} />
      <div>{mockState.dossierNom}</div>
      <div>{mockState.dossierReference}</div>
    </>
  );
};

describe("DossierName component unit test", () => {
  test("The component should correctly render", () => {
    render(<MockComponent />);
    const inputNomElement = screen.getByPlaceholderText(/nom/i);
    const inputReferenceElement = screen.getByPlaceholderText(/référence/i);
    expect(inputNomElement).toBeInTheDocument();
    expect(inputReferenceElement).toBeInTheDocument();
  });
  test("The component should correctly change de mockState", () => {
    render(<MockComponent />);
    const inputNomElement = screen.getByPlaceholderText(/nom/i);
    const inputReferenceElement = screen.getByPlaceholderText(/référence/i);
    user.type(inputNomElement, "Vente PAUL / DUPONT");
    user.type(inputReferenceElement, "201");
    const stateNom = screen.getByText("Vente PAUL / DUPONT");
    const stateReference = screen.getByText("201");
    expect(stateNom).toBeInTheDocument();
    expect(stateReference).toBeInTheDocument();
  });
});
