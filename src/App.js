import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Bubble from "./components/Bubble";
import Sets from "./components/Sets";

class App extends Component {
  render() {
    return (
      <Router>
        <h1 className="App">
          <Navbar />
          <Switch>
            <Landing exact path="/" component={Landing} />
            <Blog exact path="/blog" component={Blog} />
            <Bubble exact path="/bubble" component={Bubble} />
            <Sets exact path="/sets" component={Sets} />
          </Switch>
          <Footer />
        </h1>
      </Router>
    );
  }
}

export default App;
