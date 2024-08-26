import React, { useContext, useState } from "react";

import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { loginUserApi, registerUserApi } from "../../server/allApi";
import Swal from 'sweetalert2'

function Authentication({ login, register }) {

  // const {username , setUserName} = useContext(getUserName)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

 const [ userCheckIn , setUserCheckIn ] = useState({
  email: "",
  password: ""
 })

 console.log(userCheckIn);
 
  // console.log(user);
  const navigate = useNavigate();

  const registerUser = async () => {
    const { username, email, password } = user;
    const reqBody = {
      username,
      email,
      password,
    };

    if (!username || !email || !password) {
      // alert("Please fill the form completely");
      Swal.fire({
        text: 'Please fill the form completely',
        icon: 'error',
      })
    } else {
      const result = await registerUserApi(reqBody);

      if (result.status == 200) {
        // alert("Registration successfull");
        Swal.fire({
          title: 'Wow!',
          text: 'Registration successfull',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
       
        navigate("/login");

      } else if (result.response.status == 406) {
        // alert("Account already exist");
        Swal.fire({
          title: 'Oops..!',
          text: 'Account already exist',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }

      // console.log(result);
    }
  };

  const loginUser = async()=>{
 
    const {email , password} = userCheckIn;

    if(!email || !password){
      Swal.fire({
        text: 'Please fill the form completely',
        icon: 'error',
      })
    } else {
    const result = await loginUserApi(userCheckIn) 




    if(result.status==200){
      Swal.fire({
        title: 'Wow!',
        text: 'Login successfull',
        icon: 'success',
      })
      // console.log(result.data.username);
      // setUserName(result.data.username)

      sessionStorage.setItem("userName",result.data.username)
      
      navigate('/home')
    } }

    

    // console.log(result);
    

  };

  function goToRegister() {
    navigate("/register");
  }

  function goToLogIn() {
    navigate("/login");
  }
  return (
    <>
      {login ? (
        <div
          className="w-100 d-flex align-items-center justify-content-center "
          style={{
            height: "100vh",
            backgroundColor: "#EBFFFB",
            color: "whitesmoke",
            margin: "0",
          }}
        >
          <div className="w-100">
            <Row className="p-5" style={{ height: "67vh" }}>
              <Col md={3}></Col>
              <Col
                md={3}
                style={{ backgroundColor: "#96BAFF" }}
                className="rounded m-1 p-3 d-flex align-items-center justify-content-center flex-column"
              >
                <h3 className="text-center text-light">Sign In</h3>
                <form action="">
                  <input
                    className="form-control mt-3"
                    
                    type="email"
                    placeholder="email"
                    onChange={(e)=>setUserCheckIn({...userCheckIn , email:e.target.value})}
                  />
                  <input
                    className="form-control mt-3"
                    type="text"
                    
                    placeholder="password"
                    onChange={(e)=>setUserCheckIn({...userCheckIn , password:e.target.value})}

                  />
                  <div className="d-flex justify-content-center">
                    <button
                      style={{ backgroundColor: "#86A7FC" }}
                      className="btn  mt-3"
                      onClick={loginUser}
                      type="button"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </Col>
              <Col
                md={3}
                style={{ backgroundColor: "#7C83FD" }}
                className="rounded m-1 p-3 d-flex align-items-center justify-content-center flex-column"
              >
                <h3 className="text-center text-light">New User ?</h3>
                <p className="text-center">
                  Enter your personal details and start journey with us
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    style={{ backgroundColor: "#86A7FC" }}
                    className="btn "
                    onClick={goToRegister}
                  >
                    Register
                  </button>
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
          </div>
        </div>
      ) : (
        <div
          className="w-100 d-flex align-items-center justify-content-center "
          style={{
            height: "100vh",
            backgroundColor: "#EBFFFB",
            color: "whitesmoke",
          }}
        >
          <div className="w-100">
            <Row className="p-5" style={{ height: "67vh" }}>
              <Col md={3}></Col>
              <Col
                md={3}
                style={{ backgroundColor: "#96BAFF" }}
                className="rounded m-1 p-3 d-flex align-items-center justify-content-center flex-column"
              >
                <h3 className="text-center text-light">Sign Up</h3>
                <form action="">
                  <input
                    className="form-control mt-3"
                    type="text"
                    placeholder="username"
                    onChange={(e) => {
                      setUser({ ...user, username: e.target.value });
                    }}
                  />
                  <input
                    className="form-control mt-3"
                    type="email"
                    placeholder="email"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                  />
                  <input
                    className="form-control mt-3"
                    type="password"
                    placeholder="password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                  />
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      style={{ backgroundColor: "#86A7FC" }}
                      className="btn  mt-3"
                      onClick={registerUser}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </Col>
              <Col
                md={3}
                style={{ backgroundColor: "#7C83FD" }}
                className="rounded m-1 p-3 d-flex align-items-center justify-content-center flex-column"
              >
                <h3 className="text-center text-light">Already a User ?</h3>
                <p className="text-center">
                  To keep connected with us please login with your personal info{" "}
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    style={{ backgroundColor: "#86A7FC" }}
                    className="btn "
                    onClick={goToLogIn}
                  >
                    Log In
                  </button>
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default Authentication;
