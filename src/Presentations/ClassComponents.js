import React, { Component } from "react";

export default class ClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "swetha",
      age: 22,
    };
    this.updateState=this.updateState.bind(this);
  }
  updateState() {
    this.setState = {
      name: "Swetha",
      age: 23,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <button type="submit" onClick={() =>this.updateState()}>
          Click
        </button>
      </div>
    );
  }
}
