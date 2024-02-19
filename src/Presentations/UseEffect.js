import { useEffect, useState } from "react"
import React from 'react'

export const UseEffect = () => {
  const [count,setCount]=useState(0);
    useEffect(() => {
        setCount((preValue)=>preValue+1)
        console.log("Component didMount")
    }, [])
    useEffect(() => {
      setTimeout(() => {
      setCount((preValue)=>preValue+1)
        console.log("Component didUpdated")
      },1000)
    }, [count])
    
    const handleClick=()=>{
        setCount((preValue)=>preValue+1)
    }
  return (
    <div>
        {count}
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
