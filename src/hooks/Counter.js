import React, { useEffect, useState } from 'react'



const Counter = () => {
    let [count,setCount]=useState(0)
    let [khem,setKhem]=useState(0)
  
    useEffect(()=>{
        window.alert('value updated')
    })
    const incr_count=()=>{
        setCount(++count)
        console.log(count)
    }
    
        const increase_count=()=>{
            setKhem(
                khem+=100
            )
            console.log(khem)
            
    }
  return (
    <div>
        <div className='text-center'>
            <div className='display-1 text-center'>Counter:{count}</div>
            {
                count<10 &&
            <button className='btn btn-info' onClick={incr_count}>Increase</button>

            }
            {
                count>0 &&
                <button className='btn btn-danger' onClick={()=>{setCount(--count)
                    console.log(count)}}>Decrease</button>
            }
            {
                count!=0 &&
                <button className='btn btn-success' onClick={()=>{setCount(0)
                    console.log(count)}}>Reset</button>
            }
            
            
       

        </div>
        <div className='text-center'>
        
    <div className='display-1 text-center'>Counter:{khem}</div>
        <button className='btn btn-warning' onClick={increase_count}>Incr_data</button>
        <button className='btn btn-success' onClick={()=>{setKhem(0)
        console.log(count)}}>Reset</button>
            <button className='btn btn-danger' onClick={()=>{setKhem(count-=100)
        console.log(count)}}>Decrease</button>
       
        </div>
    

    </div>
  )
}

export default Counter