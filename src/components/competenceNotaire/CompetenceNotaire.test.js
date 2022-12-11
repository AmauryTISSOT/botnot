import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CompetenceNotaire from "./CompetenceNotaire";

describe('competenceNotaire unit testing', () => { 

    test('should first render correctly', () => { 
        render(<CompetenceNotaire/>)
        const inputRadioElement = screen.getAllByRole("radio")
        expect(inputRadioElement).toHaveLength(2)

        const selectFormElement = screen.getAllByRole('combobox')
        expect(selectFormElement).toHaveLength(2)
     });

 })