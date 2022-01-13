import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './img/logo_main.png'
import { Link } from 'react-router-dom'
import '../style.css'




const Footer = () => {
    return (
        <>
            <footer class="bd-footer py-2  bg-light my-footer">
                <div class="container py-3">
                    <div class="row d-flex justify-content-around">
                        <div class="col-lg-3">
                            <Link class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" to="/" aria-label="Bootstrap">
                              <img src={logo} alt='last' className='img-fluid' style={{
                                  height :'5rem',
                                  width :'5rem'
                              }}></img>
                            </Link>
                         <p style={{
                             letterSpacing:'1px'
                         }}>We are One Step Ahead aiming to lead the Digital Industry through our creative and innovative ideas.</p>
                        </div>
                        <div class="col-6 col-lg-2 offset-lg-1">
                            <h5>Links</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><Link to="/" className='last-icon'><i class="fas fa-home home-last-icon"></i>Home</Link></li>
                                <li class="mb-2"><Link to="/about" className='last-icon'><i class="fas fa-address-card home-last-icon"></i>About</Link></li>
                                <li class="mb-2"><Link to="/service" className='last-icon'><i class="fas fa-tools home-last-icon"></i>Service</Link></li>
                                <li class="mb-2"><Link to="/team" className='last-icon'><i class="fas fa-users home-last-icon"></i>Team</Link></li>
                                <li class="mb-2"><Link to="/contact" className='last-icon'><i class="far fa-address-book home-last-icon"></i>Contact</Link></li>
                            </ul>
                        </div>
                        <div class="col-6 col-lg-2">
                            <h5>Address</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><Link to="/"  className='last-icon'> <i class="fas fa-phone home-last-icon"></i>(977) 9869068666</Link></li>
                                <li class="mb-2"><Link to="/" className='last-icon'> <i class="fas fa-envelope home-last-icon"></i>info@onestepahead.com.np</Link></li>
                                <li class="mb-2"><Link to="/"  className='last-icon'> <i class="fas fa-map-marker-alt home-last-icon"></i>Koteshwor, Kathmandu, Nepal </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
