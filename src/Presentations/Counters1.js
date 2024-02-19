import React,{useState} from "react";
import UseCounter from './UseCounter'

export const Counters1 = () => {
 // const [count, setCount] = useState(10);
  const [count,increment,decrement,reset]=UseCounter(10,10);
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
  );
};
