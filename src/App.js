import { useState } from "react";
import "./App.css";
import DateInput from "./components/PlusValues/DateInput";

function App() {
  const [mockState, setMockState] = useState("");

  return (
    <>
      <DateInput setState={setMockState} />
      <div>{mockState.dateAcquisition}</div>
      <div>{mockState.dateVente}</div>
    </>
  );
}

export default App;
