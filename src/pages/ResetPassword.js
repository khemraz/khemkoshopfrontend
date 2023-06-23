import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { resetPassword } from '../api/userAPI'
import { Navbar } from '../components/Layouts/Navbar'

const ResetPassword = () => {
  const {token} = useParams()
  const [password,setPassword]=useState('')

  let [error,setError]=useState('')
  let [success,setSuccess]=useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    resetPassword(token,password)
    .then(data=>{
      if(data.error){
        setError(data.error)
      }
      else{
        setSuccess(data.message)
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
        return <div className='alert alert-success'>{success}</div>
    }
}


  return (
    <div>
        <Navbar/>
        {showError()}
        {showSuccess()}
        <form className='w-50 m-auto p-5 shadow-lg'>
          <h2>ResetPassword</h2>
          <h4>Email:</h4>
            <label htmlFor='pwd'>New Password</label>
            <input type={'password'} id='pwd' className='form-control' onChange={e=>setPassword(e.target.value)}/>
            <button className='btn btn-warning mt-2' onClick={handleSubmit}>Reset Password</button>
        </form>
    </div>
  )
}

export default ResetPassword