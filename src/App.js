import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Card from "./card";

function App() {
  return (
    <div className="App bg-dark text white">
      <Navbar/>
      <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800359452</p>
      <p>Hi I am Hunter Oxley</p>

      <card/>
      <card/>
      <card/>

    </div>
  );
}

export default App;