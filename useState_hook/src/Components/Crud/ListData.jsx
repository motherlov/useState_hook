import axios from 'axios'
import React from 'react';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
function ListData() {
    const [users,setUsers] = useState([])
  const fetchData =()=>{
    
       axios.get('https://6558c1d5e93ca47020a9b065.mockapi.io/CRUD_API').then((res)=>{
        console.log("hello",res.data);
      setUsers(res.data)});

    
  }
  useEffect(()=>{
fetchData();
  },[])

   const deleteData =(id)=>{
    axios.delete(`https://6558c1d5e93ca47020a9b065.mockapi.io/CRUD_API/${id}`);
    // .then(()=>{
    //   fetchData();
    // });
    }

  return (
  <div className='App'>
    <table>
        <thead>
            <tr>
                <th> id</th>
                <th> Name</th>
                <th> Email</th>
                <th> Phone</th>
                <th> Age</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                { users.map((user,index)=>(

            
                <tr key={user.id}>
                    <td>{++index}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to="/edit" type="button">
                        update
                    </Link>
                    <Link type="button" onClick={deleteData(user.id)}>Delete</Link>
                    </td>
                </tr>
                    ))}
            </tbody>
        
    </table>
  </div>
  )
}

export default ListData