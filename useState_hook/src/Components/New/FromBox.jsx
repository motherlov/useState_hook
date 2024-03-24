import React from 'react'
import { useState } from 'react';
export default function FromBox() {

    const [max, setMax] = useState();
    //   const maxHandle = (e) => {
    //     const helo = e.target.value;
    //     if (helo === "" || (helo <= 50 && helo >= 0)) {
    //       setMax(helo);
    //     }
    //   };
  
    const maxHandle = (e) => {
      const helo = e.target.value;
      if (helo === "" || helo.length <= 50) {
        setMax(helo);
      }
    };
  



  return (
    <>
   <div className="App">
        {/* {/ <input type="number" value={max} onChange={maxHandle} max="50" /> /} */}

        <div className="App">
        <h1></h1>
          <textarea type="text" value={max} onChange={maxHandle} />
          <p>Numbers: {(max ? max.length : 0)}</p>
        </div>
      </div>
    </>
  )
}
