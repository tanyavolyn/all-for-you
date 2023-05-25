
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Shop from "./Shop";
import  About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Share from "./Share";


import './App.css';

function App() {


  
  return (
    <div className="box">

    <div>


    <Router>
      <div className="container">
    <div>
   <h1>All for you</h1>
   </div>
   <nav>

    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/shop">Shop</Link>
    <Link className="link" to="/about">About</Link>
    <Link className="link" to="/kontakt">Contact</Link>
   </nav>
   </div>
   <Routes>
    <Route path="/" element={<Gallery/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/kontakt" element={<Contact/>}/>
   </Routes>

   </Router>



   </div>

   
<div>
  <Share/>
</div>
</div>
  );
}

export default App;
