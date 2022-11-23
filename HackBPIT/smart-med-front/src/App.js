import { Route, Routes } from 'react-router-dom';
import './App.css';
import DiagnosePage from './Page/DiagnosePage';
import HomePage from './Page/HomePage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/diagnose" element={<DiagnosePage/>} />
    </Routes>
  );
}

export default App;
