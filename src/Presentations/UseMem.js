import React, { useState } from "react";

export const UseMem = () => {
  const [value, setValue] = useState("");
  const [display, setdisplay] = useState([]);
  const handleClick = () => {
    setdisplay(display.concat([value]));
    setValue("");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add a product"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Click</button>
      {display.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
};
