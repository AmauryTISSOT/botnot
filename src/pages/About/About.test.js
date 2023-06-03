import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";
import { MemoryRouter } from "react-router-dom";

describe("About page unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    // Assert that the component is rendered
    const headingElement = screen.getAllByText(/A propos/i);
    expect(headingElement).toHaveLength(2);

    const authorElement = screen.getByText(/Réalisé par Amaury Tissot/i);
    expect(authorElement).toBeInTheDocument();

    const appUsageElement = screen.getByText(
      /Application à usage strictement personnel/i
    );
    expect(appUsageElement).toBeInTheDocument();

    const linkElement = screen.getByTestId("github-link");
    expect(linkElement).toBeInTheDocument();
  });
  test("link opens in a new tab", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    // Assert that the link has the correct target and rel attributes
    const linkElement = screen.getByTestId("github-link");
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noreferrer");
  });
});
