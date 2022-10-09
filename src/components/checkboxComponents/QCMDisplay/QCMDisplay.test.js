import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import QCMDisplay from "./QCMDisplay";
import { MockData } from "../../../data";

const MockQCMDisplay = () => {
  const mockData = MockData;
  const [dataState, setDataState] = useState({});

  return (
    <QCMDisplay
      QCMObject={mockData}
      dataState={dataState}
      setDataState={setDataState}
    />
  );
};

describe("QCMDisplay unit test", () => {
  test("Component should display question title", () => {
    render(<MockQCMDisplay />);
    const titleElement = screen.getByText(/mockQuiz1/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("Component should display keystone question", () => {
    render(<MockQCMDisplay />);
    const keystoneElement = screen.getAllByText(/question : keystone/i);
    expect(keystoneElement.length).toBe(2);
  });

  test("Component should display oui checkbox", () => {
    render(<MockQCMDisplay />);
    const ouiCheckBoxElement = screen.getByTestId("oui-checkbox-keystoneId");
    expect(ouiCheckBoxElement).toBeInTheDocument();
  });

  test("Component should display non checkbox", () => {
    render(<MockQCMDisplay />);
    const nonCheckBoxElement = screen.getByTestId("non-checkbox-keystoneId");
    expect(nonCheckBoxElement).toBeInTheDocument();
  });

  test("Component should not display root true question", () => {
    render(<MockQCMDisplay />);
    const rootTrueElement = screen.queryByText(/question : rootTrueID/i);
    expect(rootTrueElement).not.toBeInTheDocument();
  });

  test("Component should not display root false question", () => {
    render(<MockQCMDisplay />);
    const rootFalseElement = screen.queryByText(/question : rootFalseID/i);
    expect(rootFalseElement).not.toBeInTheDocument();
  });

  test("Component should not display tree true question", () => {
    render(<MockQCMDisplay />);
    const treeTrueElement = screen.queryByText(/question : treeTrueID/i);
    expect(treeTrueElement).not.toBeInTheDocument();
  });

  test("Component should not display tree false question", () => {
    render(<MockQCMDisplay />);
    const treeFalseElement = screen.queryByText(/question : treeFalseID/i);
    expect(treeFalseElement).not.toBeInTheDocument();
  });
});

describe("QCMDisplay integration test", () => {
  
  test("Component should display tree true question on click", async () => {
    render(<MockQCMDisplay />);
    const ouiCheckBoxElement1 = screen.getByTestId("oui-checkbox-keystoneId");
    fireEvent.click(ouiCheckBoxElement1);
    const ouiCheckBoxElement2 = screen.getByTestId("oui-checkbox-keystoneId2");
    fireEvent.click(ouiCheckBoxElement2);
    const ouiCheckBoxRootTrueElement = screen.getByTestId("oui-checkbox-rootTrueId");
    fireEvent.click(ouiCheckBoxRootTrueElement)
    const treeTrueElement = await screen.findByText(/question : treeTrueID/i);
    expect(treeTrueElement).toBeInTheDocument();
  });
  
  
  test("Component should display root true question on click", async () => {
    render(<MockQCMDisplay />);
    const ouiCheckBoxElement = screen.getByTestId("oui-checkbox-keystoneId");
    fireEvent.click(ouiCheckBoxElement);
    const rootTrueElement = await screen.findByText(/question : rootTrueID/i);
    expect(rootTrueElement).toBeInTheDocument();
  });
  
  test("Component should display root false question on click", async () => {
    render(<MockQCMDisplay />);
    const nonCheckBoxElement = screen.getByTestId("non-checkbox-keystoneId");
    fireEvent.click(nonCheckBoxElement);
    const rootFalseElement = await screen.findByText(/question : rootFalseID/i);
    expect(rootFalseElement).toBeInTheDocument();
  });

  // This test work when it is executed alone
  test.skip("Component should display tree false question on click", async () => {
    render(<MockQCMDisplay />);
    const nonCheckBoxElement = screen.getByTestId("non-checkbox-keystoneId");
    fireEvent.click(nonCheckBoxElement);
    const ouiCheckBoxElement2 = screen.getByTestId("oui-checkbox-keystoneId2");
    fireEvent.click(ouiCheckBoxElement2);
    const ouiCheckBoxRootFalseElement = screen.getByTestId("oui-checkbox-rootFalseId");
    fireEvent.click(ouiCheckBoxRootFalseElement)
    const treeFalseElement = await screen.findByText(/question : treeFalseID/i);
    expect(treeFalseElement).toBeInTheDocument();
  });
  
});

//TODO: display root true question
//TODO: display root false question
//TODO: display tree true question
//TODO: display tree false question
//TODO: display multiple root true question
//TODO: display multiple root false question
//TODO: display multiple tree true question
//TODO: display multiple tree false question
//TODO: display next question
