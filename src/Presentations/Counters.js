import React,{useState} from 'react'
import UseCounter from './UseCounter'

export const Counters = () => {
    // const [count, setCount] = useState(0);
    const [count,increment,decrement,reset]=UseCounter(1,1);
  return (
    <div>
      <h1>Component 1</h1>
    <h2>Count {count}</h2> 
         {/*   <br/>
            <button onClick={()=>{
                setCount(count+1)
            }}
            >Increment</button>&nbsp;
            <button onClick={()=>{
                setCount(count-1)
            }}> Decrement</button>
             <button onClick={()=>{
                setCount(0)
            }}> Reset</button>
         */}
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <button onClick={reset}>Reset</button>
    </div>
  )
}
