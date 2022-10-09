import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import CustomerQuiz from "./CustomerQuiz";
import user from "@testing-library/user-event";

describe("CustomerQuiz component unit testing", () => {
  test("Expect oui checkbox element and non checkbox element to be render the same amount of times", () => {
    render(<CustomerQuiz />);
    const ouiCheckboxElement = screen.getAllByTestId(/oui-checkbox/i);
    const nonCheckboxElement = screen.getAllByTestId(/non-checkbox/i);
    expect(ouiCheckboxElement.length).toBe(nonCheckboxElement.length);
  });
  test("Expect all checkbox element to be rendered 28 times", () => {
    render(<CustomerQuiz />);
    const allCheckboxElement = screen.getAllByRole("checkbox");
    expect(allCheckboxElement.length).toBe(76);
  });
});

describe("CustomerQuiz component integration testing", () => {
  test("The submit button should correctly render", () => {
    render(<CustomerQuiz />);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
  });
  test("Clicking the submit button should display the CustomerQuizSummary page", () => {
    render(<CustomerQuiz />);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(buttonElement);
    const summaryElement = screen.getByText(/Situation du terrain/i);
    expect(summaryElement).toBeInTheDocument();
  });
  test("Filling DossierName input should display the input value in CustomerQuizSummary", () => {
    render(<CustomerQuiz />);
    const inputDossierName = screen.getByTestId("dossierNom")
    user.type(inputDossierName, "Vente 123")
    const inputDossierReference = screen.getByTestId("dossierNom")
    user.type(inputDossierReference, "201")
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(buttonElement);
    const dossierNameSummary = screen.getByText(/vente 123/i);
    expect(dossierNameSummary).toBeInTheDocument();
    const dossierReferenceSummary = screen.getByText(/201/i);
    expect(dossierReferenceSummary).toBeInTheDocument();
  });
  test("Filling ClientName input should display the input value in CustomerQuizSummary", () => {
    render(<CustomerQuiz />);
    const inputClientName = screen.getByTestId("clientNom")
    user.type(inputClientName, "Doe")
    const inputClientPrenom = screen.getByTestId("clientPrenom")
    user.type(inputClientPrenom, "John")
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(buttonElement);
    const dossierNameSummary = screen.getByText(/Doe/i);
    expect(dossierNameSummary).toBeInTheDocument();
    const dossierPrenomSummary = screen.getByText(/John/i);
    expect(dossierPrenomSummary).toBeInTheDocument();
  });
  test("Filling AdresseDuBien input should display the input value in CustomerQuizSummary", () => {
    render(<CustomerQuiz />);
    const inputAdresse = screen.getByTestId("bienAdresse")
    user.type(inputAdresse, "200 chemin du temple")
    const inputCodePostal = screen.getByTestId("bienCodePostal")
    user.type(inputCodePostal, "30100")
    const inputCommune = screen.getByTestId("bienCommune")
    user.type(inputCommune, "ALES")
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(buttonElement);
    const adresseSummary = screen.getByText(/200 chemin du temple/i);
    expect(adresseSummary).toBeInTheDocument();
    const codePostalSummary = screen.getByText(/30100/i);
    expect(codePostalSummary).toBeInTheDocument();
    const communeSummary = screen.getByText(/ALES/i);
    expect(communeSummary).toBeInTheDocument();
  });

});
