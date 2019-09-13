import React, { Component } from "react";
import "../styles/bubble.css";
import Comments from "./Comments";
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

  // Reset the array back to unsorted and re-sort
  handleClick = event => {
    let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    this.setState({ arr: arr });
    this.bubbleSort(arr, 0);
  };

  // Sorting animation
  bubbleSort(arr, num) {
    let that = this;
    let timer = setInterval(function() {
      // Perform a swap if first element is greater than the next
      if (arr[num] > arr[num + 1]) {
        let a = arr[num];
        let b = arr[num + 1];
        arr[num] = b;
        arr[num + 1] = a;
      }
      that.setState({ arr: arr });
      that.state.counter += 1;
      // Amount or iterations for worst case 1-9 to be sorted (72)
      if (that.state.counter === 72) {
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
            <div className="white">
              <h1 className="blog-header">
                Javascript Sorting Algorithms: Bubble sort
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
              disabled={this.state.counter !== 71}
            >
              Watch again
            </button>
            <br />
            <br />
            <p className="text">
              This post will be the first of a series on Javascript sorting
              algorithms. A bubble sort is usually a good introduction to
              sorting algorithms, as it's relatively simple to understand and
              implement. The algorithm works by iterating through the array and
              "bubbling" up values to their correct position.
            </p>
            <br />
            <p className="text">
              As you can see in the animation above, the array being sorted is
              the worst case possible scenario, with a time complexity of O(n^2)
              with the largest number 9 being the first element, and the rest in
              descending order. Bubble sort with only be Ω(n) when the array is
              already sorted.
            </p>
            <br />
            <h2>Time Complexity</h2>
            <table>
              <tr>
                <th>Best</th>
                <th>Average</th>
                <th>Worst</th>
              </tr>
              <tr>
                <td>Ω(n)</td>
                <td>θ(n^2)</td>
                <td>O(n^2)</td>
              </tr>
            </table>
            <br />
            <pre>
              <code>{`
// Javascript implementation

let unsortedArr = [9,8,7,6,5,4,3,2,1];

function bubbleSort(arr) {
  if (arr.length === 1) return arr;    
  let swapped = false; 
  while(!swapped) { 
    arr.forEach((e, i) => {
      if (arr[i] > arr[i+1]) {
        let temp= arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    });
  };
  return arr; 
}

bubbleSort(unsortedArr) // [1,2,3,4,5,6,7,8,9]
              `}</code>
            </pre>
            <br />
            <h2>Pseudo Code</h2>
            <ol className="bubble-ordered text">
              <li className="bubble-list">Check if arrays length is one.</li>
              <li className="bubble-list">
                If it is, return the array, it's already sorted.
              </li>
              <li className="bubble-list">
                If not, initialize a variable and set it to false. This will be
                used in the next step.
              </li>
              <li className="bubble-list">
                Use a loop to continue iteration while the above variable is
                false.
              </li>
              <li className="bubble-list">
                Inside our while loop, scan through the array to be sorted.
              </li>
              <li className="bubble-list">
                If the array[index] is greater than array[index +1] swap the
                elements and set our swapped value to true.
              </li>
              <li className="bubble-list">
                Continue this process, "bubbling" up the largest element to it's
                correct sorted position on each iteration.
              </li>
              <li className="bubble-list">
                Once the array is sorted, on the functions last iteration, it
                will skip setting the swapped variable to true therefore ending
                the while loop and returning the sorted array.
              </li>
            </ol>
            <br />
            <br />
            <p className="text">
              If you have any questions, suggestions or concerns please drop a
              comment below!
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
