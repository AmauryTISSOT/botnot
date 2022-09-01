import React, { useState } from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import AutoCompleteAdresse from "../components/API/AutoCompleteAdresse";
import user from "@testing-library/user-event";

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

  test("input value should correctly display", () => {
    render(<AutoCompleteAdresse />);
    const inputAdresse = screen.getByPlaceholderText(/Indiquer l'adresse ici.../i)
    user.type(inputAdresse, "55 de la rue du Faubourg-Saint-Honoré")
    const valueElement = screen.getByText(/55 de la rue du Faubourg-Saint-Honoré/i)
    screen.debug()
    expect(valueElement).toBeInTheDocument();
  });
});
