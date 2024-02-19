import React, { useState } from 'react'

export const UseStates = () => {
    const [set,setCount]=useState(30);
    const [setIs,setisTimeOutOn]=useState(false);
    const handleClick=()=>{
        if(setIs==false){
            setCount(p=>p-1);
            setTimeout(handleClick,1000);
            setisTimeOutOn(true);
        }
        
    }
  return (
    <div>
        <h1></h1>
        <button onClick={handleClick}>Click</button>
        {set}
    </div>
  )
}