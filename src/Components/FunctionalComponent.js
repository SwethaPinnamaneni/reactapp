import React from "react";
import { useState } from "react";
import Functional from "./Functional";
export const FunctionalComponent = () => {
  const[count,setCount]=useState(0)
  const [example, setExample] = useState({
    name: "Swetha",
    age: 24,
  });
  const updateValue = () => {
    console.log(example);
    const exam = example;
    example.address = "Bangalore";
    setExample(exam);
    setCount(count+1)
    console.log(exam);
  };
  return (
    <div>
      <br />
      <button onClick={updateValue}>Click Here</button>
      {count}
      {example.name}
      <br />
      {example.age}
      <br />
      {example.address}
      <Functional object={example}
       updateValue={updateValue}
       />
    </div>
  );
};
