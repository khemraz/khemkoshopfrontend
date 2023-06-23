import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { userRegister } from '../api/userAPI'
import { Navbar } from '../components/Layouts/Navbar'


const Register = () => {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [success,setSuccess]=useState(false)

  const handleSubmit=e=>{
    e.preventDefault()
    userRegister(username,email,password)
    .then(data=>{
      if(data.error){
        
          setError(data.error)
          setSuccess(false)
        }
        else{
          setSuccess(true)
          setError('')
        }
      
    })
  }

  const showError=()=>{
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const showSuccess=()=>{
    if(success){
      return <div className='alert alert-success'>User Registered SUccesfully</div>
    }
  }
  return (
    <div>
           <Navbar/>

<div className='row justify-content-center'>
    <div className='col col-sm-12 col-md-10 col-lg-8 col-xl-5'>
         <main className="form-signin w-100 m-auto my-5 border border-5 border-secondary rounded-5 p-5 shadow-lg">
    <form>
    <div className='text-center'>
    <img className="mb-4" src="../images/logo.png" alt="" width="72" height="57"/>

    </div>
      <h1 className="h3 mb-3 fw-normal">REGISTER</h1>
      {showError()}
      {showSuccess()}


      <div className="form-floating my-3">
        <input type="text" className="form-control" id="fname" placeholder="firstname" onChange={e=>setUsername(e.target.value)}/>
        <label htmlfor="fname">Username</label>
      </div>
      <div className="form-floating my-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
        <label htmlfor="floatingInput">Email address</label>
      </div>
      <div className="form-floating my-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
        <label htmlfor="floatingPassword">Password</label>
      </div>

      {/* <div className="form-floating my-3">
        <input type="date" className="form-control" id="dob" placeholder="firstname"/>
        <label htmlfor="dob">Date Of Birth</label>
      </div>
      <div className="form-floating my-3">
        <input type="number" className="form-control" id="phone" placeholder="Phone Number"/>
        <label htmlfor="phone">Phone Number</label>
      </div>

      

      <div className="form-floating my-3">
       <div className="form-control d-flex justify-content-evenly">
        <div className="form-radio">
            <input type="radio" name="gender" id="m" className="me-2"/><label htmlfor="m">Male</label>
        </div>
        <div className="form-radio">
            <input type="radio" name="gender" id="f" className="me-2"/><label htmlfor="f">Female</label>
        </div>
        <div className="form-radio">
            <input type="radio" name="gender" id="o" className="me-2"/><label htmlfor="o">Other</label>
        </div>
       </div>
       <label htmlfor="">Gender</label>
      </div>

      <div className="form-floating my-3">
        <select className="form-control">
            <option value="">(select your location)</option>
            <option value="">Skt</option>
            <option value="">Lalitpur</option>
            <option value="">Bhaktapur</option>
        </select>
        <label htmlfor="add">Address</label>
      </div>

      <div className="form-floating">
        <textarea className="form-control" id="desc"></textarea>
        <label htmlfor="desc">About</label>
      </div>

    
      <label htmlfor="file_up">Citizenship image:</label>
        <input type="file" className="form-control" id="file_up" placeholder="Upload file here"/> 
         <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> I accept <Link to="">terms snd condition
        </Link>         </label>
      </div>
      */}
       <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign up</button>
      Already,have an account? <Link to='/signin'>signin</Link>
      <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </form>
  </main>
    </div>
    </div>
    </div>
  )
}

export default Register