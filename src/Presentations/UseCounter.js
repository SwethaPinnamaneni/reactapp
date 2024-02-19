import React, { useState } from 'react'

const UseCounter = (initValue=0,value=1) => {
    const [count,setCount]=useState(initValue);
    const decrement=()=>{
        setCount(preValue=>preValue-value);
    }
    const increment=()=>{
        setCount(preValue=>preValue+value);
    }
    const reset=()=>{
        setCount(0);
    }
    
    return [count,increment,decrement,reset]
   
}

export default UseCounter