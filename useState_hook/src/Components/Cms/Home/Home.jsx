import React from 'react'

import { useState } from 'react';

import Image5 from '../../Image/img3.jpg'
 import Homeport from '../Homepart/Homepart'
export default function Home() {
  const [count, setcount] = useState(0);// useState syntax....  0 is intialize state(boolean,number,string,array)
  // count is current state
  // setcount Afunction that updates the state
  console.log(count, "count");          // remember  count = 0 (initalize)   count store value  0
  const like = () => {                  //arrow function ....... fuction name is   like
    setcount(count + 1);
  };

  const dislike = () => {              //arrow function ....... fuction name is   dislike
    setcount(count - 1);
  };

  return (
<>
<img src={Image5} style={{height:"400px", width:"400px"}} />
<h1>{count}</h1>
<button onClick={like}>LIKE</button>
          {/* function call  like */}
      <button onClick={dislike}>DISLIKE</button>
      {/* function call  dislike */}
     <Homeport/>
     {/* Home is parent and  Homepart is child(parent er modhe child call kora hoye che) */}
</>
  )
}
