import React from 'react'
import { useState,useEffect } from 'react';
export default function Box({num}) {
    const [state, setState] = useState(num);
    useEffect(() => {
        setState(num);
      }, [num]);
  return (
    <div>child state: ${state}</div>
  )
}
