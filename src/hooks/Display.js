import React from 'react'

// const Display = (props) => {
//    // destructuring object
//     const {name,address,phone}=props

//direct destructuring
const Display = ({name,address,phone}) => {
  return (
    <div>
        {/* <h1>Name: {props.name}</h1>
        <h2>Address: {props.address}</h2>
        <h2>Phone: {props.phone}</h2> */}

<h1>Name: {name}</h1>
        <h2>Address: {address}</h2>
        <h2>Phone: {phone}</h2>
    </div>
  )
}

export default Display