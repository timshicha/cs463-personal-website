import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import PreviousWork from './pages/PreviousWork';
import Projects from './pages/Projects';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AboutMe />} />
        <Route path="/previous-work" element={<PreviousWork />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
