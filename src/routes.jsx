import React, { HashRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import PreviousWork from './pages/PreviousWork';
import Projects from './pages/Projects';

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/previous-work" element={<PreviousWork />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
