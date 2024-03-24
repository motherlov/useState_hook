import React, { memo, useState } from 'react'

const CompB = () => {
    const [num,setNum]= useState(1);
    
    const numTog = ()=>{
        {num != 1 ? setNum(1) : setNum(2)}
    }
    useState(()=>{
        numTog()
    })
  return (
    
    <div>
        <button onClick={numTog}>button</button>
        {console.log("b clicked")}

    </div>
  )
}

export default memo(CompB)///           memo use this method