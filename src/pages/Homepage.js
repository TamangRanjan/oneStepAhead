import React from 'react'
import FirstDiv from '../components/FirstDiv'
import Footer from '../components/Footer'
import Fourth from '../components/Fourth'
import Navbar from '../components/Navbar'
import NavbarTwo from '../components/NavbarTwo'
import SecondDiv from '../components/SecondDiv'
import ThirdDiv from '../components/ThirdDiv'
const Homepage = () => {
    return (
        <>
            <Navbar/>
            <NavbarTwo/>
            <FirstDiv/>
            <SecondDiv/>
            <ThirdDiv/>
            <Fourth/>
            <Footer/>
        </>
    )
}

export default Homepage
