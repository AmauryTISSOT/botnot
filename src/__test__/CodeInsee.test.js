import React, { useState } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // optional
import CodeInsee from "../components/API/CodeInsee";
import user from "@testing-library/user-event";


const MockComponent = () => {

    const [mockState, setMockState] = useState("")

    return (
        <>
        <CodeInsee codePostal={30430}/>
        </>
    )
}


describe("CodeInsee component unit testing", () => {
    test("The component should correctly return the dataAPI", async () =>{
      render(<MockComponent/>)
      await waitFor(()=> {
        screen.getByText(/BRJAC/i)
      })
    })
    
})