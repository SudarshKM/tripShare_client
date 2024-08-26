import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Chatwindow from "./pages/Chatwindow";
import Profile from "./pages/Profile";
import Aboutus from "./pages/Aboutus";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Authentication login />} />
        <Route path="/register" element={<Authentication register />} />{" "}
        <Route path="/chatbox" element={<Chatwindow />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </>
  );
}

export default App;
