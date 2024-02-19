import React, { useEffect, useState } from 'react'

export const UseEffectExample = () => {
    const[data,setData]=useState("");
    const[count,setCount]=useState(0);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=>response.json())
        .then(resData=>{
            console.log(resData[0].email);
        })
    },[])
    return (
        <div>
        <h1>{data}</h1>
        <h1>Count</h1>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}
        >Change Email</button>
          <p>{count}</p>
        </div>
      );
}
