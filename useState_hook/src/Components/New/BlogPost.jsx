import React from 'react'
import useParams from 'react'
export default function BlogPost() {
    let { id } = useParams();
  return (
    <div style={{ fontSize: "50px" }}>
<h4> showing post {id}</h4>
         </div>
  )
}
