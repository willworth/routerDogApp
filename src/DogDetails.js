import React, { Component } from "react";

export default class DogDetails extends Component {
  render() {
    return (
      <div>
        <h1>dog detail</h1>
        <h2>{this.props.dog.name}</h2>
      </div>
    );
  }
}
