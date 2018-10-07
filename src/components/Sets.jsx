import React, { Component } from "react";
import "../styles/bubble.css";
import bubbleCode from "../assets/bubble-code.jpg";
import Comments from "./Comments";
import bubbles from "../assets/bubbles.jpg";
class Sets extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="top-container">
          <div className="header-wrapper">
            <div className="white">
              <h1 className="blog-header">
                Es6 - Sets: What are they? What's the difference between Set and
                Array?
              </h1>
              <i className="bubble-quote">
                <code>let set = new Set([iterable]);</code>
              </i>
            </div>
          </div>
          <div className="elipse">
            <div className="background-image-sets" />
          </div>
        </div>
        <div className="bubble-wrapper">
          <br />
          <div className="bubble-center">
            <p className="text" style={{ textAlign: "left" }}>
              With the introduction to ES6, four new data structures are
              available to Javascript developers to make our lives a litter
              easier.
              <br />
              <br />
              <ul style={{ textAlign: "left" }}>
                <li>Map</li>
                <li>Set</li>
                <li>WeapMap</li>
                <li>WeakSet</li>
              </ul>
            </p>
            <br />
            <p className="text" style={{ textAlign: "left" }}>
              Today we're going to talk about Set, and some of the key
              differences between sets and arrays. If you've been developing for
              any amount of time then you're probably familiar with arrays.
              Arrays are iterable, indexed collections of data that can contain
              whatever data types you want. <br />
              <br />
              <pre
              >{`let arr = [undefined, null, "string", 3, {key:"value"}, [1,2,3]];

let arr1 = new Array(undefined, null, "string", 3, {key:"value"}, [1,2,3]);

let arr2 = Array.from("123"); // [ '1', '2', '3' ]
`}</pre>
            </p>
            <br />
            <p className="text" style={{ textAlign: "left" }}>
              So what are sets? The set object is also used as a collection of
              data for primitive values and object references, where values are
              stored in insertion order. You can initialize a new set object by
              using the following syntax below, passing an iterable object as a
              parameter. Sets are keyed collections and values cannot be accesed
              by index. The other major difference is that sets only store
              unique values, no duplicates.
              <br />
              <br />
              <pre
              >{`let set = new Set([undefined, null, "string", 3, {key:"value"}, [1,2,3]]);

let set1 = new Set('123') // Set { '1', '2', '3' }

let set2 = new Set("1233333") // Set { '1', '2', '3' }`}</pre>
            </p>
            <br />
            <p className="text" style={{ textAlign: "left" }}>
              Have you ever had to remove duplicates from an array? If you have,
              you've probably came up with something like this...
              <br />
              <br />
              <pre>{`
let arr = [1,2,3,3,3,4,5];

let noDups = arr.filter(function(item, pos) {
  return arr.indexOf(item) == pos;
})

noDups // [1,2,3,4,5]
              `}</pre>
            </p>
            <br />
            <p className="text" style={{ textAlign: "left" }}>
              Well thanks to ES6 and the set object, check this out...
              <br />
              <br />
              <pre>{`
let arr = [1,2,3,3,3,4,5];

let noDups = Array.from(new Set(arr));

noDups // [1,2,3,4,5]
              `}</pre>
            </p>
            <br />
            <p className="text" style={{ textAlign: "left" }}>
              It should be noted that while sets do not contain duplicate
              values, type coercion does not play a role in sets like it does in
              other areas of Javascript. 1 and "1" will be treated as seperate
              values.
              <br />
              <br />
              <pre>{`new Set([1,"1",1,"1"]) // Set { 1, '1' }`}</pre>
            </p>
            <br />
            <p className="text" style={{ textAlign: "left" }}>
              Like arrays, sets come with their own set of methods and
              properties. Here I'll try to list some of them, and their array
              counterparts.
              <br />
              <br />
              <h1>Checking if elements exist</h1>
              <br />
              If you haven't heard of Array.prototype.includes, it's also a new
              feature of ES6. Whatever value that's passed as a parameter will
              either return "true" or "false" based on if the array "includes"
              that element, pretty straightforward.
              <br />
              <br />
              <pre>{`
[1,2,3,4,5].includes(1) // true

[1,2,3,4,5].includes(6) // false
              `}</pre>
              <br />
              Checking if values exist in sets is just as easy using the
              Set.prototype.has method.
              <br />
              <br />
              <pre>{`
let set = new Set([1,2,3,4,5]);

set.has(1) // true

set.has(6) // false
              `}</pre>
              <br />
              <h1>Removing Elements</h1>
              <br />
              Arrays have a few different methods for removing elements. You
              could use Array.prototype.pop to remove an element from the end of
              the array or Array.prototype.shift to remove the first element.
              For removing multiple elements, use Array.prototype.splice by
              passing the index you would like to start at and then the number
              of following elements you also want removed.
              <br />
              <br />
              <pre>{`
let arr = [1,2,3,4,5];

arr.pop() // returns 5 and removes that element from arr

arr.shift() // returns 1 and removes that element from arr

arr.splice(2,2) // return [ 3, 4 ] and removes elements 3 and 4 from arr
              `}</pre>
              <br />
              With sets, you have two different ways to remove elements,
              Set.prototype.delete and Set.prototype.clear. The delete method
              takes any value as a parameter and returns a boolean for whether
              or not the element was deleted. Clear doesn't recieve any
              arguments and will always return undefined, leaving you with an
              empty set object.
              <br />
              <br />
              <pre>{`
let set = new Set([1,2,3,4,5]);

set.delete(1) // true

set.delete(6) // false

set.clear() // returns undefined, calling the set variable will return an empty Set
              `}</pre>
              <br />
              <h1>Adding elements</h1>
              <br />
              Array.prototype.push and Array.prototype.unshift are the available
              methods for adding elements to an array. Push will add an element
              to the end of the array and unshift will add it to the beginning
              of the array.
              <br />
              <br />
              <pre>{`
let arr = [1,2,3,4,5];

arr.push(6) // will return 6 and add the element to the end of the array [1,2,3,4,5,6]

arr.unshift(0) // will return 0 and add the element to the start of the array [0,1,2,3,4,5]
              `}</pre>
              <br />
              Sets only have one way of adding elements, Set.prototype.add. This
              method will add the element to the end of the set.
              <br />
              <br />
              <pre>{`
let set = new Set([1,2,3,4,5]);

set.add(6) // Set { 1, 2, 3, 4, 5, 6 }
              `}</pre>
              <br />
              <br />
              <h1>Size properties</h1>
              <br />
              The length property of the Array can be checked using
              Array.length.
              <br />
              <br />
              <pre>{`
let arr = [1,2,3,4,5];

arr.length // 5
              `}</pre>
              <br />
              Set.size will return the number of values in the Set object.
              <br />
              <br />
              <pre>{`
let set = new Set([1,2,3,4,5]);

set.size // 5
              `}</pre>
              <br />
              <br />
              <h1>Iterators</h1>
              <br />
              For arrays the Array.prototype.values method returns a new Array
              Iterator object that contains the values for each index in the
              array.
              <br />
              <br />
              <pre>{`
let arr = [1,2,3,4,5];

iterator = arr.values()

console.log(iterator.next().value) // 1

console.log(iterator.next().value) // 2

console.log(iterator.next().value) // 3

console.log(iterator.next().value) // 4

console.log(iterator.next().value) // 5

console.log(iterator.next().done) // true
              `}</pre>
              <br />
              Set.prototype.values returns new Iterator object containing the
              values for each element in the given Set, in insertion order.
              <br />
              <br />
              <pre>{`
let set = new Set([1,2,3,4,5]);

iterator = set.values()

console.log(iterator.next().value) // 1

console.log(iterator.next().value) // 2

console.log(iterator.next().value) // 3

console.log(iterator.next().value) // 4

console.log(iterator.next().value) // 5

console.log(iterator.next().done) // true
              `}</pre>
              <br />
              <h1>Conclusion</h1>
              <br />
              Although this was sort of a comparison between arrays and sets,
              that does not mean one is better than the other. Set was
              introduced to make up for some the things that Array was lacking.
              Performance wise, I have read that they both are capable of
              achieving better run times in certain scenarios, using different
              methods, and this is something I'm still learning about myself. In
              most cases I will still continue to use Array, but it's nice to
              know that this new DS that can only contain unique values is
              available to me.
            </p>
          </div>
          <br />
          <br />
        </div>
        <Comments type="set" />
      </div>
    );
  }
}
export default Sets;
