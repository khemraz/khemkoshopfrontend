import React, { useContext } from 'react'
import Display from './Display'
import { GlobalContext } from './GlobalContext'

const Info = () => {

  let info=useContext(GlobalContext)

  return (
    <div>
      <h1>{info}</h1>
        <Display name='Khem' address='kathmandu' phone='12345'/>
    </div>
  )
}

export default Info