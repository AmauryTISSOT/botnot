import React, { useState } from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import ClientName from "../components/CustomerQuiz/ClientName";
import user from "@testing-library/user-event";

const MockComponent = () => {
  const [mockState, setMockState] = useState("");

  return (
    <>
      <ClientName setState={setMockState} />
      <div>{mockState.clientNom}</div>
      <div>{mockState.clientPrenom}</div>
    </>
  );
};

describe("ClientName component unit test", () => {
  test("The component should correctly render", () => {
    render(<MockComponent />);
    const inputNomElement = screen.getByPlaceholderText("Nom");
    const inputPrenomElement = screen.getByPlaceholderText("Prénom(s)");
    expect(inputNomElement).toBeInTheDocument();
    expect(inputPrenomElement).toBeInTheDocument();
  });
  test("The component should correctly change de mockState", () => {
    render(<MockComponent />);
    const inputNomElement = screen.getByPlaceholderText("Nom");
    const inputPrenomElement = screen.getByPlaceholderText("Prénom(s)");
    user.type(inputNomElement, "Doe");
    user.type(inputPrenomElement, "John");
    const stateNom = screen.getByText("Doe");
    const statePrenom = screen.getByText("John");
    expect(stateNom).toBeInTheDocument();
    expect(statePrenom).toBeInTheDocument();
  });
});
