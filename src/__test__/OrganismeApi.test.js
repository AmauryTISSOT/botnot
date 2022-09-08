import React from "react";
import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
// import user from "@testing-library/user-event";
import OrganismeApi from "../components/API/OrganismeApi";

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
    expect(courAppelElement).toHaveLength(1);

    const hypothequeElement = await screen.findAllByText(/SPF/i);
    expect(hypothequeElement).toHaveLength(2);

    const impotEntrepriseElement = await screen.findAllByText(/entreprise/i);
    expect(impotEntrepriseElement).toHaveLength(1);

    const impotParticulierElement = await screen.findAllByText(/particuliers/i);
    expect(impotParticulierElement).toHaveLength(1);

    const tribunalEnfantElement = await screen.findAllByText(/enfant/i);
    expect(tribunalEnfantElement).toHaveLength(1);

    const tribunalJudiciaireElement = await screen.findAllByText(/judiciaire/i);
    expect(tribunalJudiciaireElement).toHaveLength(1);

    const prefectureElement = await screen.findAllByText(/préfecture/i);
    expect(prefectureElement).toHaveLength(2);
  });
});
