import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import First from './img/first.jpg'
import '../style.css'
import {Link} from 'react-router-dom'
const FirstDiv = () => {
    return (
        <>
            <section id='header'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>

                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column'>
                                <h1>
                                    Our Path Way to The Future
                                </h1>
                                <h5 className='my-3 my-h5'>
                                        we are committed to create future! Give us chance and we will prove our efficiency!
                                </h5>
                                <div className='mt-3'>
                                    <Link to='/about' className='btn more-btn'>View More</Link>
                                </div>

                            </div>
                            <div className='col-lg-6 order-1 order-lg-4 header-img'>
                                <img src={First} className='img-fluid img-change' alt='no more'/>

                            </div>
                            </div>

                        </div>

                    </div>
                </div>
                
            </section>
        </>
    )
}

export default FirstDiv
