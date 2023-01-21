import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NoMatch from "./pages/NoMatch/NoMatch";
import Annuaire from "./components/Annuaire/Annuaire";
import CustomerQuiz from "./components/checkboxComponents/CustomerQuiz/CustomerQuiz";
import Outils from "./pages/Outils/Outils";
import VenteAppartement from "./components/checkboxComponents/VenteAppartement/VenteAppartement";
import EmailGenerator from "./components/EmailGenerator/EmailGenerator";
import GenerateDocs from "./components/CourrierGenerator/GenerateDocs/GenerateDocs";
import CourrierGenerator from "./components/CourrierGenerator/CourrierGenerator";
import ChecklistSelect from "./components/Checklist/ChecklistSelect/ChecklistSelect";
import ChecklistListData from "./components/Checklist/ChecklistData/ChecklistListData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="outils" element={<Outils />}>
          <Route path="annuaire" element={<Annuaire />} />
          <Route path="customerquiz" element={<CustomerQuiz />} />
          <Route path="venteAppartement" element={<VenteAppartement />} />
          <Route path="courrierGenerator" element={<CourrierGenerator />} />
          <Route path="emailGenerator" element={<EmailGenerator />} />
          <Route path="checklistGenerator" element={<ChecklistSelect checklistList={ChecklistListData} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
