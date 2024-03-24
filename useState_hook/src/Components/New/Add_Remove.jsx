//how to add and remove array from usestate in react



import React, { useState } from 'react'

export default function Add_Remove() {

  const [list, setList] = useState([]);

  const Add = () => {
      const items = list;
      setList([...items, `Insert-${items.length}`]);
  };

  const Remove = () => {
      const items = list;
      if (items.length > 0) {
          const lastIndex = items.length - 1;
          setList(items.filter((item, index) => index !== lastIndex));
      }
  };
            

  return (
    
    <div>
    <div>List: {list.length} total items.</div>
    <button  onClick={Add}>Add</button>
    <button onClick={Remove}>Remove</button>
    <ul>
      {list.map((item, index) => (
        <li key={index ++}>{item}</li>
      ))}
    </ul>
  </div>
  )
}
