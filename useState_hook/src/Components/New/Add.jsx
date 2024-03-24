import React from 'react';
import { useState } from 'react'
function Add() {

const [value,setvalue] =useState("");
const [data, setData] = useState([]);
  const addItem =()=>{
    if(value !== ""){
     setData([...data,value])
     setvalue("");
    }
  }
  console.log("data",data);
  return (
    <div className='App'>
        <input type="text" placeholder='add item ...' value={value} onChange={(e)=>setvalue(e.target.value)} />
        <button onClick={addItem}>Add</button>
        <ul className='todoo'>
        {data.map(item => <li key={item.toString()}>{item}</li>)}
      </ul>
      
        
        
    </div>
  )
}

export default Add