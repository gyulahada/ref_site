import React from 'react';
import { HashRouter as HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeroesPage from './pages/HeroesPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HeroesPage" element={<HeroesPage />} />
      </Routes>
    </HashRouter>
  );
}
