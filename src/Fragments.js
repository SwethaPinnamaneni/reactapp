import React, { Fragment } from "react";



export const Fragments = ({SampleData}) => {
  return (
<>
    {SampleData.map((i,id)=>{
        return <React.Fragment key={id}>
        <div className="fragment-body">
        <h1>{i.id}</h1>
        <h1>{i.name}</h1>
        </div>
        </React.Fragment>
    })}
   </> 
);
};
