import React, { Component } from "react";
import { MyContext } from "./Context";

export default class ClassComponent extends Component {
  render() {
    return (
      
      <MyContext.Consumer>{(Message)=><div>{Message.myValue} </div>}</MyContext.Consumer>
        /*  {this.context.myValue}
    {console.log(this.context)} */
     
    );
  }
}
ClassComponent.contextType = MyContext;
