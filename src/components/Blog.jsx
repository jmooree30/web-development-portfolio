import React, { Component } from "react";
import me from "../assets/me.JPEG";
import "../styles/blog.css";
import { HashLink as Link } from "react-router-hash-link";

export default class Blog extends Component {
  render() {
    return (
      <div className="blog-background">
        <br />
        <br />
        <div className="header">
          <h2>Recent Blog Posts..</h2>
        </div>
        <div className="row">
          <div className="leftcolumn">
            <div className="card">
              <h2>Dissecting a Bubble Sort</h2>
              <h5>Date - Dec 7, 2017</h5>
              <Link to={"/bubble"}>
                <div className="fakeimg" style={{ height: 200 }} />
              </Link>
              <p className="blog-about-me-text">
                Breaking down a bubble sort step by step using Javascript
              </p>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="card">
              <h2>About Me</h2>
              <img
                src={me}
                style={{
                  borderRadius: "50%",
                  height: "110px",
                  width: "130px"
                }}
              />
              <div className="blog-about-me-text">
                Full Stack Web Developer from Boston, MA. If I'm not
                programming, you should probably check if I have a pulse.
              </div>
            </div>
            <div className="card">
              <h3>Follow Me</h3>
              <p>
                <a href="https://github.com/Jmooree30" target="_blank">
                  <i className="fa fa-github" style={{ color: "green" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jacob-moore-2602b315b/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" style={{ color: "blue" }} />
                </a>
                <a
                  href="https://www.instagram.com/showmethecodez/"
                  target="_blank"
                >
                  <i className="fa fa-instagram" style={{ color: "purple" }} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
