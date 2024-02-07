import "../src/Styles/Global.scss";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./Screens/Home/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Hireus from "./Screens/Hire/Hireus";
import SignIn from "./Screens/Login/SignIn";
import SignUp from "./Screens/Login/SignUp";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []);
  return (
    <div className="box">
      <div className="sticky">
        <Navbar />
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/Home"} element={<Home />} />
        <Route path={"/Hire"} element={<Hireus />} />
        <Route path={"/Signin"} element={<SignIn />} />
        <Route path={"/Signup"} element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
