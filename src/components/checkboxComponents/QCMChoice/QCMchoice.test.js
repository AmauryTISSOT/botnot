import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import QCMChoice from "./QCMChoice";

    const MockQCMChoice = () => {
        const [choiceState, setChoiceState] = useState("")
        return (
            <>
            <QCMChoice setChoiceState={setChoiceState}/>
            <div>test : {choiceState}</div>
            </>
        );
      };


describe("QCMchoice component unit testing", () => {

  test("The component should render the title", () => {
    render(<MockQCMChoice />);
    const titleElement = screen.getByText(/type de biens vendus/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("The component should render 4 buttons", () => {
    render(<MockQCMChoice />);
    const buttonsElements = screen.getAllByRole("button");
    expect(buttonsElements.length).toBe(4);
  });

  test("Clicking on maison button should change choiceState", () => {
    render(<MockQCMChoice />);
    const buttonMaison = screen.getByRole("button", {name: /maison/i});
    fireEvent.click(buttonMaison)
    const mockDiv = screen.getByText(/test : maison/i)
    expect(mockDiv).toBeInTheDocument();
  });

  test("Clicking on appartement button should change choiceState", () => {
    render(<MockQCMChoice />);
    const buttonAppartement = screen.getByRole("button", {name: /appartement/i});
    fireEvent.click(buttonAppartement)
    const mockDiv = screen.getByText(/test : appartement/i)
    expect(mockDiv).toBeInTheDocument();
  });

  test("Clicking on terrain button should change choiceState", () => {
    render(<MockQCMChoice />);
    const buttonTerrain = screen.getByRole("button", {name: /terrain/i});
    fireEvent.click(buttonTerrain)
    const mockDiv = screen.getByText(/test : terrain/i)
    expect(mockDiv).toBeInTheDocument();
  });

  test("Clicking on autres button should change choiceState", () => {
    render(<MockQCMChoice />);
    const buttonAutres = screen.getByRole("button", {name: /autres/i});
    fireEvent.click(buttonAutres)
    const mockDiv = screen.getByText(/test : autres/i)
    expect(mockDiv).toBeInTheDocument();
  });

  test("Clicking on autres button should render a new DOM with 2 buttons", () => {
    render(<MockQCMChoice />);
    const buttonAutres = screen.getByRole("button", {name: /autres/i});
    fireEvent.click(buttonAutres)
    const buttonsElements = screen.getAllByRole("button");
    expect(buttonsElements.length).toBe(2);
  });

  test("Clicking on autres button should render a new DOM with 2 buttons named : cave & garages", () => {
    render(<MockQCMChoice />);
    const buttonAutres = screen.getByRole("button", {name: /autres/i});
    fireEvent.click(buttonAutres)
    const buttonCave = screen.getByRole("button", {name: /cave/i});
    const buttonGarage = screen.getByRole("button", {name: /garage/i});
    expect(buttonCave).toBeInTheDocument();
    expect(buttonGarage).toBeInTheDocument();
  });


});
