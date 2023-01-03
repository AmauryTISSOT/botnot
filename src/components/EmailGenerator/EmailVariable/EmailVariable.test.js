import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmailVariable from "./EmailVariable";
import userEvent from "@testing-library/user-event";

describe("EmailVariable unit testing", () => {
  test("should render correctly", () => {
    render(<EmailVariable emailValue={"garantie"} />);
    const depotTestId = screen.getByTestId(/depot/i);
    expect(depotTestId).toBeInTheDocument();

    const provisionTestId = screen.getByTestId(/provision/i);
    expect(provisionTestId).toBeInTheDocument();

    const pretTestId = screen.getByTestId("pret");
    expect(pretTestId).toBeInTheDocument();

    const sruTestId = screen.getByTestId("sru");
    expect(sruTestId).toBeInTheDocument();

    const instrumentaireTestId = screen.getByTestId("instrumentaire");
    expect(instrumentaireTestId).toBeInTheDocument();
  });

  test("input should work correctly", () => {
    render(<EmailVariable emailValue={"garantie"} />);

    const depotInput = screen.getByPlaceholderText("0,00 €");
    fireEvent.change(depotInput, { target: { value: "10000" } });
    expect(depotInput.value).toBe("10000");

    const provisionInput = screen.getByPlaceholderText("500,00 €");
    fireEvent.change(provisionInput, { target: { value: "500" } });
    expect(provisionInput.value).toBe("500");

    const pretTestId = screen.getByTestId("pret");
    userEvent.selectOptions(pretTestId, "oui");
    expect(screen.getByTestId("pretOui").selected).toBe(true);
    userEvent.selectOptions(pretTestId, "non");
    expect(screen.getByTestId("pretOui").selected).toBe(false);

    const sruTestId = screen.getByTestId("pret");
    userEvent.selectOptions(sruTestId, "oui");
    expect(screen.getByTestId("pretOui").selected).toBe(true);
    userEvent.selectOptions(sruTestId, "non");
    expect(screen.getByTestId("pretOui").selected).toBe(false);

    const instrumentaireTestId = screen.getByTestId("instrumentaire");
    userEvent.selectOptions(instrumentaireTestId, "oui");
    expect(screen.getByTestId("instrumentaireOui").selected).toBe(true);
    userEvent.selectOptions(instrumentaireTestId, "non");
    expect(screen.getByTestId("instrumentaireOui").selected).toBe(false);
  });
});
