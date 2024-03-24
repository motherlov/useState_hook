import React from "react";
import { useState } from "react";
function Parent() {
  const [fName, setfName] = useState("soumen naskar");
  const [First,setFirst] = useState([]);
//   const [lName, setlName] = useState("LastName");

const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${fName}`)
  }
  

  return (
    <>
      <div>This is a Parent component</div>
      <br />
      <form>
      <label>First Name</label>
      <input
        type="text"
        placeholder=" Enter your name"
        value={fName}
        onChange={(e) => {
          setfName(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <h1> my Fist name : {fName}</h1>
       
    </>
  );
}

export default Parent;
