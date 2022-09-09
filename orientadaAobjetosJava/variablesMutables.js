// Before React Hooks: Imperative Programming Paradigm
// This is an ES6 class extending from React.Component, with an internal state:
import React, { Component } from "react";
export default class Button extends Component {
  constructor() {
    super(); // Prototypal inheritance is explicit here
    this.state = { buttonText: "Click me, please" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // We directly mutate the state and specify exactly how to do so (imperative paradigm)
    this.setState(() => {
     return { buttonText: "Thanks, been clicked!" };
  });
  }
  render() {
    const { buttonText } = this.state;
    return <button onClick={this.handleClick}>{buttonText}</button>;
  }
}

 
// Refactored using React Hooks: Declarative Programming Paradigm
import React, { useState } from "react";
export default function Button() {
  const [buttonText, setButtonText] = useState("Click me, please");
  function handleClick() {
    // We declare the state should change but don't specify how to do it (functional paradigm)
    return setButtonText("Thanks, been clicked!");
  }
  return <button onClick={handleClick}>{buttonText}</button>;
}