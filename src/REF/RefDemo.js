import React,{useEffect, useRef, useState} from 'react'

export const RefDemo = () => {
    const inputRef = useRef(0)
    const inputElement=useRef();
    const preValue=useRef("")
    const [inputValue, setInputValue] = useState("");
    useEffect(()=>{
        inputRef.current++
        preValue.current=inputValue
       
    },[inputValue])
    const focusInput=()=>{
        inputElement.current.focus();
    }
  return (
    <div>
       { /* <input onChange={(event)=>{
            setInputValue(event.target.value)
        }}/>
        <p>current Value:{inputValue}</p>
        <p>preValue Value:{preValue.current}</p>
    I rendered {inputRef.current} times */}
        <input type='text' ref={inputElement}/>
        <button onClick={focusInput}>Focus button   </button>
       
    </div>
  )
}
