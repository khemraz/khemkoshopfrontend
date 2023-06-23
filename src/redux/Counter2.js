import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter2 = () => {
    const [gameName,setgameName]=useState('')
    const [playerName,setplayerName]=useState('')



    // const counterStore=useSelector(store=>store)
    
    // const counterStore=useSelector(store=>store)
    // const count =counterStore.count

    //destructuring
    const {count,data} =useSelector(store=>store.counter)
    // const dispatch=useDispatch()


    const {game}=useSelector(store=>store.game)
    const {player}=useSelector(store=>store.game)


    const dispatch=useDispatch()
    
  return (
    <div>
        <h1 className='display-1 text-center'>Count:{count}</h1>
        <button className="btn btn-primary"onClick={()=>{
            return dispatch({type:"INCREASE Count"})
        }}>Increase Count</button>

<button className="btn btn-danger"onClick={()=>{
            return dispatch({type:"DECREASE Count"})
        }}>Decrease Count</button>

<button className="btn btn-success"onClick={()=>{
            return dispatch({type:"RESET Count"})
        }}>Reset Count</button>
        <br/>

        <h1 className='display-1 text-center'>Data:{data}</h1>
        <button className="btn btn-primary"onClick={()=>{
            return dispatch({type:"INCREASE data"})
        }}>Increase Data</button>

<button className="btn btn-danger"onClick={()=>{
            return dispatch({type:"DECREASE data"})
        }}>Decrease Data</button>

<button className="btn btn-success"onClick={()=>{
            return dispatch({type:"RESET data"})
        }}>Reset Data</button>

        <h1 className='display-1 text-center'>Game:{game}</h1>
        <input type='text' placeholder='enter game here' className='form-control' onChange={(e)=>{setgameName(e.target.value)}}/>
        <button className='btn btn-warning' onClick={()=>dispatch({
            type:"UPDATE_GAME",
            payload:gameName
        })}>Update Game</button>

<h1 className='display-1 text-center'>Player Name:{player}</h1>
        <input type='text' placeholder='enter Player Name here' className='form-control' onChange={(e)=>{setplayerName(e.target.value)}}/>
        <button className='btn btn-warning' onClick={()=>dispatch({
            type:"UPDATE_PLAYER",
            payload:playerName
        })}>Update Player</button>
        
        
        
    </div>
  )
}

export default Counter2