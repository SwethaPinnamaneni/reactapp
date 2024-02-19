import React, { useState, useEffect } from "react";

export const EffectDemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setCount((preValue) => preValue + 1);
    }, 1000);
  }, [inputValue]);
  return (
    <div>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <p>{count}</p>
    </div>
  );
};
