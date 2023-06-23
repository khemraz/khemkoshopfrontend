import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
  let style_obj={
    fontSize:"24px",
    color:"red",
    width:"100%",
    textAlign:"center",
    padding:"10px"

  }
  return (
    <div>
        <h1>Hello!!</h1>
        <br/>
        <input type={'text'}/>
        <div className='demo' style={style_obj}>Hello</div>
        <div className='container bg-primary p-5 h2'>Hello KHEM</div>
        <div><i className='bi bi-instagram'></i>My insta</div>
        <Link to='/second'>Go to second page</Link>
    </div>
  )
}


export default First

