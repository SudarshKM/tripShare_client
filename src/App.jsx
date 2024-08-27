import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Chatwindow from "./pages/Chatwindow";
import Profile from "./pages/Profile";
import Aboutus from "./pages/Aboutus";
import Authentication from "./pages/Authentication";
import { useContext } from "react";
// import { loginContex } from "./context/DataShare";
import ProtectedRoutes from "./privateRoute/ProtectedRoute";

function App() {

  // const {isLoggedin , setIsLoggedIn} = useContext(loginContex)


  const token = sessionStorage.getItem('token')
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Landing />} />
 
        <Route element={<ProtectedRoutes/>}> 
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />

        </Route>



        <Route path="/login" element={<Authentication login />} />
        <Route path="/register" element={<Authentication register />} />{" "}
        {/* <Route path="/chatbox" element={<Chatwindow />} /> */}
        {/* <Route path="/aboutus" element={<Aboutus />} /> */}
      </Routes>
    </>
  );
}

export default App;
