import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterLayout from './layouts/footer/FooterLayout'
import NavLayout from './layouts/header/NavLayout'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';

function App() {
  return (
    <>
        <Router>
            <NavLayout/>
              <Routes>
                  <Route path="/pattiqus-portfolio" element={<Home/>}>
                  </Route>
                  <Route path="/about" element={<About/>}>
                  </Route>
                  <Route path="/portfolio" element={<Portfolio/>}>
                  </Route>
                  <Route path="/contact" element={<Contact/>}>
                  </Route>
              </Routes>
            <FooterLayout/>
        </Router>
    </>
  );
}

export default App;
