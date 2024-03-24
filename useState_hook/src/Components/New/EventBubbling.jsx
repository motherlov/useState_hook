import React from 'react'

export default function EventBubbling() {
   const ParentEvent = (event) =>{
       console.log("Hello i am ParentEvent",event);
   }
   const ChildEvent =(event) =>{
    console.log(' Hello i am Child',event);
    // event.stopPropagation();
    event.stopPropagation();

   }

  return (
    <div onClick={ParentEvent}>
    <h1> Event Bubbling and stopPropagation </h1>
      <button  onClick={ChildEvent} >Child Button</button>
    </div>
  )
}
