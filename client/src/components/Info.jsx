import React, { Component } from "react";
import me from "../assets/jacob-moore.jpg";
import "../styles/info.css";

export default class Info extends Component {
  render() {
    return (
      <div className="info-container">
        <img className="info-image" src={me} />
        <p>Jacob Moore - Full Stack Web Developer</p>
        <p>September 20, 2018 </p>
      </div>
    );
  }
}
