
import React from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import { useState } from 'react';
export default function ColorChange() {
   
  const [color, setColor] = useState(null);
  console.log("colorPicker", color);
  return (
  

  <div>
  <h1>Color .....Picker.... </h1>
  <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
</div>
  )
}
