import React, { useState, useMemo, useEffect, useCallback } from "react";
import { ChildComponent } from "./ChildComponent";

/* const slowFunctionRender = (num) => {
  for (let index = 0; index < 1000000; index++) {
    return num * 2;
  }
}; */

export const MemoDemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  /*  const doubleValue = useMemo(() => {
    return slowFunctionRender(number);
  }, [number]); */

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  const Numbers = useCallback((incrementer) => {
    return [number + incrementer, number + incrementer, number + incrementer];
  });

  /*   useEffect(() => {
    console.log("Iam being rendered");
  }, [themeStyle]); */
  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(Numbers(e.target.value));
        }}
      ></input>
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        Toggle theme
      </button>
      {console.log(Numbers)}
      {/*    <div>{doubleValue}</div> */}
      <ChildComponent Numbers={Numbers} />
    </div>
  );
};
