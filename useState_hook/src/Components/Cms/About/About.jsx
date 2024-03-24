import React from 'react'
import Image4 from '../../Image/pexels-photo-2399840.jpeg'
import Image5 from '../../Image/img3.jpg'
import Image6 from  '../../Image/circuit-circuit-board-resistor-computer-163100.jpeg'
export default function About() {
  return (
   <div className='container'>
    <div class="row">
    <div class="col-md-4">
      <div class="card"  style={{width: "20rem"}}>
      <img src={Image5} class="card-img-top" alt="..." height={"90px"} width={"50px"} />
        <div class="card-body">
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card"  style={{width: "20rem"}}>
      <img src={Image4} class="card-img-top" alt="..." height={"90px"} width={"50px"} />
        <div class="card-body">
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
       
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card"  style={{width: "20rem"}}>
      <img src={Image6} class="card-img-top" alt="..." height={"90px"} width={"50px"} />
        <div class="card-body">
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
       
        </div>
      </div>
    </div>
  </div>
<br/>
  <div class="card mb-3" style={{width: "20rem"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={Image4} alt="..." height={"90px"} width={"50px"}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
     
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

  </div>
  
  
  )
}
