import React from 'react';
import About from './About';
import ContactUs from './ContactUs'
import Home from './Home'
import axios from 'axios';

//! ReactRouter Library
import {BrowserRouter , Routes , Route , Link } from 'react-router-dom'

//! BootStrap Library
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=>{
  return(
    <BrowserRouter>

      <Link to='/' >Home</Link>

      <Link to='/About' >About</Link>

      <Link to='/ContactUs' >ContactUs</Link>



      <Routes>
        <Route path="/" element = {<Home/>}  />

        <Route path="/About" element = {<About jop="frontEnd developer" id='22071' age='22' />}  />

        <Route path="/ContactUs" element = {<ContactUs img1="images\water.jpg"  />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App

