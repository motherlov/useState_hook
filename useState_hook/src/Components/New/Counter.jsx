import React from 'react'
import { useState } from 'react'
//import Image5 from '../../Image/img3.jpg'
export default function Counter() {
    const [count, setcount] = useState(0);// useState syntax....  0 is intialize state(boolean,number,string,array)
    // count is current state
    // setcount Afunction that updates the state
    console.log(count, "count");          // remember  count = 0 (initalize)   count store value  0
    const increment = () => {                  //arrow function ....... fuction name is   Increment
       if(count<10){
      setcount(count + 1);
      }else{
        alert("Sorry, 10 Limit Reached");
        setcount(10);
      }
    };
  
    const decrement = () => {              //arrow function ....... fuction name is   decrement
      if(count > -10){
      setcount(count - 1);
      }else{
        alert("Sorry, -10 Limit Reached");
        setcount(-10);
      }
    };
  return (
    <div>
    {/* <img src={Image5} style={{height:"400px", width:"400px"}} /> */}
  <h1>{count}</h1>
  <button onClick={increment}>Increment</button>
        <button onClick={decrement}>DECREMENT</button>
     
    </div>
  )
}
