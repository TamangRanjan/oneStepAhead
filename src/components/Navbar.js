import React from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logo_main.png'


const Navbar = () => {

   
    
    return (
        <>
           <div className="first-div">
        <div className="logo">
            <img className='onestep-logo' src={logo} alt='' />
        </div>
        <div className='list-div'>
            <ul>
                <li><Link className='nav-link' to="/">Home</Link></li>
                <li> <Link className='nav-link'  to="/about">About</Link></li>
                <li> <Link className='nav-link' to="/contact">Contact</Link></li>
                <li> <Link className='nav-link' to="/team">Team</Link></li>
                <li> <Link className='nav-link' to="/services">Services</Link></li>
            </ul>
        </div>
        <Link className='btn-1st' to="">Get a Quote</Link>
    </div>  
        </>
    )
}

export default Navbar
