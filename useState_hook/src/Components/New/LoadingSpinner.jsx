import React from 'react'
import axios from "axios";
import Image5 from '../Image/loader2.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
export default function LoadingSpinner() {
  const [loading, setLoading] = useState(false);
  const fetchUserData = () => {
    
      setLoading(true);
      setTimeout(() =>{
        setLoading(false);
      },3500)
  };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  return (
    <div className="App">
    <header className='APP-header'><br/>
     {loading? "":(<button onClick={fetchUserData}> Toggle LoadSpinner</button>) }
     { loading ? <div><h4>Fetching your data ... !!!</h4>
  <img  src={Image5} style={{height:"100px",width:"100px"}} /></div> : "" }
      </header>
    </div>
  )
}
