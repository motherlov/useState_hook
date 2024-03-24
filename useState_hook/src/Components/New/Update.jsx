import React, { useState } from 'react'


export default function Update() {

    const [on, setOn] = useState(false);
    const lightOn =() => setOn(true);
    const lightOff  = () => setOn(false);

  return (
    <div>
      <>
      <div className={on ? 'bulb-on' : 'bulb-off'} />
      <button onClick={lightOn}>On</button>
      <button onClick={lightOff}>Off</button>
    </>
    </div>
  )
}
