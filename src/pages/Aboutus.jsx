import { fa1, fa2, fa3, fa4, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { width } from '@mui/system';
import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// '#27192f' 'rgb(146, 133, 159)'

function Aboutus() {
  return (
    <>
    <Header/>
    <div className=''>
    <div id="abdiv">
    <h1 className='text-center pt-5 fw-bolder m-0 text-light' >About Us </h1>
    <p className='p-5 text-center m-0 text-light fs-5'>Welcome to <b>Exploreo</b>, your ultimate travel companion finder! Our mission is to connect like-minded travelers who share a passion for exploring the world and experiencing new cultures. Whether you're a solo adventurer, a couple looking for fellow travelers, or a group planning a trip together, TravelBuddy is here to help you find the perfect travel companions.</p>
    </div>

    <div className="row d-flex justify-content-center align-items-center p-md-5 " id='abus'>
      <div className="col-md-6 p-5">
        <img src="https://www.traveldailymedia.com/assets/2020/03/shutterstock_729336025.jpg" alt="" className='img-fluid rounded'/>
      </div>
      <div className="col-md-6 p-5 justify-content-center align-items-center">
        <h3 className='fw-bolder fs-1 text-white'>Who Are We?</h3>
        <p className='fs-5 text-light' id='whoP'>We are a team of avid travelers who understand the joys and challenges of exploring new destinations. Our diverse backgrounds and shared love for travel inspired us to create a platform that makes finding travel companions easy, fun, and safe. We believe that travel is more enjoyable when shared with others, and our goal is to bring people together to create unforgettable travel experiences.</p>
      </div>
    </div>

    <div className="row py-5" id='ourm'>
      <h1 className='text-center text-light my-4 fw-bold mb-5'>Our Mission</h1>
      <div className="col-md-3"></div>
      <div className="col-md-6 d-flex px-2 justify-content-center align-items-center">
        <div className="card d-flex justify-content-center align-items-center ms-3 p-4" id='abcard' style={{width:'180px',height:'180px'}}>
          <img src="https://cdn-icons-png.flaticon.com/128/9762/9762320.png" alt="" style={{width:'80px',height:'80px'}} className='img-fluid'/>
          <p className='fw-bolder mt-3 text-center'>Connect Travelers</p>
        </div>
        <div className="card d-flex justify-content-center align-items-center  ms-3 p-4" id='abcard' style={{width:'180px',height:'180px'}}>
          <img src="https://cdn-icons-png.flaticon.com/128/1161/1161439.png" alt="" style={{width:'80px',height:'80px'}} className='img-fluid'/>
          <p className='fw-bolder mt-3 text-center'>Enhance Safety</p>
        </div>
        <div className="card d-flex justify-content-center align-items-center  ms-3 p-4" id='abcard' style={{width:'180px',height:'180px'}}>
          <img src="https://cdn-icons-png.flaticon.com/128/3364/3364924.png" alt="" style={{width:'80px',height:'80px'}} className='img-fluid'/>
          <p className='fw-bolder mt-3 text-center'>Foster Community</p>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>

    <div className="howto row pb-5" style={{backgroundColor:'white'}} id='ourm'>
      <h1 className='text-center text-light fw-bold my-5'>How this works!</h1>
      <div className="col">
      <VerticalTimeline>
        <VerticalTimelineElement
        contentStyle={{backgroundColor:'darkslateblue',color:'white'}}
        icon={<FontAwesomeIcon icon={fa1} />}
        iconStyle={{alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
          <h3>Login/Register</h3>
          <p>login or register using email or google account.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        contentStyle={{backgroundColor:'darkslateblue',color:'white'}}
        icon={<FontAwesomeIcon icon={fa2} />}
        iconStyle={{alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
          <h3>Find your perfect companion</h3>
          <p>you can find partners by posting or you can select from the feed.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        contentStyle={{backgroundColor:'darkslateblue',color:'white'}}
        icon={<FontAwesomeIcon icon={fa3} />}
        iconStyle={{alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
          <h3>Connect and Chat</h3>
          <p>Chat with your partner with the built-in chat feature. your data is safe with us.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        contentStyle={{backgroundColor:'darkslateblue',color:'white'}}
        icon={<FontAwesomeIcon icon={fa4} />}
        iconStyle={{alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
          <h3>Plan your trip and have fun</h3>
          <p>Find your perfect partner for trips and enjoy.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </div>

    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-6 justify-content-center align-items-center">
        <h1 className='fw-bolder' style={{color:'darkslateblue'}}>what our clients have to say</h1>
      </div>
      <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
        <div className="testcard px-5 py-2 my-4 me-4 " style={{backgroundColor:'darkslateblue',borderRadius:'20px'}}>
          <div className="firstrow d-flex justify-content-start align-items-center">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" style={{borderRadius:'50%',width:'70px',height:'70px'}}/>
          <div className="name justify-content-start align-items-center ms-3">
          <h4 className=' text-light p-0  mt-2'>John Kooper</h4>
          {/* <p className='p-0 text-secondary'>trip guide, Trivago</p> */}
          </div>

          </div>
          <p className='mt-3 text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis rerum voluptatum amet neque, beatae adipisci debitis ex. Asperiores quidem natus laboriosam unde aperiam molestias ea? Iste numquam nulla delectus.</p>
        </div>

        <div className="testcard px-5 py-2 my-4 me-4 " style={{backgroundColor:'darkslateblue',borderRadius:'20px'}}>
          <div className="firstrow d-flex justify-content-start align-items-center">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" style={{borderRadius:'50%',width:'70px',height:'70px'}}/>
          <div className="name justify-content-start align-items-center ms-3">
          <h4 className=' text-light p-0  mt-2'>John Kooper</h4>
          {/* <p className='p-0 text-secondary'>trip guide, Trivago</p> */}
          </div>

          </div>
          <p className='mt-3 text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis rerum voluptatum amet neque, beatae adipisci debitis ex. Asperiores quidem natus laboriosam unde aperiam molestias ea? Iste numquam nulla delectus.</p>
        </div>

        <div className="testcard px-5 py-2 my-4 me-4 " style={{backgroundColor:'darkslateblue',borderRadius:'20px'}}>
          <div className="firstrow d-flex justify-content-start align-items-center">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" style={{borderRadius:'50%',width:'70px',height:'70px'}}/>
          <div className="name justify-content-start align-items-center ms-3">
          <h4 className=' text-light p-0  mt-2'>John Kooper</h4>
          {/* <p className='p-0 text-secondary'>trip guide, Trivago</p> */}
          </div>

          </div>
          <p className='mt-3 text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis rerum voluptatum amet neque, beatae adipisci debitis ex. Asperiores quidem natus laboriosam unde aperiam molestias ea? Iste numquam nulla delectus.</p>
        </div>
      </div>
    </div>


    <div className="row">
      <h1 className='text-center my-5'>Contact us</h1>
      <div className="col-md-6">
        
      </div>
      <div className="col-md-6"></div>
    </div>

    </div>
    

    <Footer/>

    </>
  )
}

export default Aboutus