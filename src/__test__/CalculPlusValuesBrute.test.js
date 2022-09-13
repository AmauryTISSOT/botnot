import CalculPlusValuesBrute from "../components/PlusValues/CalculPlusValuesBrute";
import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional

describe("CalculPlusValues unit test", () => {
  test("should render correctly", () => {
    render(<CalculPlusValuesBrute />);

    const prixDeVenteElement = screen.getByLabelText(
      /Prix de vente ou Indemnité d'expropriation/i
    );
    expect(prixDeVenteElement).toBeInTheDocument()

    const fraisVendeurElement = screen.getByLabelText(
      /Frais et taxes supportés lors de la cession/i
    );
    expect(fraisVendeurElement).toBeInTheDocument()

    const prixAcquisitionElement = screen.getByLabelText(
      /Prix d'acquisition ou valeur vénale/i
    );
    expect(prixAcquisitionElement).toBeInTheDocument()

    const fraisAcquisitionElement = screen.getByLabelText(
      /Frais d'acquisition :/i
    );
    expect(fraisAcquisitionElement).toBeInTheDocument()

    const forfait75Element = screen.getByLabelText(
      /acquisition à titre onereux/i
    );
    expect(forfait75Element).toBeInTheDocument()

    const acquisitionTitreGratuitElement = screen.getByLabelText(
      /acquisition à titre gratuit/i
    );
    expect(acquisitionTitreGratuitElement).toBeInTheDocument()
    
    const travauxElement = screen.getByLabelText(
      /(par défaut 15% du prix d'acquisition ou au réel)/i
    );
    expect(travauxElement).toBeInTheDocument()

    const voirieElement = screen.getByLabelText(
      /Cotisations de voirie/i
    );
    expect(voirieElement).toBeInTheDocument()

    const radioInput = screen.getAllByRole("radio")
    expect(radioInput).toHaveLength(2)
  });
});
