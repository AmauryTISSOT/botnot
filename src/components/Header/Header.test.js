import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";


describe("Header unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const accueilElement = screen.getByText(/accueil/i);
    expect(accueilElement).toBeInTheDocument();

    const outilsElement = screen.getByText(/outils/i);
    expect(outilsElement).toBeInTheDocument();

    const aproposElement = screen.getByText(/a propos/i);
    expect(aproposElement).toBeInTheDocument();

    const logoElement = screen.getByText(/botnot/i);
    expect(logoElement).toBeInTheDocument()
  });
});
