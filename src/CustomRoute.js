import React from 'react'
import { Routes,Route } from "react-router-dom"; 
import Home from './home';
import About from './About';
import Contact from './Contact';
export const CustomRoute=() =>{
  return (
    <>
      
      <Routes> 
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
       
    </> 
  )
}


