import React, { useState,useEffect } from 'react'

export const ChildComponent = ({Numbers}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
      setItems(Numbers());
      console.log("Inside the child component")
    }, [Numbers])
    
  return (
    <div>   
        {items.map(item=><div key={item}>{item}</div>)}
    </div>
  )
}
