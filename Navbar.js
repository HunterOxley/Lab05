import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

//Navbar
function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link class="nav-link" to="/"> <span class="sr-only"></span>
          {props.home}
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/card">
          {props.card}
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">
          {props.contact}
          </Link>
        </li>

      </ul>
    </div>
  </nav>
  );
}

export default Navbar;