import React from 'react'
import sunset from '../assets/sunset.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Landing() {
  return (
    <>
    <div className='p-5  align-items-center justify-content-center d-flex flex-column' style={{backgroundColor:"#fdc6ba", height:'100vh'}}>
      <h1 className='text-light mt-md-5' style={{fontSize:'50px'}}>TripShare</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, ipsum deserunt veritatis reprehenderit, repellat fugiat quo ipsa, non nulla asperiores quis. Iure aliquid laborum nobis illum quibusdam nostrum nam minus?</p>
      <Link to={'./login'}><button className='btn btn-warning'>start</button></Link>
    </div>
    <div> 
    {/* <img src={sunset} alt="no-image" width='100%' /> */}
    </div>

    <Footer/>
    </>
  )
}

export default Landing