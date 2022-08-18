import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import Checkbox from "../components/CustomerQuiz/Checkbox";

 const MockCheckBox = () => {
    return(
        <>
        <Checkbox questionID={"mockID"}/>
        </>
    )
 }

describe("Checkbox component testing", ()=> {
    test("Component should display oui-checkbox", ()=>{
        render(<MockCheckBox/>)
        const ouiElement = screen.getByTestId(/oui-checkbox/i)
        expect(ouiElement).toBeInTheDocument();
    });
    test("Component should display non-checkbox", ()=>{
        render(<MockCheckBox/>)
        const nonElement = screen.getByTestId(/non-checkbox/i)
        expect(nonElement).toBeInTheDocument();
    });
    test("Component should display the right props ID", ()=>{
        render(<MockCheckBox/>)
        const ouiElement = screen.getByTestId(/non-checkbox/i)
        const nonElement = screen.getByTestId(/non-checkbox/i)
        expect(ouiElement.id).toBe("mockID")
        expect(nonElement.id).toBe("mockID")
    });
    test("Oui checkbox should be unchecked by default", ()=>{
        render(<MockCheckBox/>)
        const ouiElement = screen.getByTestId(/oui-checkbox/i)
        expect(ouiElement.checked).toBe(false)
    });
    test("Non checkbox should be unchecked by default", ()=>{
        render(<MockCheckBox/>)
        const nonElement = screen.getByTestId(/non-checkbox/i)
        expect(nonElement.checked).toBe(false)
    });
    test("Oui checkbox value should be true", ()=>{
        render(<MockCheckBox/>)
        const ouiElement = screen.getByTestId(/oui-checkbox/i)
        expect(ouiElement.value).toBe("true")
    });
    test("Non checkbox value should be false", ()=>{
        render(<MockCheckBox/>)
        const nonElement = screen.getByTestId(/non-checkbox/i)
        expect(nonElement.value).toBe("false")
    });
    

})