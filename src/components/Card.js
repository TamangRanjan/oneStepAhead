import React from 'react'
import '../style.css'

const Card = (props) => {
    return (
        <>
                            <div className='col-md-4 col-10 mx-auto mb-4'>
                                <div class="card main-card" >
            <img src={props.iconserv} class="card-img-top img-fluid" alt="photos"/>
            <div class="card-body card-back">
            <h5 class="card-title text-center">{props.title}</h5>
            <p class="card-text text-center card-para"> We are here to build any types of websites ,application and we can provide many others digital solutions.</p>
            </div>
            </div>
                                </div>   
        </>
    )
}

export default Card
