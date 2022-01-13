import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../style.css'
import { Link } from 'react-router-dom'

const NavbarTwo = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light nvBar">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  m-auto mb-2 mb-lg-0 sec-nav-ul" >
        <li className="nav-item ">
          <Link className="nav-link " aria-current="page" to="/services">Website Design And Development</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/services">Woordpress</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/services">Digital Marketing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/services">Domain And Hosting</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/services">Mobile Application</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> 
        </>
    )
}

export default NavbarTwo
