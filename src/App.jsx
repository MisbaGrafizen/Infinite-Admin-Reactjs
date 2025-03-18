import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";


import { Navigate } from "react-router-dom";
import AboutUsPage from "./pages/Aboutus/AboutUsPage";
import Login from "./pages/LoginPage/Login";


function App() {


  return (
    <>
     
      <div className="w-100 ease-soft-spring h-[100%] !bg-[#ffffff]  duration-1000 ">

        <Routes>
        <Route path="/" element={ <Login />} /> 
 
 
          <Route path="/landing" element={ <LandingPage />} /> 
          <Route path="/aboutus" element={ <AboutUsPage />} /> 

        </Routes>
      </div>
    </>
  );
}

export default App;
