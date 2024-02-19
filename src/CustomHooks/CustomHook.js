import React,{useEffect,useState} from 'react'

export const CustomHook = (url) => {
    const[data,setData]=useState("");
    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(resData=>{setData(resData);
        })
    },[url])
  return [data];
} 