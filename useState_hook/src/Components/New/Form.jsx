import React from 'react'
import { useState } from 'react'
export default function Form() {
    const [user, setUser] = useState({ fullname: "", email: "", password: "" });

    const handleChange = (event) => {
      setUser({ ...user, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
      event.preventDefault(); //event.preventdefault() is to prevent the page from re-rending


      console.log("user created", user);
    };
  return (
    <div className="container" style={{width: "100%", height: "100vh", display: "flex",justifyContent: "center", paddingTop: "10vh",
    backgroundColor:" rgba(243, 244, 246, var(--tw-bg-opacity))"}}>
    <div className="form-container"
     style={{ width: "300px", height: "260px", backgroundColor:" white", fontFamily: "Montserrat",  padding: "10px",
  twShadow:" 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
  }} >
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          name="fullname"
          onChange={handleChange}
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          autoComplete="off"
        />
        <label htmlFor="password">Passoword</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          autoComplete="off"
        />
        <div className="submit-btn">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
  )
}
