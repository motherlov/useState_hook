import React from 'react'
import { useState } from 'react';
import Box from './Box';

export default function UseState_Props() {
    const [state, setState] = useState();

  return (
    <div>
       <h1>Hello UseState Props</h1>
            <button onClick={() => setState(Math.random(10))}>Click Me</button>
            <div>parent state: {state}</div>
            {/* parent state   */}
            <Box num={state} />
            {/* child state props */}
    </div>
  )
}
