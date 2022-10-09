import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Outils from "./Outils";
import "@testing-library/jest-dom";


describe("Outils unit testing", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <Outils />
      </MemoryRouter>
    );
    const testIdElement = screen.getByTestId(/outils/i);
    expect(testIdElement).toBeInTheDocument();
  });
});
