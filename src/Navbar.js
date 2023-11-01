import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from "react-router-dom";

//Nav bar
function Navbar(Props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link class="nav-link" to="/#">Home <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/card">Card</Link>
          {Props.card}
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
          {Props.contact}
        </li>
       
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;