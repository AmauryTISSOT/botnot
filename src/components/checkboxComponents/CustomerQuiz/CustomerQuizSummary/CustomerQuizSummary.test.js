import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import CustomerQuizSummary from "./CustomerQuizSummary";

describe("CustomerQuizSummary component test", () => {
  test("Should correctly render the right answer when dataState value = true", () => {
    const mockDataState = { situationTerrainLotissement: "true" };
    render(<CustomerQuizSummary dataState={mockDataState} />);
    const answerElement = screen.getByText("Le bien dépend d'un lotissement");
    expect(answerElement).toBeInTheDocument();
  });
  test("Should not render the right answer when dataState value = false", () => {
    const mockDataState = { situationTerrainLotissement: "false" };
    render(<CustomerQuizSummary dataState={mockDataState} />);
    const answerElement = screen.queryByText("Le bien dépend d'un lotissement");
    expect(answerElement).not.toBeInTheDocument();
  });
  test("Should correctly render several answer", () => {
    const mockDataState = {
      situationTerrainLotissement: "true",
      situationTerrainAssociationSyndicale: "true",
      situationTerrainCoproHorizontale: "false",
    };
    render(<CustomerQuizSummary dataState={mockDataState} />);
    const answerElement1 = screen.getByText("Le bien dépend d'un lotissement");
    const answerElement2 = screen.getByText(
      "Il existe une association syndicale"
    );
    const answerElement3 = screen.queryByText(
      "Le bien dépend d'une copropriété horizontale"
    );
    expect(answerElement1).toBeInTheDocument();
    expect(answerElement2).toBeInTheDocument();
    expect(answerElement3).not.toBeInTheDocument();
  });
  test("Should correctly render the text area", () => {
    const mockDataState = {
      situationTerrainLotissement: "false",
      situationTerrainAssociationSyndicale: "false",
      situationTerrainCoproHorizontale: "false",
      situationTerrainCoproHorizontaleNomSyndic: "mockTextArea",
    };
    render(<CustomerQuizSummary dataState={mockDataState} />);
    const answerElement = screen.getByText(/mockTextArea/i);
    expect(answerElement).toBeInTheDocument();
  });
});
