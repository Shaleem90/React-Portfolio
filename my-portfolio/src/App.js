import React from 'react';
import logo from './logo.svg';
//import nav from './components/nav'
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Hero from './components/Hero/hero';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Hero />
  
    </div>
  );
}

export default App;