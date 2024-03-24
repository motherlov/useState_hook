import React from 'react'
import  { useState } from 'react'
// import TextField from '@material-ui/core/TextField';
import { TextField } from '@mui/material';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import { Autocomplete } from '@mui/material';
import axios from  'axios'

function Search_bar_Api() {
 const [ value ,setValue] = useState([]);

  const FetchData =()=>{
     console.log(" Search Data Fetch");
     axios.get('http://dummy.restapiexample.com/api/v1/employees').then(Response =>{
        return Response.json();
     }).then((res)=>{
        console.log(res.data);
        for (var i=0; i<res.data.length; i++) {
          value.push(res.data[i].employee_name)
        }
        setValue(value)
     })
  }

  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
    <h3>Greetings from  Data</h3>
    <Autocomplete
      style={{ width: 500 }}
      freeSolo
      autoComplete
      autoHighlight
      options={value}
      renderInput={(params) => (
        <TextField {...params}
          onChange={FetchData}
          variant="outlined"
          label="Search Box"
        />
      )}
    />
  </div>
  )
}

export default Search_bar_Api