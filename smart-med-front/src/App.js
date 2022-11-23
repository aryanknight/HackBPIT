import { Route, Routes } from 'react-router-dom';
import './App.css';
import DiagnosePage from './Page/DiagnosePage';
import HomePage from './Page/HomePage';
import RecordPage from './Page/RecordPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/diagnose" element={<DiagnosePage/>} />
      <Route exact path="/records" element={<RecordPage/>} />
    </Routes>
  );
}

export default App;
