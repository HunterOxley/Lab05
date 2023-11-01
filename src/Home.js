import React from 'react';
import './App.css';
//Home 
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