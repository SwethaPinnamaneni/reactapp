import React from "react";
import { CustomHook } from "./CustomHook";

export const FetchHook = () => {
  const [data] = CustomHook("https://jsonplaceholder.typicode.com/comments");
  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};
