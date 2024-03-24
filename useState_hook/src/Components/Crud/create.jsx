import React from 'react'
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Data() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone]= useState('');
    const [age,setAge] =useState('')
    const navigate = useNavigate();

     const createData =(e)=>{
        e.preventDefault();
        axios.post("https://6558c1d5e93ca47020a9b065.mockapi.io/CRUD_API",{
            name:name,
            email:email,
            phone:phone,
            age:age,
        }).then(()=>{
        navigate('/list')}
        );

     };
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
            <label>phone</label>
            <input type='number' placeholder='Enter your phone' onChange={(e)=>setPhone(e.target.value)} />
            </div>

            <div>
            <label>Age</label>
            <input type='number' placeholder='Enter your website'maxLength={10} onChange={(e)=>setAge(e.target.value)} />
            </div>
             <button type="submit" onClick={createData} >submit </button>
        </form>
    </div>
  )
}

export default Data