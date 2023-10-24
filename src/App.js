import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Comingsoon from './pages/Comingsoon';
import Footer from './components/Footer';
/* Styling */
//import logo from './svg/Logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className = "app-container">
        <Navbar />
        <Routes>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/comingsoon" element = { <Comingsoon /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
