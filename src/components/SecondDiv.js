import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
import SecondImg from './img/second.jpg'

const SecondDiv = () => {
    return (
        <>
            <div className='sec-container'>
            
                <div className='contain-div1'>
                    <h1 className='topic-one'>About Us</h1>
                    <h5 className='topic-one-letter'>MAKING COLLABORATION <span className='easy-productive' >EASY AND PRODUCTIVE</span> EVERY DAY</h5>
                </div>
                <div className='sec-section2'>
                        <div className='contain-div3'>
                            <img src={SecondImg} alt='about-img' height='95%' width='100%'></img>
                        </div>
                    <div className='contain-div2'>
                        <h1>Who Are <span className='we'>We</span></h1>
                        <h5>We are One Step Ahead based in Kathmandu, Nepal aiming to lead the Digital Industry through our creative and innovative ideas.

                            We deal with all kinds of websites, mobile applications and software development works.</h5>
                        <Link to='/team' className='btn teams-btn'>Our Teams</Link>
                    </div>   
                </div>

            </div>
        </>
    )
}

export default SecondDiv
