import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Teamdiv from './Teamdiv'

const Team = () => {
    return (
        <div>
            <Navbar/>
            <Teamdiv/>
            <Footer/>
        </div>
    )
}

export default Team
