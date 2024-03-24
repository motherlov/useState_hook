import React from 'react'

function Toggle_Reducer() {
    const [isOpen, toggleIsOpen] = useReducer((state) => {
        return !state;
      }, false);
  return (
    <div>
         <button onClick={toggleIsOpen}>Toggle isOpen</button>
         <p style={{ color: "green", fontSize: "30px" }}>
        <b>{isOpen ?   (
        <ul class="list-group">
          <li class="list-group-item">  First item</li>
          <li class="list-group-item"> second item</li>
          <li class="list-group-item"> third item</li>
          <li class="list-group-item"> fourth item</li>
          <li class="list-group-item"> fifth item</li>
        </ul>
      ) : "false"}</b>
      </p>
    </div>
  )
}

export default Toggle_Reducer