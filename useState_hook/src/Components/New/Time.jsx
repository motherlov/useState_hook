import React from 'react'
import { useEffect, useState } from 'react';
export default function Time() {

    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => { //setInterval is a method that calls a function or runs some code after specific intervals of time
         // the component to re-render with the current time
                                         //whenever the setTime() function is called.
                                         //setInterval() to update a component every second
      setTime(new Date());     // interval that will call the setTime() function every 1000 milliseconds (or 1 second)
    }, 1000);

    return () => clearInterval(interval);//A function or block of code that is bound to an interval executes until it is stopped
  }, []);

  return (
    <div>
      
      <p><b>The current time is: {time.toLocaleTimeString()}</b></p>
      {/* The toLocaleTimeString() method returns the time portion of a date object as a string, */}
    </div>
  )
}
