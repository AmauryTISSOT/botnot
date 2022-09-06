import { useState } from 'react';
import './App.css';
import CodeInsee from './components/API/CodeInsee';

function App() {

  const [mockState, setMockState] = useState("")
  console.log(mockState)
  return (
    <CodeInsee setState={setMockState}/>
  );
}

export default App;
