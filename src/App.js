import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NoMatch from "./pages/NoMatch/NoMatch";
import Annuaire from "./components/Annuaire/Annuaire";
import CustomerQuiz from "./components/checkboxComponents/CustomerQuiz/CustomerQuiz";
import Outils from "./pages/Outils/Outils";
import VenteAppartement from "./components/checkboxComponents/VenteAppartement/VenteAppartement";
import ChecklistSelect from "./components/Checklist/ChecklistSelect/ChecklistSelect";
import EmailDisplay from "./components/EmailGenerator/EmailDisplay/EmailDisplay";
import EmailSelect from "./components/EmailGenerator/EmailSelect/EmailSelect";
import Checklist from "./components/Checklist/Checklist";
import CourrierForm from "./components/CourrierGenerator/CourrierComponent/CourrierForm/CourrierForm";
import "./index.css";

function App() {
  return (
    <div className="">
      <div className="antialiased text-slate-900 bg-white dark:bg-slate-900 dark:text-slate-400">
        <Routes>
          <Route path="/botnot" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="outils" element={<Outils />}>
            <Route path="annuaire" element={<Annuaire />} />
            <Route path="customerquiz" element={<CustomerQuiz />} />
            <Route path="venteAppartement" element={<VenteAppartement />} />
            <Route path="courrierGenerator" element={<CourrierForm />} />
            <Route path="emailGenerator" element={<EmailSelect />} />
            <Route path="emailGenerator/:emailId" element={<EmailDisplay />} />
            <Route path="checklistGenerator" element={<ChecklistSelect />} />
            <Route
              path="checklistGenerator/:checkListId"
              element={<Checklist />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
