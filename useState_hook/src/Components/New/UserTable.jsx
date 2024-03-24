import React from 'react'
import  { useEffect, useState } from 'react'
export default function UserTable() {
    const [data,setData]=useState();
    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then((res)=>res.json())
        .then((res)=>{
          setData(res.users)
        })
    },[])
    console.log(data);
  return (
    <>
    <div >    
        <h1 align="center" backgroundColor="green" >User Table</h1>
            
            <table class="table">
            <thead>
            <tr>
                    <th  scope="col">No.</th>
                      <th  scope="col">Firstname</th>
                      <th  scope="col">Lastname</th>
                      <th  scope="col">Age</th>
                      <th  scope="col">Gender</th>
                      <th  scope="col">Image</th>
                      <th  scope="col">Email</th>
                      <th  scope="col">Phone</th>
                      <th  scope="col">Address</th>
                      <th  scope="col">City</th>
            </tr>
            </thead>
            <tbody>
            { data && data.map((item,index)=>(
            <tr>
           <td> {++ index}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td><img src={item.image} width="50px" height="80px" /> </td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address.address}</td>
            <td>{item.address.city}</td>
        </tr>
      ))}

      </tbody>
     </table>
     </div>
    </>
  )
}
