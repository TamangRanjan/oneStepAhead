import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
const FourthDivone = () => {
    return (
       <>
            <section id='header' className='mt-5'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>

                            <div className='col-md-6 pt-5 pt-lg-0 d-flex justify-content-center  flex-column'>
                            <form className='mb-5'>
                                <h1 className='text-center'>Contact us</h1>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
                            </div>
                            <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile number"/>
                            </div>
                            <div class="mb-2">
                            <label for="exampleFormControlInput1" class="form-label">Address</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address"/>
                            </div>
                            <div class="mb-2">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12 mb-5">
                            <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                            </form>

                            </div>
                            <div className='col-lg-6 header-img' height="100px">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3758792662197!2d85.34235441438382!3d27.674775233530887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ee25c25503%3A0x3c248cae7307a345!2sBhatbhateni%20Super%20Store%20%2C%20Koteshwor%20%2Cktm!5e0!3m2!1sen!2snp!4v1641722947093!5m2!1sen!2snp" width="600" height="500 "  allowfullscreen="" loading="lazy"></iframe>

                            </div>
                            </div>

                        </div>

                    </div>
                </div>
                
            </section>

       </>
    )
}

export default FourthDivone

