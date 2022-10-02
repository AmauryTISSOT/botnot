import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Header from "./Header";

//TODO: rewrite this test

describe("Header unit testing", () => {
  test.skip("should render correctly", () => {
    render(<Header />);
    const accueilElement = screen.getByText(/accueil/i);
    expect(accueilElement).toBeInTheDocument();

    const outilsElement = screen.getByText(/outils/i);
    expect(outilsElement).toBeInTheDocument();

    const aproposElement = screen.getByText(/a propos/i);
    expect(aproposElement).toBeInTheDocument();

    const logoElement = screen.getByText(/logo/i);
    expect(logoElement).toBeInTheDocument()
  });
});
