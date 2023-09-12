import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeroesPage from './pages/HeroesPage';

export default function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HeroesPage" element={<HeroesPage />} />
        </Routes>
      </Router>
  );
}
