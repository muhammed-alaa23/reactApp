
import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>




export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg sticky-top ">
  <div className="container">
    <NavLink className="navbar-brand fw-bolder" to="/">START Framework</NavLink>
    <button className="navbar-toggler display-flex align-items-center p-2 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu <i className='fa-solid fa-bars fa-sm'></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li>
          <NavLink className="nav-link fw-bolder my-4 p-3" aria-current="page" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bolder my-4 p-3" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bolder my-4 p-3" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
  }
