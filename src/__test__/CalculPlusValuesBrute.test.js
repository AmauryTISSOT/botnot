import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import CalculPlusValuesBrute from "../components/PlusValues/CalculPlusValuesBrute";

describe("CalculPlusValues unit test", () => {
  test("should render correctly", () => {
    render(<CalculPlusValuesBrute />);

    const prixDeVenteElement = screen.getByLabelText(
      /Prix de vente ou Indemnité d'expropriation/i
    );
    expect(prixDeVenteElement).toBeInTheDocument();

    const fraisVendeurElement = screen.getByLabelText(
      /Frais et taxes supportés lors de la cession/i
    );
    expect(fraisVendeurElement).toBeInTheDocument();

    const prixAcquisitionElement = screen.getByLabelText(
      /Prix d'acquisition ou valeur vénale/i
    );
    expect(prixAcquisitionElement).toBeInTheDocument();

    const fraisAcquisitionElement = screen.getByLabelText(
      /Frais d'acquisition :/i
    );
    expect(fraisAcquisitionElement).toBeInTheDocument();

    const forfait75Element = screen.getByLabelText(
      /acquisition à titre onereux/i
    );
    expect(forfait75Element).toBeInTheDocument();

    const acquisitionTitreGratuitElement = screen.getByLabelText(
      /acquisition à titre gratuit/i
    );
    expect(acquisitionTitreGratuitElement).toBeInTheDocument();

    const travauxElement = screen.getByLabelText(
      /(par défaut 15% du prix d'acquisition ou au réel)/i
    );
    expect(travauxElement).toBeInTheDocument();

    const voirieElement = screen.getByLabelText(/Cotisations de voirie/i);
    expect(voirieElement).toBeInTheDocument();

    const radioInput = screen.getAllByRole("radio");
    expect(radioInput).toHaveLength(2);
  });

  test('radio button "forfait 7.5%" should be checked by default', () => {
    render(<CalculPlusValuesBrute />);
    const radioForfaitElement = screen.getByTestId("forfait7.5");
    expect(radioForfaitElement.checked).toBe(true);
  });

  test('radio button "acquisition titre gratuit" should not be checked by default', () => {
    render(<CalculPlusValuesBrute />);
    const radioAcquisitionGratuitElement = screen.getByTestId(
      "acquisitionTitreGratuit"
    );
    expect(radioAcquisitionGratuitElement.checked).toBe(false);
  });

  test('clicking on radio button "acquisition titre gratuit" should unchecked the other radio button', async () => {
    render(<CalculPlusValuesBrute />);
    const radioAcquisitionGratuitElement = screen.getByTestId(
      "acquisitionTitreGratuit"
    );
    await user.click(radioAcquisitionGratuitElement);
    expect(radioAcquisitionGratuitElement.checked).toBe(true);

    const radioForfaitElement = screen.getByTestId("forfait7.5");
    expect(radioForfaitElement.checked).toBe(false);
  });

  test("the component should display the right value", async () => {
    render(<CalculPlusValuesBrute />);

    const prixDeVenteInput = screen.getByTestId("prixVente");
    await user.type(prixDeVenteInput, "100000");

    const fraisVendeurInput = screen.getByTestId("fraisVendeur");
    await user.type(fraisVendeurInput, "8000");

    const prixAcquisitionInput = screen.getByTestId("prixAcquisition");
    await user.type(prixAcquisitionInput, "50000");

    const plusValueBruteElement = screen.getByTestId(/plusValueBrute/i);
    expect(plusValueBruteElement).toHaveTextContent("30750");
  });
});
