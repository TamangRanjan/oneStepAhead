import React from 'react'
import ServeData from '../components/Servedata'
import Card from '../components/Card'
const Teamdiv = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Team</h1>
            </div>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                             {
                                 ServeData.map((val, ind)=>{
                                     return <Card
                                     key={ind}
                                     iconserv={val.ServeIcon}
                                     title={val.titile}/>
                                 })
                             }
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Teamdiv
