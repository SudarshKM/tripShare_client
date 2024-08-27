import React from 'react'
import sunset from '../assets/sunset.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Landing() {
  return (
    <>
    <div className='p-5  align-items-center justify-content-center d-flex flex-column' style={{backgroundColor:"#77ACF1", height:'100vh'}}>
      <h1 className='text-light mt-md-5' style={{fontSize:'50px'}}>TripShare</h1>
      <p className='text-light'>Sharing journeys so that more than one person can travel together which prevents the need for others to
      drive to a location and allows shared expenses by finding your Companion</p>
      <Link to={'./login'}><button className='btn btn-primary'>start</button></Link>
    </div>
    <div> 
    {/* <img src={sunset} alt="no-image" width='100%' /> */}
    </div>

    <Footer/>
    </>
  )
}

export default Landing