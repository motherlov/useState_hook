import React, { useContext } from "react";
// import NoteContex from "./Context";
import NoteContex from "./Context";

export default function Page() {
  const data = useContext(NoteContex);
  console.log(data, "data");
  return (
    <div>
      <h1>{data.phone}</h1>
      <h1>{data?.name}</h1>
      <h1>{data?.email}</h1>
    </div>
  );
}