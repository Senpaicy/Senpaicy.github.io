import React, { useState } from 'react';
import './App.css';
import Landing from './components/Landing';
// import About from './components/About';
// import Projects from './components/Projects';
// import Hobbies from './components/Hobbies';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <button onClick={toggleMode} className="theme-toggle">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {
      <Landing />
      // <About />
      // <Projects />
      // <Hobbies />
      // <Skills />
      // <Contact />
      // <Footer /> 
      }
    </div>
  );
}

export default App;

