import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import CheckBoxRendering from "../components/checkboxComponents/CheckBoxRendering";

describe("CheckBoxRendering component testing", () => {

  test("The component should not render the heading by default", () => {
    render(<CheckBoxRendering />);
    const titleElement = screen.queryByText(/questionnaire vente/i);
    expect(titleElement).not.toBeInTheDocument();
  });

  test("The component should render the heading when maison button is clicked", () => {
    render(<CheckBoxRendering />);
    const maisonButton = screen.getByRole("button", { name: /maison/i });
    fireEvent.click(maisonButton);
    const titleElement = screen.getByText(/questionnaire vente maison/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("The component should not render QCMDisplay component when maison button is clicked", () => {
    render(<CheckBoxRendering />);
    const maisonButton = screen.queryByRole("button", { name: /maison/i });
    fireEvent.click(maisonButton);
    expect(maisonButton).not.toBeInTheDocument();
  });

});
