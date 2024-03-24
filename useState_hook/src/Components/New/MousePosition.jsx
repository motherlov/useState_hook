import React, { useEffect, useState } from 'react';

export default function MousePosition() {
    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
      const WindowMouseMove = (event) => {
        setCoords({
          x: event.clientX,
          y: event.clientY,
        });
      };
      window.addEventListener('mousemove', WindowMouseMove);
  
      return () => {
        window.removeEventListener( 'mousemove',WindowMouseMove, );
      };
    }, []);

  return (
    <div>
      <p>
      <b>
        Mouse positioned at:{' '}</b>
        <b class="btn btn-primary">
          ({coords.x}, {coords.y})
        </b>
      </p>
    </div>
  )
}
