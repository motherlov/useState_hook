import React from 'react'
import { useState,useEffect } from 'react'
export default function ApiFetch() {
    const [users, setUsers] = useState([])

    const fetchUserData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => { return response.json()})
        .then(data => { setUsers(data) })
    }
    // useEffect(() => {
    //     fetchUserData()
    //   }, [])
    
   console.log(users);
  return (
    <div>
    <button class="btn btn-primary mb-15" onClick={fetchUserData}>Fetch Api</button>
    {users.length > 0 && (
      <ul>
        {users.map(user => (
          <li key={user.id}>Name:{user.name},Email:{user.email}</li>
        ))}
      </ul>
    )}
  </div>
  )
}
