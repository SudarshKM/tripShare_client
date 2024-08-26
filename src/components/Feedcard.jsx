import React, { useContext } from 'react'
import dp from '../assets/dp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteTripCard } from '../../server/allApi';
import { editResponseContext } from '../context/DataShare';


function Feedcard({trips}) {
  const [show, setShow] = useState(false);
  const [userName,setUserName]=useState(sessionStorage.getItem("userName"))

  const [tripId , setTripId] = useState({
    id : trips._id
  })
  const {setEditResponse}=useContext(editResponseContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeletetrip =async()=>{
    const result =  await deleteTripCard(tripId)
    if(result.status==200){
      setEditResponse(true)

    }

    console.log(result);
    
  }

  

  return (
    <>
    <div className='d-flex align-items-center justify-content-center flex-column w-100'>
    <div className='p-2 shadow card w-100 my-4' style={{backgroundColor:"white"}}>
      <div className="row w-100">
        <div className="col-md-2 d-flex align-items-center justify-content-center flex-column">
          <img src={dp} alt="no image" style={{width:'50px',borderRadius:'50%'}}/>
          <h6 className='mt-2'>{trips?.username}</h6>
        </div>
        <div className="col-md-8 ">
          <div className="row w-100 rounded p-3 ms-2 ms-md-0 " style={{border:"#27192f 2px solid" }}>
            <div className="col-md-5 align-items-center justify-content-center d-flex flex-column">
              <h5>{trips?.startingpoint}</h5>
              <p>{trips?.startdate}</p>
            </div>
            <div className="col-md-2 align-items-center justify-content-center d-flex flex-column">
            <FontAwesomeIcon icon={faArrowsLeftRight} className='fa-3x'/>
            </div>
            <div className="col-md-5 align-items-center justify-content-center d-flex flex-column">
              <h5>{trips?.destination}</h5>
              <p>{trips?.enddate}</p>
            </div>
          </div>
          <div className="row mt-md-3 w-100">
              <div className="col-md-6 align-items-center justify-content-center d-flex">
                <h6>Est. Price: {trips?.price}</h6>
              </div>
              <div className="col-md-6 align-items-center justify-content-center d-flex">
                <h6>Max People: {trips?.people}</h6>
              </div>
          </div>
        </div>
        <div className="col-md-2 align-items-center justify-content-center d-flex flex-column">
          <button className='btn' style={{backgroundColor:'#27192f',color:'white'}} variant="primary" onClick={handleShow}>Details</button>
          {trips?.username == `${userName}` &&
            <button className='btn mt-3' style={{backgroundColor:'#27192f',color:'white'}} variant="primary" onClick={()=>handleDeletetrip(trips?.id)} >Delete</button>}
        </div>
      </div>
    </div>
    </div>

    <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-center fw-bold'>{trips?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='align-items-center'>
          <p><span className='fw-bold'>{trips?.username}</span> : " {trips?.description} "</p>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Starting Point: <span className='fw-bold'>{trips?.startingpoint}</span></li>
                <li>Start Date: <span className='fw-bold'>{trips?.startdate}</span></li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Destination: <span className='fw-bold'>{trips?.destination}</span></li>
                <li>End Date: <span className='fw-bold'>{trips?.enddate}</span></li>
              </ul>
            </div>
          </div>

          <p>There should be changes in estimated price and no.of Participants, to know more contact our trip partner </p>

          <div className="row text-center">
            <div className="col-md6">
              <ul style={{listStyleType:"none"}}>
                <li>Average Estimated price: <span className='fw-bold'>{trips?.price}</span></li>
              </ul>
            </div>
            <div className="col-md6">
              <ul style={{listStyleType:"none"}}>
                <li>Participants: <span className='fw-bold'>Maximum {trips?.people}</span></li>
              </ul>

            </div>
          </div>


          <hr />
          <h3 className='text-center text-danger'>Celebrate our Journey</h3>
          
        </Modal.Body>
        <Modal.Footer>

          <div className='d-flex'>
            <h6 className='fw-bold mt-2 me-3'>Have a chat with {trips?.username} ?</h6>
            <Button variant="primary" onClick={handleClose}>
              Chat
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Feedcard