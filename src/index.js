import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelloWorld, Resume } from "./HelloWorld";
import { Constants } from "./HelloWorld";
import ListGroup from "./Components/ListGroup";
import Welcom from "./Welcom";

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    
  //   {/* <Welcom name="Swetha" age="24"/> */}
  //   {/* <ListGroup/> */}
  //   {/* <ClassApp name="Swetha"/> */}
  //   {/* <LoginControl /> */}
    
  // </React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
