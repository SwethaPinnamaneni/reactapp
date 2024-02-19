import React,{useContext} from 'react'
import Mycontext from './ContextDemo'
import './External.css'

export const ExampleContext = () => {
    const {value,setValue} = useContext(Mycontext)
  return (
    <div className={
        value.theme === "Light" ?
            "header" : "footer"
    }>
        {value.userName}
        {value.theme}
        <button onClick={()=>{
            setValue({
                ...value,
                theme:"Dark"
            })
        }}>Click</button>
        <button onClick={()=>{
            setValue({
                ...value,
                theme:"Light"
            })
        }}>Click</button>
        
    </div>
  )
}
