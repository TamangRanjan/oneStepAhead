import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Team from './pages/Team'
import './style.css'
const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element ={<Homepage/>}/>
                <Route path='/about' element ={<About/>}/>
                <Route path='/team' element ={<Team/>}/>
                <Route path='/contact' element ={<Contact/>}/>
                <Route path='/services' element ={<Services/>}/>
            </Routes>
            
        </Router>
    )
}

export default MyRoute
