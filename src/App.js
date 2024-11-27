import React from 'react';
import Cube from './Cube';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorForm from './DoctorForm';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<DoctorForm />} />
        <Route path="/cube" element={<Cube />} />
    </Routes>
  </Router>
  );
}

export default App;
