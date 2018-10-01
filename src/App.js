import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Fab from "./components/Fab";
import Blog from "./components/Blog";
import Bubble from "./components/Bubble";

class App extends Component {
  render() {
    return (
      <Router>
        <h1 className="App">
          <Navbar />
          <Switch>
            <Landing exact path="/" component={Landing} />
            <Fab exact path="/fab" component={Fab} />
            <Blog exact path="/blog" component={Blog} />
            <Bubble exact path="/bubble" component={Bubble} />
          </Switch>
          <Footer />
        </h1>
      </Router>
    );
  }
}

export default App;
