import React, { Component } from "react";
import resume from "../assets/resume.pdf";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    const root = "https://jacobmoore.dev/";

    if (process.env.NODE_ENV !== "production") {
      this.setState({ scrolled: true });
    }

    window.addEventListener("scroll", () => {
      if (window.location.href === root) {
        this.setState({ scrolled: true });
      }
    });

    if (window.location.href !== root) {
      this.setState({ scrolled: true });
    }
  }

  render() {
    return (
      <nav
        className="navbar navbar-default navbar-fixed-top"
        style={{ top: this.state.scrolled ? 0 : -75 }}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to={"/#landing-top"}>
              <a className="navbar-brand">JACOB MOORE</a>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="https://github.com/jmooree30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navv"
                >
                  GITHUB
                </a>
              </li>
              <li>
                <a href={resume} target="_blank" className="navv">
                  RESUME
                </a>
              </li>
              <li>
                <Link to={"/#fifty"} className="navv">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="navv">
                  BLOG
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
