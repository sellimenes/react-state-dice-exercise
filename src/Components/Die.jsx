import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    return (
      <div>
        <i className={this.props.classDice} />
      </div>
    );
  }
}
