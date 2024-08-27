import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo-Photoroom.png'
import { useContext } from 'react';
import { loggedInResponseContext } from '../context/DataShare';
// import { loginContex } from '../context/DataShare';


function Header() {
  // const {isLoggedin , setIsLoggedIn} = useContext(loginContex)
  const {isLoggedIn,setIsLoggedIn} = useContext(loggedInResponseContext);


  const navigate = useNavigate()

  const logout=()=>{
    sessionStorage.clear()
    setIsLoggedIn(false)
    
    navigate('/')
  }
  return (
    <>
    <Navbar className='' expand="lg" style={{backgroundColor:"#6482AD"}}>
      <Container>
        <Navbar.Brand className='fw-bold'>
          <Link to={'/home'} style={{textDecoration:"none",color:"white"}}><span style={{color:'white'}}>TripShare</span></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* <Link to={'/aboutus'} className='me-md-5 mt-3 mt-md-0 fw-bold' style={{textDecoration:"none",color:"white"}}><>About Us</></Link> */}
            <Link to={'/profile'} className='me-md-5 mt-3 mt-md-0 fw-bold' style={{textDecoration:"none",color:"white"}}>My Profile</Link>
            <Link to={'/'}><button className='btn btn-light fw-bold mt-3 mt-md-0'style={{textDecoration:"none"}} onClick={logout}>Log Out</button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header