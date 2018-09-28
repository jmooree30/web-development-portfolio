import React, { Component } from "react";
import cap from "../assets/cap.jpg";
import counter from "../assets/counter.jpg";
import cross from "../assets/cross.jpg";
import cross2 from "../assets/cross2.jpg";
import tub from "../assets/tub.jpg";
import bowl from "../assets/bowl.jpg";
import fabicon from "../assets/fabicon.jpg";
import "../styles/fab.css";

export default class Fab extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="top-container">
          <div className="header-wrapper">
            <div className="header" id="header">
              Custom Architectural Sheet Metal Fabrication
            </div>
          </div>
          <div className="elipse">
            <div className="background-image-fab" />
          </div>
        </div>
        <div className="wrapper">
          <div className="fab-content">
            <p className="fab-content">
              I've always enjoyed building things and that hasn't been limited
              to just websites. For the last few years while I've been studying
              web development I've worked as a custom architectural sheet metal
              fabricator. It may seem unrelated to web development, but the
              philosphy is the same; listen closely to what the client wants and
              produce a seamless finished product.{" "}
            </p>
          </div>
          <h4 className="fab-img-text">Chimney cap with a radius profile</h4>
          <img className="images" src={cap} />
          <h4 className="fab-img-text">
            Copper countertop with a darkened finish
          </h4>
          <img className="images" src={counter} />
          <h4 className="fab-img-text">Aluminum finials</h4>
          <img className="images" src={cross} />
          <h4 className="fab-img-text">Aluminum finials</h4>
          <img className="images" src={cross2} />
          <h4 className="fab-img-text">
            Sink and tub made to fit in an antique wooden frame
          </h4>
          <img className="images" src={tub} />
          <h4 className="fab-img-text">Stainless steel bowl holder</h4>
          <img className="images" src={bowl} />
        </div>
      </div>
    );
  }
}
