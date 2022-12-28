import React from "react";
import { fireEvent, render, screen, createEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmailVariable from "./EmailVariable";

describe("EmailVariable unit testing", () => {
  test("should render correctly", () => {
    render(<EmailVariable />);
    const depotText = screen.getByTestId(/depot/i);
    expect(depotText).toBeInTheDocument();

    const provisionText = screen.getByTestId(/provision/i);
    expect(provisionText).toBeInTheDocument();
  });

  test("input should work correctly", () => {
    render(<EmailVariable />);

    const depotInput = screen.getByPlaceholderText("0,00 €");
    fireEvent.change(depotInput, { target: { value: "10000" } });
    expect(depotInput.value).toBe("10000");

    const provisionInput = screen.getByPlaceholderText("500,00 €");
    fireEvent.change(provisionInput, { target: { value: "500" } });
    expect(provisionInput.value).toBe("500");
  });
});
