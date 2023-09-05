import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Form/Navbar';
import './App.css';
import Footer from './components/Form/Footer';
import Portfolio from './components/Portfolio';





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
