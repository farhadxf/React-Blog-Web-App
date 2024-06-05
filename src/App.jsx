import { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import PageHeader from './components/Header/PageHeader';
import PageFooter from './components/Footer/PageFooter';

import Home from './pages/Home/Home';
import About from './pages/About/About';
// import AboutFarhad from './pages/AboutFarhad/AboutFarhad';
import TechHome from './pages/Tech/TechComponents/TechHome';
import SpaceHome from './pages/Space/SpaceComponents/SpaceHome';
import BeyondHome from './pages/WellnessAndBeyond/BeyondComponents/BeyondHome';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';

//Tech Pages
import TechPage1 from './pages/Tech/TechPage1';

//Space Pages
import SpacePage1 from './pages/Space/SpacePage1';
import BeyondPage1 from './pages/WellnessAndBeyond/BeyondPage1';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light'));
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save preference to local storage
  };

  return (
    <BrowserRouter>
      <div className={`app-container ${theme}`}>
        {<Navbar theme={theme} toggleTheme={toggleTheme} />}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tech' element={<TechHome />} />
          <Route path='/space' element={<SpaceHome />} />
          <Route path='/beyond' element={<BeyondHome />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/contact' element={<Contact />} />

          {/* Tech Pages */}
          <Route path='/tech/page-test' element={<TechPage1 />} />

          {/* Space Pages */}
          <Route path='/space/page-test' element={<SpacePage1 />} />

          {/* Beyond Pages */}
          <Route path='/beyond/page-test' element={<BeyondPage1 />} />
        </Routes>
        <PageFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
