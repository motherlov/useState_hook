import React from 'react'
import  {useState,useEffect} from 'react'
import axios from 'axios'
function Get() {
    const [users, setUser] = useState([])
    const fetchData = async()=>{
    const response = await  axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(response.data);
    }
    useEffect(()=>{
     fetchData();
    },[])


    // const deleteUser = (id) => {
    //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // .then(()=>{
        //     fetchData();
        // })
    // }

  return (
    <div className="App">  
    <table>
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user.id}>
             <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}  </td>
              <td>{user.website} </td>
              <td>
             <button>update</button>
             &nbsp;
             {/* <button onClick={deleteUser(user.id)}>Delete</button> */}
              </td>
            </tr>
                   ))}
        </tbody>
    </table>
    
    </div>
  )
}

export default Get