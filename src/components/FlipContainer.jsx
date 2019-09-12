import React, { Component } from "react";

class FlipContainer extends Component {
  componentDidMount() {
    const flipper = document.querySelectorAll(".flipper");
    let counter = 0;
    setInterval(function() {
      flipper[counter].className += " flip-it";
      setTimeout(function() {
        flipper[counter].className = " flipper";
        counter++;
        if (counter === 6) counter = 0;
      }, 1500);
    }, 3000);
  }
  render() {
    return (
      <div className="flip-container">
        <div className="flipper">
          <div className="front">
            <a href={this.props.url} target="_blank">
              <img className="fill" src={this.props.project} alt="" />
            </a>
          </div>
          <div className="back">
            <i
              className={this.props.icon}
              style={{ color: this.props.style }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FlipContainer;
