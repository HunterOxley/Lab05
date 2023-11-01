import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Card from "./card";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Browser routes
function App() {
  const myStyle = {
    textAlign: "center",
  };
  return(
    <div className ="App" style = {myStyle}>
      
      
     
      <div className="App">
<BrowserRouter>
 <Navbar title="BlogApp" home="Home" card ="Card" contact="Contact" />
  <Routes>
     <Route path="/" element={<Home header="CS 230L"/>}></Route>
      <Route path="/card" element={<Card />}></Route>
       <Route path="/contact" element={<Contact />}></Route>
        </Routes>
</BrowserRouter>
</div>
    </div>
  );
}



export default App;
