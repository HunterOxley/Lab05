import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Card from "./card";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const myStyle = {
    textAlign: "center",
  };

  return (
    <div className ="App" style = {myStyle}>
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home header ="CS 230L"/>}></Route>
      <Route path="/card" element={<Card />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </BrowserRouter>
      </div>

  );
}

export default App;
