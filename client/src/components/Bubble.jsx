import React, { Component } from "react";
import Info from "./Info";
import "../styles/bubble.css";
import bubbleCode from "../assets/bubble-code.jpg";
import Comments from "./Comments";
import bubbles from "../assets/bubbles.jpg";

class Bubble extends Component {
  constructor() {
    super();
    this.state = {
      arr: [9, 8, 7, 6, 5, 4, 3, 2, 1],
      counter: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.bubbleSort(this.state.arr, 0, 0);
  }

  handleClick = event => {
    let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    this.setState({ arr: arr });
    this.bubbleSort(arr, 0);
  };

  bubbleSort(arr, num) {
    let that = this;
    let timer = setInterval(function() {
      if (arr[num] > arr[num + 1]) {
        let a = arr[num];
        let b = arr[num + 1];
        arr[num] = b;
        arr[num + 1] = a;
      }
      that.setState({ arr: arr });
      that.state.counter += 1;
      if (that.state.counter == 72) {
        clearInterval(timer);
        that.state.counter = 0;
        return;
      }
      if (num < arr.length) {
        clearInterval(timer);
        that.bubbleSort(arr, num + 1);
      } else {
        num = 0;
      }
    }, 50);
  }

  render() {
    return (
      <div>
        <div className="top-container">
          <div className="header-wrapper">
            <div className="bubble-wrapper white">
              <Info />
              <h1 className="blog-header">
                Javascript Sorting Algorithms: Dissecting a bubble sort
              </h1>
              <i className="bubble-quote">
                "Bubble sort is a simple sorting algorithm that repeatedly steps
                through the list to be sorted, compares each pair of adjacent
                items and swaps them if they are in the wrong order. The pass
                through the list is repeated until no swaps are needed, which
                indicates that the list is sorted."
              </i>
            </div>
          </div>
          <div className="elipse">
            <div className="background-image-bubble" />
          </div>
        </div>
        <div className="bubble-wrapper">
          <div className="bubble-container">
            <div id={this.state.arr[8]} />
            <div id={this.state.arr[7]} />
            <div id={this.state.arr[6]} />
            <div id={this.state.arr[5]} />
            <div id={this.state.arr[4]} />
            <div id={this.state.arr[3]} />
            <div id={this.state.arr[2]} />
            <div id={this.state.arr[1]} />
            <div id={this.state.arr[0]} />
          </div>
          <br />
          <div className="bubble-center">
            {this.state.arr.map((item, index) => (
              <span className="bubble-nums">{this.state.arr[index]}</span>
            ))}
            <br />
            <button
              onClick={this.handleClick}
              className="btn-md btn-info bubble-button"
              disabled={this.state.counter != 71}
            >
              Watch again
            </button>
            <br />
            <br />
            <p className="text">
              As you can see in the animation above, the array being sorted is
              the worst case scenario with a time complexity of O(n^2) with the
              largest number (9) being the first element and the rest in
              descending order. The first step in the algorithm is to check if
              the array's length is less than or equal to 1. If it is, return
              the array since it's already sorted.
            </p>
            <br />
            <p className="text">
              The following step starts a while loop that will continue to run
              until the "sorted" variable is equal to true. Following the while
              loop we initialize a for loop for the length of the given array.
              Right after initializing this loop, the sorted variable is set to
              true. The first iteration in the for loop compares the values of
              arr[0] and arr[1]. Since arr[0] is greater than arr[1] the swap
              occurs 'bubbling' up the 9 into the arr[1] position. The second
              iteration will then compare arr[1] against arr[2] and the same
              sequence will occur.{" "}
            </p>
            <br />
            <p className="text">
              If any of the iterations resulted in a swap then the "sorted"
              variable will be set to false. As long as this variable is false
              the while loop will continue to iterate. Finally if a full scan
              through the array makes zero swaps then the sorted variable will
              have a true value and the loop will end, returning a sorted array.{" "}
            </p>
            <br />
            <img className="bubble-code" src={bubbleCode} />
            <br />
            <h2>Pseudo Code</h2>
            <ol className="bubble-ordered text">
              <li className="bubble-list">
                Check if array.length is less than one.
              </li>
              <li className="bubble-list">
                If it is return the array, it's sorted
              </li>
              <li className="bubble-list">
                If not initialize a variable and set it to false
              </li>
              <li className="bubble-list">
                Create a "while variable is equal to false" loop
              </li>
              <li className="bubble-list">
                Initialize a for loop for the length of the array
              </li>
              <li className="bubble-list">
                Set the sorted variable to true before any conditions are
                checked
              </li>
              <li className="bubble-list">
                If the array[index] is greater than array[index +1] swap the
                elements and set sorted to false
              </li>
              <li className="bubble-list">
                Once elements are sorted and variable boolean is true, return
                the sorted array
              </li>
            </ol>
            <br />
            <br />
            <p className="text">
              If you have any questions, suggestions or concerns please drop a
              comment below! After writing this I think it may have been more
              interesting to write a tutorial on how I made the animation with
              react, rather than the plain old bubble sort algorithm =).
            </p>
          </div>
          <br />
          <br />
        </div>
        <Comments type="bubble" />
      </div>
    );
  }
}

export default Bubble;
