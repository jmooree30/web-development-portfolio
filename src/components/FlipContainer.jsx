import React, { Component } from "react";

class FlipContainer extends Component {
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
