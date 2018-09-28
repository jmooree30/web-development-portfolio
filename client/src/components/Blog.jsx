import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/blog.css";

export default class blogs extends Component {
  render() {
    return (
      <div className="blog-container">
        <div className="test" />
        <Link to="/bubble">
          <img className="blog-post-container" />
        </Link>
      </div>
    );
  }
}
