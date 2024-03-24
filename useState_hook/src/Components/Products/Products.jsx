import React from 'react'
// import {Grid} from '@mui/material';
 import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Products() {

    //https://dummyjson.com/products

    const [data,setData] = useState("");


    const fetchProducts = async()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>{
            setData(res.products)
            console.log(res.products)
          })
      }
      
          
      useEffect(()=>{
          fetchProducts();
      },[]);
      console.log(data);
  
  return (
    <div>
    <button onClick={fetchProducts}>Get posts</button>
    <ul>
      { data.map((item) => (
        <li key={item.id}> User_Name: { item.id },
                    Full_Name: { item.title },
                    User_Email: { item.description }</li>
      ))} 
      
    </ul>
  </div>
  )
}
