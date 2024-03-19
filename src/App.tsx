import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginDashboard from './components/LoginDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
