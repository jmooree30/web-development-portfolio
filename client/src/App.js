import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Comments from "./components/Comments";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Fab from "./components/Fab";
import Bubble from "./components/Bubble";
import Info from "./components/Info";
import Blog from "./components/Blog";

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
