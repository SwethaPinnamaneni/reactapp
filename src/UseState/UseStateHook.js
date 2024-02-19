import React, { useState } from "react";

export const UseStateHook = () => {
  const [inputValue,setInputValue] = useState({
    name:"",
    age:0,
    address:""
});
const [text,setText]=useState("")
let handler=(event) => {
    let name=event.target.name;
    let value=event.target.value;
    setInputValue({
        ...inputValue,
        [name]:value
    });
  }
  return (
    <div>
      <input
        placeholder="name"
        onChange={handler}
        value={inputValue.name}
        name="name"
      />
      <br />
      <input
        placeholder="age"
        onChange={handler}
        value={inputValue.age}
        name="age"
      />
      <br />
      <input
        placeholder="address"
        onChange={handler}
        value={inputValue.address}
        name="address"
      />
      <input onChange={(event)=>{
         setText(event.target.value);
      }}/>
      <br />
      {inputValue.name}
      <br />
      {inputValue.age}
      <br />
      {inputValue.address}
      <br/>
      {text}
    </div>
  );
};
