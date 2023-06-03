import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("Home page unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    // Assert that the component is rendered
    const redactionHeading = screen.getByText(/La rédaction d'actes/i);
    expect(redactionHeading).toBeInTheDocument();

    const rendueFacileText = screen.getByText(/rendue facile/i);
    expect(rendueFacileText).toBeInTheDocument();

    // Assert that the SVG icon is rendered
    const svgIcon = screen.getByTestId("robot-icon");
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toHaveAttribute("width", "200");
    expect(svgIcon).toHaveAttribute("height", "200");
  });
});
