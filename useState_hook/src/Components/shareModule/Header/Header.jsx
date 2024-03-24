import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
  
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Home</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/About">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Login">Login</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/Registration">Registration</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <Link class="dropdown-item" to="#">Action</Link>
          <Link class="dropdown-item" to="#">Another action</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="#">Something else here</Link>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
   

    
  )
}
