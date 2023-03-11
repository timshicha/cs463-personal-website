import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
