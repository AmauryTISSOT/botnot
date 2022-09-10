import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import user from "@testing-library/user-event";
import DateInput from "../components/PlusValues/DateInput";

const MockRender = () => {
  const [mockState, setMockState] = useState("");
  return (
    <>
      <DateInput setState={setMockState} />
      <div>{mockState.dateAcquisition}</div>
      <div>{mockState.dateVente}</div>
    </>
  );
};

describe("DateInput unit testing", () => {
  test("should render correctly", () => {
    render(<DateInput />);
    const dateAcquisitionElement = screen.getByLabelText(
      /Entrez la date d'acquisition/i
    );
    expect(dateAcquisitionElement).toBeInTheDocument();

    const dateVenteElement = screen.getByLabelText(
      /Entrez la date de vente prévue/i
    );
    expect(dateVenteElement).toBeInTheDocument();
  });
  test("should setState parent component", () => {
    render(<MockRender />);
    const dateAcquisitionElement = screen.getByTestId(
      "dateAcquisition"
    );
    user.type(dateAcquisitionElement, "2000-01-01");
    const stateDateAcquisitionElement = screen.getByText("2000-01-01");
    expect(stateDateAcquisitionElement).toBeInTheDocument();

    const dateVenteElement = screen.getByTestId(
      /dateVente/i
    );
    user.type(dateVenteElement, "2020-01-01");
    const stateDateVenteElement = screen.getByText("2020-01-01");
    expect(stateDateVenteElement).toBeInTheDocument();
  });
});
