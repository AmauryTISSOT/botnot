import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import OrganismeApi from "./OrganismeApi";

const mockState = {
  communeInfo: {
    codeCommune: 30100,
  },
};

describe("OrganismeApi unit testing", () => {
  test("should render correctly", async () => {
    render(<OrganismeApi state={mockState} />);

    const mairieElement = await screen.findAllByText(/mairie/i);
    expect(mairieElement).toHaveLength(2);

    const courAppelElement = await screen.findAllByText(/cour d'appel/i);
    expect(courAppelElement).toHaveLength(3);

    const hypothequeElement = await screen.findAllByText(/SPF/i);
    expect(hypothequeElement).toHaveLength(2);

    const impotEntrepriseElement = await screen.findAllByText(/entreprise/i);
    expect(impotEntrepriseElement).toHaveLength(1);

    const impotParticulierElement = await screen.findAllByText(/particuliers/i);
    expect(impotParticulierElement).toHaveLength(1);

    const tribunalEnfantElement = await screen.findAllByText(/enfant/i);
    expect(tribunalEnfantElement).toHaveLength(1);

    const tribunalJudiciaireElement = await screen.findAllByText(/judiciaire/i);
    expect(tribunalJudiciaireElement).toHaveLength(2);

    const prefectureElement = await screen.findAllByText(/préfecture/i, {
      duration: 200,
    });
    expect(prefectureElement).toHaveLength(2);
  });
  test("should not render mailto:", async () => {
    render(<OrganismeApi state={mockState} />);

    const emailElement = await screen.findAllByText(/email/i)
    expect(emailElement).toHaveLength(1)
    const mailtoElement = screen.queryByText(/mailto:/i);
    expect(mailtoElement).not.toBeInTheDocument();
  });
});
