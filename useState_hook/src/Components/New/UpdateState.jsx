import React from 'react'
import { useState } from 'react';
export default function UpdateState() {

    const [counter, setCounter] = useState(0);
 
    // increment 1
    const increment = () => {
      setCounter(counter + 1);
    }
   
    // handle button click event to add 5 in counter
    const AddFive = () => {
      for (let i = 0; i < 5; i++) {
        setCounter(prevState => prevState + 1);
      }
    }


  return (
    <div>
    <b>Counter: Value Update</b><br /><br />
    <label>Counter: {counter}</label><br /><br />
    <button onClick={increment}>Add +1</button> 
    <button onClick={AddFive}>Add +5</button>
  </div>
  )
}
