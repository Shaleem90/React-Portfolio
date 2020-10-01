import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import About from './pages/About/about';
import Projects from './pages/Projects/projects';
import Contact from './pages/Contact/contact';
import {BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div >
      < Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
  
    </div>

    </Router>
  );
}

export default App;
