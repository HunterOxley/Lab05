import React from 'react';
import logo from './logo.svg';
import './App.css';
//Home card
function Home(Props) {
  return (
   <div>
    <h1>{Props.header}</h1>
    <h2>Section - 02</h2>
    <p>WVU ID: 800359452</p>
    <p>Hi, I am Hunter.</p>
   </div>
  );
}

export default Home;
