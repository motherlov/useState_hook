import React from 'react'
import{useState,useEffect} from 'react';
import axios from 'axios';
function PostData() {

 
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Website, setWebsite] = useState("")
      const handleSubmit =(e)=>{
        e.preventDefault();

        const name = Name.trim()
        const email = Email.trim()
        const website = Website.trim()
        axios.post("https://jsonplaceholder.typicode.com/users",{
            name,
            email,
            website,
        },
       )
      }
  
  return (
    <div className='App'>
     
        <form>
            <div>
            <label>Name</label>
            <input type='name' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
            </div>

            <div>
            <label>Email</label>
            <input type='email' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
            <label>Website</label>
            <input type='website' placeholder='Enter your website' onChange={(e)=>setWebsite(e.target.value)} />
            </div>
             <button type="submit" onClick={handleSubmit} >submit </button>
        </form>
    </div>
  )
}

export default PostData