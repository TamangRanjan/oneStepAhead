import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
const Servicediv = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Serivce</h1>
            </div>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row gy-4'>
                            <div className='col-md-4 col-10 mx-auto mb-4 '>
                            <div className="card service-my-card">
                            <i className="fab fa-wordpress-simple text-center service-topicon"></i>
                            <div className="card-body">
                            <h5 className="card-title text-center">Wordpress</h5>
                            <p className="card-text text-center service-text">Creating a website in WordPress is easy and fast however, you should have knowledge of WordPress to create the website according to your will.</p>
                            <Link to="/contact" className="btn  last-btn-contact">Contact</Link>
                            </div>
                            </div>
                                </div> 
                                <div className='col-md-4 col-10 mx-auto mb-4'>
                            <div className="card service-my-card">
                            <i className="fas fa-globe text-center service-topicon"></i>
                            <div className="card-body">
                            <h5 className="card-title text-center">Responsive Web Design</h5>
                            <p className="card-text text-center service-text">Web designing is an initial phase to develop the website and meet the client’s requirement. So, we have professional and creative team to design a website.</p>
                            <Link to="/contact" className="btn  last-btn-contact">Contact</Link>
                            </div>
                            </div>
                                </div> 
                                <div className='col-md-4 col-10 mx-auto mb-4'>
                            <div className="card service-my-card">
                            <i className="fas fa-mobile-alt text-center service-topicon"></i>
                            <div className="card-body">
                            <h5 className="card-title text-center">Mobile App Development</h5>
                            <p className="card-text text-center service-text">As people are using mobile phone mostly, we have a professional team to create apps that runs both on android and iOS smoothly.we create best for every one</p>
                            <Link to="/contact" className="btn  last-btn-contact">Contact</Link>
                            </div>
                            </div>
                                </div> 
                                <div className='col-md-4 col-10 mx-auto mb-4'>
                            <div className="card service-my-card">
                            <i className="fas fa-search-location text-center service-topicon"></i>
                            <div className="card-body">
                            <h5 className="card-title text-center">Digital Marketing</h5>
                            <p className="card-text text-center service-text">Creating a website in WordPress is easy and fast however, you should have knowledge of WordPress to create the website according to your will</p>
                            <Link to="/contact" className="btn  last-btn-contact">Contact</Link>
                            </div>
                            </div>
                                </div> 
                                <div className='col-md-4 col-10 mx-auto mb-4'>
                            <div className="card service-my-card">
                            <i className="fab fa-wordpress text-center service-topicon"></i>
                            <div className="card-body">
                            <h5 className="card-title text-center">Woo Commerce</h5>
                            <p className="card-text text-center service-text">Woo commerce is an e-commerce plugin runs in WordPress. We can help you setup woo commerce plugin to your published website so that you can sell things  online.</p>
                            <Link to="/contact" className="btn  last-btn-contact">Contact</Link>
                            </div>
                            </div>
                                </div> 
                                <div className='col-md-4 col-10 mx-auto mb-4'>
                            <div className="card service-my-card">
                            <i className="fas fa-tasks text-center service-topicon"></i>
                            <div className="card-body">
                            <h5 className="card-title text-center">Website Handling</h5>
                            <p className="card-text text-center service-text">We manage every types of website. We also provide marketing facilities to the clients.We provide best services to every clients and handle their website easily.</p>
                            <Link to="/contact" className="btn  last-btn-contact">Contact</Link>
                            </div>
                            </div>
                                </div> 
                           
                             
                               
                             
                            
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Servicediv
