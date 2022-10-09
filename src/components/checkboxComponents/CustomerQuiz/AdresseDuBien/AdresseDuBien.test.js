import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import AdresseDuBien from "./AdresseDuBien";
import user from "@testing-library/user-event";

const MockComponent = () => {
  const [mockState, setMockState] = useState("");

  return (
    <>
      <AdresseDuBien setState={setMockState} />
      <div>{mockState.bienAdresse}</div>
      <div>{mockState.bienCodePostal}</div>
      <div>{mockState.bienCommune}</div>
    </>
  );
};

describe("DossierName component unit test", () => {
  test("The component should correctly render", () => {
    render(<MockComponent />);
    const inputAdresse = screen.getByPlaceholderText(/adresse/i);
    const inputCodePostal = screen.getByPlaceholderText(/code postal/i);
    const inputCommune = screen.getByPlaceholderText(/Commune/i);
    expect(inputAdresse).toBeInTheDocument();
    expect(inputCodePostal).toBeInTheDocument();
    expect(inputCommune).toBeInTheDocument();
  });
  test("The component should correctly change de mockState", () => {
    render(<MockComponent />);
    const inputAdresse = screen.getByPlaceholderText(/adresse/i);
    const inputCodePostal = screen.getByPlaceholderText(/code postal/i);
    const inputCommune = screen.getByPlaceholderText(/Commune/i);
    user.type(inputAdresse, "200 place de la Mairie");
    user.type(inputCodePostal, "30100");
    user.type(inputCommune, "ALES");
    const stateAdresse = screen.getByText("200 place de la Mairie");
    const stateCodePostal = screen.getByText("30100");
    const stateCommune = screen.getByText("ALES");
    expect(stateAdresse).toBeInTheDocument();
    expect(stateCodePostal).toBeInTheDocument();
    expect(stateCommune).toBeInTheDocument();
  });
});
