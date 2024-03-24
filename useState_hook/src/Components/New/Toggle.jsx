import React from 'react'
import { useState } from 'react'
export default function Toggle() {
    const [toggle, setToggle] = useState(false);
  return (
       <>
        <b>Toggle Visibility</b><br /><br />
      <button onClick={() => setToggle(true)} class="btn btn-primary mb-5"> Show </button>
      <button onClick={() => setToggle(false)} class="btn btn-primary mb-5"> Hide </button>
      {toggle && (
        <ul class="list-group">
          <li class="list-group-item">  First item</li>
          <li class="list-group-item"> second item</li>
          <li class="list-group-item"> third item</li>
          <li class="list-group-item"> fourth item</li>
          <li class="list-group-item"> fifth item</li>
        </ul>
      )}
    </>
    
  )
}
