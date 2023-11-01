import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";


function Card() {
  return (

    <div className="card-container">
    <div className="card">
      <h3>Card 1</h3>
      <p>I like the Miami Heat, basketball is cool</p>
    </div>
    <div className="card">
      <h3>Card 2</h3>
      <p>I think hotdogs work well with fries</p>
    </div>
    <div className="card">
      <h3>Card 3</h3>
      <p>Test</p>
    </div>
  </div>

  );
}

export default Card;