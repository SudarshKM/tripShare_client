import { faInstagram, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div div className='p-5' style={{backgroundColor:"#6482AD"}}>
      <hr />
    <div className="row">
      <div className="col-md-5 text-light">
        <h1 className=''> TripShare</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores beatae atque voluptatem eligendi molestiae quis. Ex reprehenderit voluptatem, autem, unde vitae quidem quo asperiores consequatur veritatis eligendi aut! Magnam!</p>
      </div>

      <div className="col-md-3 d-flex justify-content-center align-items-center flex-column text-light" >
        {/* <h1>link</h1>
        <p>abcdef</p>
        <p>abcdef</p>
        <p>abcdef</p> */}
      </div>

      <div className="col-md-4">
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <input type="text" placeholder='Email' className='form-control' />
          <button className='btn btn-warning ms-2 border-0'>Subscribe</button>
        </div>

        <div className='d-flex justify-content-around align-items-center mt-5 text-light'>
        <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
        <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
        <FontAwesomeIcon icon={faThreads} className='fa-2x'/>
        <FontAwesomeIcon icon={faXTwitter} className='fa-2x'/>

        </div>
      </div>


    </div>
    </div>
  )
}

export default Footer