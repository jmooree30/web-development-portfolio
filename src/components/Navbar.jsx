import React, { useState, useEffect } from "react";
import resume from "../assets/resume.pdf";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = "https://jacobmoore.dev/";

    if (process.env.NODE_ENV !== "production") {
      setScrolled(true);
    }

    const handleScroll = () => {
      if (window.location.href === root) {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (window.location.href !== root) {
      setScrolled(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-default navbar-fixed-top"
      style={{ top: scrolled ? 0 : -75 }}
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
};

export default Navbar;
