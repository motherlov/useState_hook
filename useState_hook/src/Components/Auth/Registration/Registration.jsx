import React from 'react'

export default function Registration() {
  return (
    <div className='container'>
    <h1>Registration From</h1>
    <form>

    <div class="form-group row">
    <label for="inputName" class="col-sm-2 col-form-label">First Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputName" placeholder="Enter First Name"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputName" class="col-sm-2 col-form-label">Last Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputName" placeholder="Enter Last Name"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email"  class="form-control" id="inputEmail" placeholder="email@example.com"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">PH NO.</label>
    <div class="col-sm-10">
      <input type="tel" maxLength={10}  class="form-control" id="inputEmail" placeholder="76879876789"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Address</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control" id="inputEmail" placeholder="Address"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Image</label>
    <input type="file" class="form-control" id="inputPassword"/>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Register</button>
    </div>
  </div>
</form>
    </div>
  )
}
