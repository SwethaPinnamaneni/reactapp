import { useState } from "react";

const BasicUseState=()=>{
    const [count,setCount]=useState(1);
    return (
        <div>
            {count}
            <br/>
            <button onClick={()=>{
                setCount(count+1)
            }}
            >Increment</button>&nbsp;
            <button onClick={()=>{
                setCount(count-1)
            }}> Decrement</button>
        </div>
    )
}
export default BasicUseState;