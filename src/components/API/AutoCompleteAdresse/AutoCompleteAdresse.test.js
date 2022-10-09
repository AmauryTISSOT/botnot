import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import AutoCompleteAdresse from "./AutoCompleteAdresse";
import user from "@testing-library/user-event";

const MockComponent = () => {
  const [mockState, setMockState] = useState("");

  return (
    <>
      <AutoCompleteAdresse setState={setMockState} />
      <div data-testid="stateDiv">adresse : {mockState.adresseName}</div>
    </>
  );
};

describe("AutoCompleteAdresse component unit test", () => {
  test("should render correctly", () => {
    render(<AutoCompleteAdresse />);
    const adresseElement = screen.getByText(/adresse/i);
    const codePostalElement = screen.getByText(/code postal/i);
    const villeElement = screen.getByText(/ville/i);
    expect(adresseElement).toBeInTheDocument();
    expect(codePostalElement).toBeInTheDocument();
    expect(villeElement).toBeInTheDocument();
  });

  test("should correctly display api values", async () => {
    render(<AutoCompleteAdresse />);
    const inputAdresse = screen.getByPlaceholderText(
      /Indiquer l'adresse ici.../i
    );
    await user.type(inputAdresse, "55 de la rue du Faubourg-Saint-Honoré", {
      delay: 100,
    });
    const valueElement = await screen.findByText(
      /55 Rue du Faubourg Saint-Honoré 75008 Paris/i
    );
    expect(valueElement).toBeInTheDocument();
  }, 10000);

  test("clicking on submit button should correctly send data to state", async () => {
    render(<MockComponent />);
    const inputAdresse = screen.getByPlaceholderText(
      /Indiquer l'adresse ici.../i
    );
    await user.type(inputAdresse, "55 de la rue du Faubourg-Saint-Honoré", {
      delay: 50,
    });
    const valueElement = await screen.findByText(
      "55 Rue du Faubourg Saint-Honoré 75008 Paris"
    );
    fireEvent.click(valueElement);
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    const stateValue = screen.getByText(/adresse : 55 /i);
    expect(stateValue).toBeInTheDocument();
  }, 10000);
});
