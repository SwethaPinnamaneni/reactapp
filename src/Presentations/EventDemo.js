import React, { useState } from "react";

export const EventDemo = () => {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState();
  const [bgcolor,setBgColor]=useState();
  const handleChange = (event) => {
    setName(event.target.value);
    setDisplay("");
    setBgColor(event.target.value);
    
  };
  const handleClick = (event) => {
    setDisplay(name);
    setName("");
    setBgColor(bgcolor);
  };
  return (
    <div style={
      {
        backgroundColor:bgcolor,
        minHeight:'100vh'
      }
    }>
      <label>Enter your fav color:</label>
      <input value={name} onChange={handleChange} maxLength={10}/>
      <button onClick={handleClick}>Click</button>
      {display}
    </div>
  );
};
