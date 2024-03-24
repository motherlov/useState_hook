import React from 'react'
 import axios from 'axios';
  import { Link } from 'react-router-dom';
 import {useState,useEffect} from 'react'
function TodoList_Api() {
    const [user,SetUser] =useState([]);
const    fetchData =()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response =>{ 
    SetUser(response.data)
    })
}
 useEffect(()=>{
    fetchData();
 },[])

  return (
    <div className='containers'>
        <button class="btn btn-success">Add Data</button>
        <table className='table'>
            <thead>
                <tr>
{/*         
             <th scope="col">Id</th> 
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            {/* <th colspan="2">Status</th> */}
            <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {user && user.map((obj,index)=>(
                <tr>
                     <td key={obj.id}>{++index}</td>
                    <td>{obj.name}</td>
                    <td>{obj.username}</td>
                    <td>{obj.email}</td>
                    <td>
                        <Link to={`/edit/${obj.id}`} class="btn btn-success">Edit</Link>
                
                     <Link to={`/delete/${obj.id}`} class="btn btn-danger">Delete</Link>
                </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TodoList_Api