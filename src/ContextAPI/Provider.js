import React, { Component } from "react";
import { MyContext } from "./Context";

export default class Provider extends Component {
  // constructor() {
  //   super()

  //   this.state = {
  //      value:"Hello"
  //   }
  // }

  state = {
    Message: "hello from context",
  };
  render() {
    return (
      <MyContext.Provider value={{ myValue: this.state.Message }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
