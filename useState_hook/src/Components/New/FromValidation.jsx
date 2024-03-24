 import React, { useState } from "react";
import axios from "axios";
export default function FromValidation() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const validation = () => {
    let error = {};
    console.log(error, "error");
    if (!user.first_name) {
      error.first_name = "First Name Is null";
    }
    if (!user.last_name) {
      error.last_name = "Last Name Is null";
    }

    if (!user.email) {
      error.email = "Email Is null";
    }else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)){
        error.email ="email must have regular expression"
    }

    if (!user.password) {
      error.password = "password Is null";
    }else if((!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(user.password))){
        error.password="Conditions: Uppercase Lowercase Regular Expression length 6 - 16 needed"
    }

    return error;
  };
  const submitData = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("first_name", user.first_name);
    formdata.append("last_name", user.last_name);
    formdata.append("email", user.email);
    formdata.append("password", user.password);

    setError(validation());

    // try {
    //   const response = await axios.post("https://wtsacademy.dedicateddevelopers.us/api/user/signup",formdata, {
    //       headers: {
    //         "Content-Type": "multipart/form-data", // Use 'multipart/form-data' for FormData
    //       },
    //     }
    //   );

    //   console.log("res data: ",response.data)
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const submit = (e) => {
    e.preventDefault();
    setError(validation());
    submitData(e)
  };

  let name, value;
  const PostUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name == "first_name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "First Is null" });
        setUser({ ...user, first_name: "" });
      } else {
        setError({ ...error, first_name: "" });
        setUser({ ...user, first_name: value });
      }
    }
    if (name == "last_name") {
        if (value.length === 0) {
          setError({ ...error, last_name: "last Is null" });
          setUser({ ...user, last_name: "" });
        } else {
          setError({ ...error, last_name: "" });
          setUser({ ...user, last_name: value });
        }
      }
      if (name == "email") {
        if (value.length === 0) {
            
          setError({ ...error, email: "email Is null" });
          setUser({ ...user, email: "" });
        } else {
          setError({ ...error, email: "" });
          setUser({ ...user, email: value });
        }
      }
      if (name == "password") {
        if (value.length === 0) {
          setError({ ...error, password: "password Is null" });
          setUser({ ...user, password: "" });
        } else {
          setError({ ...error, password: "" });
          setUser({ ...user, password: value });
        }
      }
  };

  console.log(value, "value");
  return (
    <>
    <div className="Box">
      <div className="TextBox" >
        <input name="first_name"   value={user.first_name} onChange={PostUserData} placeholder="First_name"/>
        <span style={{ color: "red" }}>{error?.first_name}</span>
      </div>

      <div className="TextBox" >
        <input name="last_name" onChange={PostUserData} value={user.last_name} placeholder="Last_name" />
        <span style={{ color: "red" }}>{error?.last_name}</span>
      </div>

      <div className="TextBox" >
        <input onChange={PostUserData} name="email" value={user.email} placeholder="E-Mail" />
        <span style={{ color: "red" }}>{error?.email}</span>
      </div>

      <div className="TextBox" >
        <input onChange={PostUserData} name="password" value={user.password} placeholder="password" />
        <span style={{ color: "red" }}>{error?.password}</span>
      </div>

      <button className="SubmitButton" onClick={submit}>Button</button>
      </div>
    </>
  );
}