
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CandidateForm from './componentes/CandidatoForm';
import JobForm from './componentes/JobForm';
import InscriptionForm from './componentes/InscricaoForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
      
     
        <Route path="/candidato" element={<CandidateForm/>} />
        <Route path="/vagas" element={<JobForm/>} />
        <Route path="/inscricoes" element={<InscriptionForm/>} />
 
    
    </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
